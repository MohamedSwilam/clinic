<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card ref="view" title="Personal Information" collapseAction>
                <vs-row v-if="employee">
                    <vs-row class="mb-5">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <vs-avatar class="mx-auto mb-2 block" size="120px" :src="employee.image" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.first_name}} {{employee.last_name}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.roles[0].name}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            {{employee.email}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Birth Date: {{employee.birth_date}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Address: {{employee.address}} - {{employee.city}}, {{employee.country}}
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <p class="text-grey">
                                <template v-for="(phone, index) in employee.phones">
                                    <span class="txt-hover" @click="copyToClipboard(phone.number)">{{ phone.number }}</span>
                                    <template v-if="index !== employee.phones.length-1">, </template>
                                </template>
                                <template v-if="employee.phones.length===0">
                                    No Telephones Assigned!
                                </template>
                            </p>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-5 mb-5">
                        <vs-col vs-type="flex" vs-align="center" vs-justify="center">
                            <vs-button :to="`/dashboard/employee/${employee.id}/edit`" color="warning" type="filled" icon-pack="feather" icon="icon-edit">Edit Information</vs-button>
                        </vs-col>
                    </vs-row>
                </vs-row>

            </vx-card>
        </div>

        <div class="vx-col w-full mb-base" v-if="employee&&employee.roles[0].id===3">
            <vx-card ref="browse" title="Appointments" collapseAction refreshContentAction @refresh="getAppointments">
                <vs-table
                    :sst="true"
                    @sort="handleSort"
                    :data="appointments">

                    <template slot="header">
                        <vs-row>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12">
                                <vs-button size="small" to="/dashboard/appointment/add-appointment/new" icon-pack="feather" icon="icon-plus" type="filled">Add Appointment</vs-button>
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
                                        <vs-button v-if="can('delete-appointment')" class="ml-3" :id="`btn-delete-${appointment.id}`" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteAppointment(appointment)"></vs-button>
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
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="`Room: ${appointment.reservation_duration.room}`"></vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="`Illness Description: ${appointment.illness_description}`"></vs-list-item>
                                            <vs-row class="mt-5">
                                                <strong class="ml-5 mb-2">Update Status</strong>
                                                <vs-col vs-w="12">
                                                    <vs-button class="m-3" :key="status_index" v-for="(status, status_index) in statuses" :id="`update-status-btn-${appointment.id}-${status.id}`" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):updateStatus(index, appointment.id, status.id)" size="small" :color="status.color" :type="appointment.status.id===status.id?'filled':'border'" icon-pack="feather">{{status.name}}</vs-button>
                                                </vs-col>
                                            </vs-row>
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
        name: "profile",
        mounted() {
            this.getEmployeeData();
        },
        data: () => {
            return {
                employee: null,
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
                        name: 'Denture',
                        color: '#F012BE',
                    },
                    {
                        id: 7,
                        name: 'X-ray',
                        color: '#0700ff',
                    },
                    {
                        id: 8,
                        name: 'Panorama',
                        color: '#B10DC9',
                    },
                    {
                        id: 9,
                        name: 'Ct 1/4 arch',
                        color: '#5286aa',
                    },
                    {
                        id: 10,
                        name: 'Ct Arch',
                        color: '#ddba00',
                    },
                    {
                        id: 11,
                        name: 'Ct Both Arches',
                        color: '#ff1e6b',
                    }
                ]
            }
        },
        methods: {
            getEmployeeData() {
                this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('employee/view', this.$store.getters['auth/userData'].id)
                    .then(response => {
                        this.employee = response.data.data.data;
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        if(this.employee.roles[0].id===3){
                            this.getAppointments();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            getAppointments()
            {
                this.$vs.loading({container: this.$refs.browse.$refs.content, scale: 0.5});
                this.$store.dispatch('appointment/getData', `?page=${this.currentPage}&paginate=${this.paginate}&${this.sortFilter}&${this.filterBy}=${this.searchText}&doctor=${this.$store.getters['auth/userData'].id}`)
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

            confirmDeleteAppointment(appointment)
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
                this.getAppointments();
            },

            handleSort(key, active)
            {
                this.sortFilter = active?`sortDesc=${key}`:`sortAsc=${key}`;
                this.currentPage=1;
                this.getAppointments();
            },

            handleChangePage() {
                this.getAppointments();
            },

            copyToClipboard(text) {
                if (window.clipboardData && window.clipboardData.setData) {
                    // IE specific code path to prevent textarea being shown while dialog is visible.
                    this.onCopy();
                    return clipboardData.setData("Text", text);

                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        this.onCopy();
                        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                    } catch (ex) {
                        this.onError();
                        return false;
                    } finally {
                        document.body.removeChild(textarea);
                    }
                }
            },
            onCopy() {
                this.$vs.notify({
                    title: 'Success!',
                    text: 'Text copied successfully.',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-check-circle'
                });
            },
            onError() {
                this.$vs.notify({
                    title: 'Failed!',
                    text: 'Error in copying text.',
                    color: 'danger',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-alert-circle'
                })
            },
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
