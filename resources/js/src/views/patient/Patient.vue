<template>
    <div>
        <vx-card v-if="can('browse-patient')" ref="browse" title='Patients List' collapse-action refreshContentAction @refresh="getPatientsData">
            <vs-table :sst="true" @sort="handleSort" :data="patients">
                <template slot="header">
                    <vs-row>
                        <vs-col vs-lg="6" vs-sm="12" vs-xs="12">
                            <vs-button v-if="can('create-patient')" size="small" to="/dashboard/patient/create" icon-pack="feather" icon="icon-plus" type="filled">New Patient</vs-button>
                        </vs-col>
                        <vs-col vs-lg="3" vs-sm="6" vs-xs="6" class="mb-5">
                            <vs-select
                                autocomplete
                                class="selectExample"
                                v-model="filterBy"
                                icon-pack="feather"
                                icon="icon-filter"
                            >
                                <vs-select-item value="id" text="ID"/>
                                <vs-select-item value="name" text="Name"/>
                                <vs-select-item value="email" text="Email"/>
                                <vs-select-item value="phone" text="Phone"/>
                            </vs-select>
                        </vs-col>
                        <vs-col vs-lg="3" vs-sm="6" vs-xs="6" class="mb-5">
                            <vs-input icon-pack="feather" icon="icon-search" icon-after placeholder="search" v-model="searchText" @change="handleSearch"></vs-input>
                        </vs-col>
                    </vs-row>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="first_name">Name</vs-th>
                    <vs-th sort-key="birth_date">Birth Date</vs-th>
                    <vs-th>Telephones</vs-th>
                    <vs-th>Payment</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(patient, index) in patients">
                        <vs-td :data="index+1">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="patient.id">
                            {{ patient.id}}
                        </vs-td>

                        <vs-td :data="patient.first_name">
                            {{ patient.first_name}} {{ patient.last_name}}
                        </vs-td>

                        <vs-td :data="patient.birth_date">
                            {{ patient.birth_date?patient.birth_date:'Not Specified'}}
                        </vs-td>

                        <vs-td>
                            <template v-for="(telephone, telephone_index) in patient.phones">
                                {{ telephone.number }}<template v-if="telephone_index !== patient.phones.length-1">, </template>
                            </template>
                        </vs-td>

                        <vs-td :data="patient.counter">
                            <template v-if="patient.paid_payments">
                                <template v-if="((patient.paid_payments*100)/patient.payments_total)===100"><i class="fas fa-check"></i> <b>Complete</b></template>
                                <template v-else><b>{{patient.paid_payments}}</b> Out of <b>{{patient.payments_total}}</b></template>
                                <br>
                                <vs-progress v-if="((patient.paid_payments*100)/patient.payments_total) === 100" :percent="((patient.paid_payments*100)/patient.payments_total)" color="success"></vs-progress>
                                <vs-progress v-else-if="((patient.paid_payments*100)/patient.payments_total) > 25" :percent="((patient.paid_payments*100)/patient.payments_total)" color="warning"></vs-progress>
                                <vs-progress v-else-if="((patient.paid_payments*100)/patient.payments_total) <= 25" :percent="((patient.paid_payments*100)/patient.payments_total)" color="danger"></vs-progress>
                            </template>
                            <template v-else>
                                No Payments Yet
                            </template>
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/4 pl-2">
                                        <vs-button v-if="can('view-patient')" :to="`/dashboard/patient/${patient.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                    </div>
                                    <div class="w-1/4 pl-2">
                                        <vs-button v-if="can('create-appointment')" @click="reserveAppointment(patient.id)" radius color="dark" type="border" icon-pack="feather" icon="icon-edit-2"></vs-button>
                                    </div>
                                    <div class="w-1/4 pl-2">
                                        <vs-button v-if="can('edit-patient')" :to="`/dashboard/patient/${patient.id}/edit`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>
                                    <div class="w-1/4 pl-2">
                                        <vs-button v-if="can('delete-patient')" :id="`btn-delete-${patient.id}`" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeletePatient(patient)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-pagination goto class="mt-5" @change="handleChangePage" :total="total_pages" v-model="currentPage"></vs-pagination>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "Patient",
        mounted() {
            this.getPatientsData();
        },
        data: function (){
            return {
                selected: [],
                'tableList': [
                    'vs-th: Component',
                    'vs-tr: Component',
                    'vs-td: Component',
                    'thread: Slot',
                    'tbody: Slot',
                    'header: Slot'
                ],
                searchText: "",
                patients: [],
                currentPage: 1,
                sortFilter: 'sortDesc=id',
                paginate: 15,
                total_pages: 0,
                filterBy: 'id'
            }
        },
        methods: {
            reserveAppointment(patientID)
            {
                this.$router.push({name: 'add-appointment', params: {patient_id: patientID}});
            },

            getPatientsData()
            {
                this.$vs.loading({container: this.$refs.browse.$refs.content, scale: 0.5});
                this.$store.dispatch('patient/getData', `?page=${this.currentPage}&paginate=${this.paginate}&${this.sortFilter}&${this.filterBy}=${this.searchText}&`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.browse.$refs.content);
                        this.patients = response.data.data.data;
                        this.total_pages = response.data.data.meta.pagination.total_pages;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.browse.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeletePatient(patinet)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deletePatient,
                    parameters: [patinet]
                });
            },

            deletePatient(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('patient/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.patients = this.patients.filter(patient => {return patient.id !== params[0].id});
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            handleSearch()
            {
                this.currentPage=1;
                this.getPatientsData();
            },

            handleSort(key, active)
            {
                this.sortFilter = active?`sortDesc=${key}`:`sortAsc=${key}`;
                this.currentPage=1;
                this.getPatientsData();
            },

            handleChangePage(page) {
                this.getPatientsData();
            }
        }
    }
</script>

<style>
</style>
