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
                </vs-row>
            </vx-card>
        </div>

        <div class="vx-col w-full mb-base" v-if="this.appointments.length>0">
            <vx-card title="Appointments" collapseAction>
                <vs-table :sst="true"
                          @search="handleSearch"
                          @change-page="handleChangePage"
                          @sort="handleSort"
                          max-items="50" search pagination
                          :data="appointments"
                          v-if="appointments.length > 0">
                    <template slot="header">
                        <div class="con-select-example">
                            <vs-select
                                autocomplete
                                class="selectExample"
                                label="Filter"
                                v-model="filterData"
                                icon-pack="feather"
                                icon="icon-filter"
                            >
                                <div>
                                    <vs-select-group :title="'Duration'">
                                        <vs-select-item value="today" text="Today"/>
                                        <vs-select-item value="Tomorrow" text="Tomorrow"/>
                                        <vs-select-item value="This Week" text="This Week"/>
                                        <vs-select-item value="This Month" text="This Month"/>
                                    </vs-select-group>
                                </div>
                                <div>
                                    <vs-select-group :title="'Status'">
                                        <vs-select-item value="Coming" text="Coming"/>
                                        <vs-select-item value="Inside" text="Inside"/>
                                        <vs-select-item value="Postponed" text="Postponed"/>
                                        <vs-select-item value="Finished" text="Finished"/>
                                    </vs-select-group>
                                </div>
                                <div>
                                    <vs-select-group :title="'Gender'">
                                        <vs-select-item value="Male" text="Male"/>
                                        <vs-select-item value="Female" text="Female"/>
                                    </vs-select-group>
                                </div>
                                <div>
                                    <vs-select-group :title="'Payments'">
                                        <vs-select-item value="Less Paid" text="Less Paid"/>
                                        <vs-select-item value="Most Paid" text="Most Paid"/>
                                        <vs-select-item value="Complete" text="Complete"/>
                                    </vs-select-group>
                                </div>
                            </vs-select>
                        </div>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>ID</vs-th>
                        <vs-th>Name</vs-th>
                        <vs-th sort-key="duration">Duration</vs-th>
                        <vs-th>Telephones</vs-th>
                        <vs-th>Status</vs-th>
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <template v-for="(appointment, index) in appointments">
                            <vs-tr :key="index">
                                <vs-td :data="index + 1">
                                    <div @contextmenu.prevent="openContext(appointment.id)">
                                        {{ index + 1 }}
                                    </div>
                                </vs-td>

                                <vs-td>
                                    <div @contextmenu.prevent="openContext(appointment.id)">
                                        {{ appointment.patient.public_id }}
                                    </div>
                                </vs-td>

                                <vs-td>
                                    <div @contextmenu.prevent="openContext(appointment.id)">
                                        {{ appointment.patient.name }}
                                    </div>
                                </vs-td>

                                <vs-td>
                                    <div @contextmenu.prevent="openContext(appointment.id)">
                                        {{appointment.duration.getUTCDay()}}/{{appointment.duration.getUTCMonth()}}/{{appointment.duration.getUTCFullYear()}} {{appointment.duration.toLocaleTimeString()}}
                                    </div>
                                </vs-td>

                                <vs-td>
                                    <div @contextmenu.prevent="openContext(appointment.id)">
                                        <template v-for="(telephone, index) in appointment.patient.telephones">
                                            {{ telephone }}<template v-if="index !== appointment.patient.telephones.length-1">, </template>
                                        </template>
                                    </div>
                                </vs-td>
                                <vs-td>
                                    <vs-chip :color="appointment.status.color">{{appointment.status.title}}</vs-chip>
                                </vs-td>

                                <vs-td>
                                    <div class="flex mb-4">
                                        <div class="w-1/3 pl-2">
                                            <vs-button :to="`/dashboard/patient/${appointment.patient.public_id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                        </div>
                                        <div class="w-1/3 pl-2">
                                            <vs-button :to="`/dashboard/patient/${appointment.patient.public_id}/edit`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                        </div>
                                        <div class="w-1/3 pl-2">
                                            <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteAppointement(appointment)"></vs-button>
                                        </div>
                                    </div>
                                </vs-td>

                                <template class="expand-user" slot="expand">
                                    <div class="con-expand-users w-full">
                                        <vs-list>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="'Appointment Information'"></vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="'Appointment Information'"></vs-list-item>
                                            <vs-list-item icon-pack="feather" icon="icon-arrow-right" :title="'Update Status'">
                                                <vs-button size="small" color="primary" :type="appointment.status.title=='Coming'?'filled':'border'" icon-pack="feather">Coming</vs-button>
                                                <vs-button size="small" color="danger" :type="appointment.status.title=='Inside'?'filled':'border'" icon-pack="feather">Inside</vs-button>
                                                <vs-button size="small" color="warning" :type="appointment.status.title=='Postponed'?'filled':'border'" icon-pack="feather">Postponed</vs-button>
                                                <vs-button size="small" color="success" :type="appointment.status.title=='Finished'?'filled':'border'" icon-pack="feather">Finished</vs-button>
                                            </vs-list-item>
                                        </vs-list>
                                    </div>
                                </template>

                            </vs-tr>
                        </template>
                    </template>
                </vs-table>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "viewData",
        mounted() {
            this.getAppointments();
            this.getEmployeeData();
        },
        data: () => {
            return {
                employee: null,

                appointments: [],

                filterData: []
            }
        },
        methods: {
            getEmployeeData() {
                this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('employee/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.employee = response.data.data.data;
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

            handleSearch()
            {

            },

            handleChangePage()
            {

            },

            handleSort()
            {

            },

            getAppointments()
            {
                this.appointments = [
                    {
                        id: 1,
                        type: 'Reservation Type1',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 1,
                            name: "Phil Gray",
                            public_id: "p-105",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 200,
                                total: 1000,
                                percentage: (200*100)/1000
                            },
                        },
                        status: {
                            id: 1,
                            title: 'Coming',
                            color: 'primary'
                        }
                    },
                    {
                        id: 2,
                        type: 'Reservation Type1',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 1,
                            name: "Phil Gray",
                            public_id: "p-106",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 500,
                                total: 800,
                                percentage: (500*100)/800
                            },
                        },
                        status: {
                            id: 2,
                            title: 'Inside',
                            color: 'danger'
                        }
                    },
                    {
                        id: 3,
                        type: 'Reservation Type1',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 1,
                            name: "Phil Gray",
                            public_id: "p-105",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 900,
                                total: 900,
                                percentage: (900*100)/900
                            },
                        },
                        status: {
                            id: 3,
                            title: 'Postponed',
                            color: 'warning'
                        }
                    },
                    {
                        id: 4,
                        type: 'Reservation Type1',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 1,
                            name: "Phil Gray",
                            public_id: "p-107",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 200,
                                total: 1000,
                                percentage: (200*100)/1000
                            }
                        },
                        status: {
                            id: 4,
                            title: 'Finished',
                            color: 'success'
                        },
                    },
                    {
                        id: 5,
                        type: 'Reservation Type1',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 1,
                            name: "Phil Gray",
                            public_id: "p-108",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 200,
                                total: 1000,
                                percentage: (200*100)/1000
                            },
                        },
                        status: {
                            id: 4,
                            title: 'Finished',
                            color: 'success'
                        }
                    },
                    {
                        id: 6,
                        type: 'Reservation Type1',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 1,
                            name: "Phil Gray",
                            public_id: "p-109",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 700,
                                total: 1000,
                                percentage: (700*100)/1000
                            },
                        },
                        status: {
                            id: 4,
                            title: 'Finished',
                            color: 'success'
                        },
                    },
                    {
                        id: 7,
                        type: 'Reservation Type2',
                        duration: new Date(),
                        doctor: {
                            id: 1,
                            name: 'Irene Baker'
                        },
                        patient: {
                            id : 2,
                            name: "Phil Gray",
                            public_id: "p-110",
                            dob: "18/10/1997",
                            telephones: ["01096436702", "01113689783"],
                            payment: {
                                paid: 200,
                                total: 1000,
                                percentage: (200*100)/1000
                            },
                        },
                        status: {
                            id: 4,
                            title: 'Missed',
                            color: 'dark'
                        },
                    },
                ];
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
    .selectExample {
        margin: 10px;
    }
    .con-select-example {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .con-select .vs-select {
        width: 100%
    }
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
    @media (max-width: 550px) {
        .con-select {
            flex-direction: column;
        }
        .con-select .vs-select {
            width: 100%
        }
    }
</style>
