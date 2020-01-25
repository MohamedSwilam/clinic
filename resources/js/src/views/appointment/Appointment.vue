<template>
    <div>
        <div v-if="can('browse-appointment')" class="vx-col w-full mb-base">
            <vx-card ref="browse" title="Appointments" collapseAction refreshContentAction @refresh="getAppointmentsData">
                <vs-table
                    :sst="true"
                    @sort="handleSort"
                    :data="appointments">

                    <template slot="header">
                        <vs-row>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12">
                                <vs-button v-if="can('create-appointment')" size="small" to="/dashboard/appointment/add-appointment/new" icon-pack="feather" icon="icon-plus" type="filled">Add Appointment</vs-button>
                            </vs-col>
                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6" class="mb-5">
                                <vs-select
                                    autocomplete
                                    class="selectExample"
                                    v-model="filterBy"
                                    icon-pack="feather"
                                    icon="icon-filter"
                                >
                                    <vs-select-item value="date" text="Date"/>
                                    <vs-select-item value="status" text="Status"/>
                                    <vs-select-item value="patient" text="Patient ID"/>
                                    <vs-select-item value="patientName" text="Patient Name"/>
                                    <vs-select-item value="doctorName" text="Doctor Name"/>
                                </vs-select>
                            </vs-col>
                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6" class="mb-5">
                                <vs-input icon-pack="feather" icon="icon-search" icon-after placeholder="search" v-model="searchText" @change="handleSearch"></vs-input>
                            </vs-col>
                        </vs-row>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th sort-key="patient_id">ID</vs-th>
                        <vs-th>Name</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>From</vs-th>
                        <vs-th>To</vs-th>
                        <vs-th sort-key="status">Status</vs-th>
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <template v-for="(appointment, index) in appointments">
                            <vs-tr :key="index">
                                <vs-td :data="index + 1">
                                    {{ index + 1 }}
                                </vs-td>

                                <vs-td>
                                    {{ appointment.patient.id }}
                                </vs-td>

                                <vs-td>
                                    {{ appointment.patient.first_name }} {{ appointment.patient.last_name }}
                                </vs-td>

                                <vs-td>
                                    {{appointment.reservation_duration.date}}
                                </vs-td>

                                <vs-td>
                                    {{new Date(`${appointment.reservation_duration.date} ${appointment.reservation_duration.start_time}`).toLocaleTimeString()}}
                                </vs-td>

                                <vs-td>
                                    {{new Date(`${appointment.reservation_duration.date} ${appointment.reservation_duration.end_time}`).toLocaleTimeString()}}
                                </vs-td>
                                <vs-td>
                                    <vs-chip :color="appointment.status.color">{{appointment.status.name}}</vs-chip>
                                </vs-td>

                                <vs-td>
                                    <div class="flex mb-4">
                                        <vs-button v-if="can('view-patient')" :to="`/dashboard/patient/${appointment.patient.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                        <vs-button v-if="can('delete-appointment')" class="ml-3" :id="`btn-delete-${appointment.id}`" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteAppointement(appointment)"></vs-button>
                                    </div>
                                </vs-td>

                                <template class="expand-user" slot="expand">
                                    <div class="con-expand-users w-full">
                                        <vs-list>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="'Payments'">
                                                Paid <b>{{appointment.payment[0].paid}} EGP</b> Out of <b>{{appointment.payment[0].to_be_paid}} EGP</b>
                                            </vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="`Type: ${appointment.reservation_type.name}`"></vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="`Doctor: ${appointment.doctor.first_name} ${appointment.doctor.last_name}`"></vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="`Illness Description: ${appointment.illness_description}`"></vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="'Update Status'">
                                                <vs-button class="m-3" :key="status_index" v-for="(status, status_index) in statuses" :id="`update-status-btn-${appointment.id}-${status.id}`" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):updateStatus(index, appointment.id, status.id)" size="small" :color="status.color" :type="appointment.status.id===status.id?'filled':'border'" icon-pack="feather">{{status.name}}</vs-button>
                                            </vs-list-item>
                                        </vs-list>
                                    </div>
                                </template>
                            </vs-tr>
                        </template>
                    </template>
                </vs-table>
                <vs-pagination goto class="mt-5" @change="handleChangePage" :total="total_pages" v-model="currentPage"></vs-pagination>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Appointment",
        mounted() {
            this.getAppointmentsData();
        },
        data: function (){
            return {
                searchText: "",
                appointments: [],
                currentPage: 1,
                sortFilter: 'sortDesc=id',
                paginate: 15,
                total_pages: 0,
                filterBy: 'date',
                is_requesting: false,
                statuses: [
                    {
                        id: 1,
                        name: 'Coming',
                        color: '#7467F0'
                    },
                    {
                        id: 2,
                        name: 'Inside',
                        color: '#EA5455'
                    },
                    {
                        id: 3,
                        name: 'Postponed',
                        color: '#FF9F42'
                    },
                    {
                        id: 4,
                        name: 'Finished',
                        color: '#27C76F'
                    },
                    {
                        id: 5,
                        name: 'Missed',
                        color: '#1E1E1E',
                    },
                    {
                        id: 6,
                        name: 'Bone',
                        color: '#001f3f',
                    },
                    {
                        id: 7,
                        name: 'Implants',
                        color: '#0074D9',
                    },
                    {
                        id: 8,
                        name: 'Porcelain Crowns',
                        color: '#7FDBFF',
                    },
                    {
                        id: 9,
                        name: 'Emax Crown',
                        color: '#39CCCC',
                    },
                    {
                        id: 10,
                        name: 'Endo',
                        color: '#3D9970',
                    },
                    {
                        id: 11,
                        name: 'Filling',
                        color: '#2ECC40',
                    },
                    {
                        id: 12,
                        name: 'Scaling  Polishing',
                        color: '#01FF70',
                    },
                    {
                        id: 13,
                        name: 'Whittening',
                        color: '#FF851B',
                    },
                    {
                        id: 14,
                        name: 'Gum',
                        color: '#FF4136',
                    },
                    {
                        id: 15,
                        name: 'Extraction',
                        color: '#85144b',
                    },
                    {
                        id: 16,
                        name: 'Denture',
                        color: '#F012BE',
                    },
                    {
                        id: 17,
                        name: 'X-ray',
                        color: '#111111',
                    },
                    {
                        id: 18,
                        name: 'Panorama',
                        color: '#B10DC9',
                    },
                    {
                        id: 19,
                        name: 'Ct 1/4 arch',
                        color: '#AAAAAA',
                    },
                    {
                        id: 20,
                        name: 'Ct Arch',
                        color: '#DDDDDD',
                    },
                    {
                        id: 21,
                        name: 'Ct Both Arches',
                        color: '#2E2E2E',
                    }
                ]
            }
        },
        methods: {
            getAppointmentsData(){
                this.$vs.loading({container: this.$refs.browse.$refs.content, scale: 0.5});
                this.$store.dispatch('appointment/getData', `?page=${this.currentPage}&paginate=${this.paginate}&${this.sortFilter}&${this.filterBy}=${this.searchText}`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.browse.$refs.content);
                        this.appointments = response.data.data.data;
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

            updateStatus(index, appointmentId, statusId){
                this.is_requesting=true;
                this.$vs.loading({container: `#update-status-btn-${appointmentId}-${statusId}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('appointment/update', {id: appointmentId, data: {status_id: statusId, has_payment: 0}})
                    .then(response => {
                        this.is_requesting = false;
                        this.appointments[index].status_id = statusId;
                        this.appointments[index].status = this.statuses.filter(status => {return status.id===statusId})[0];
                        this.$vs.loading.close(`#update-status-btn-${appointmentId}-${statusId} > .con-vs-loading`);
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
                        this.$vs.loading.close(`update-status-btn-${appointmentId}-${statusId} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeleteAppointement(appointment)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteAppointment,
                    parameters: [appointment]
                });
            },

            deleteAppointment(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('appointment/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.appointments = this.appointments.filter(appointment => {return appointment.id !== params[0].id});
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
                this.getAppointmentsData();
            },

            handleSort(key, active)
            {
                this.sortFilter = active?`sortDesc=${key}`:`sortAsc=${key}`;
                this.currentPage=1;
                this.getAppointmentsData();
            },

            handleChangePage() {
                this.getAppointmentsData();
            }
        }
    }
</script>

<style>

</style>
