<template>
    <div>
        <div class="centerx">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{appointments.length}} results found in {{resultTime}}ms</b>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                    <vs-button vs-w="3" color="primary" type="filled" icon-pack="feather" icon="icon-plus" to="/appointment/add-appointment/new">New Appointment</vs-button>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input vs-w="9" icon-pack="feather" icon="icon-search" :label-placeholder="$t('Search') || 'Search'" v-model="searchText" class="is-label-placeholder w-full" />
                </vs-col>
            </vs-row>
            <div class="vx-col w-full mb-base"></div>
            <vs-table multiple v-model="selected" max-items="50" pagination :data="appointments" v-if="appointments.length > 0">
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>ID</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th sort-key="duration">Duration</vs-th>
                    <vs-th>Telephones</vs-th>
                    <vs-th>Payment</vs-th>
                </template>
                <template slot-scope="{data}">
                    <template v-for="(appointment, indextr) in appointments">
                        <vue-context :ref="`appointment-${appointment.id}`">
                            <ul class="bordered-items p-0">
                                <li @click="optionClicked(appointment.id, $event.target.innerText)"><i class="fas fa-eye"></i>&nbsp;&nbsp; View</li>
                                <li @click="optionClicked(appointment.id, $event.target.innerText)"><i class="fas fa-edit"></i>&nbsp;&nbsp; Edit</li>
                                <li @click="optionClicked(appointment.id, $event.target.innerText)"><i class="fas fa-trash"></i>&nbsp;&nbsp; Delete</li>
                            </ul>
                        </vue-context>
                        <vs-tr :key="indextr">
                            <vs-td :data="indextr + 1">
                                <div @contextmenu.prevent="openContext(appointment.id)">
                                    {{ indextr + 1 }}
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
                                <div @contextmenu.prevent="openContext(appointment.id)">
                                    <template v-if="appointment.patient.payment.percentage === 100"><i class="fas fa-check"></i> <b>Complete</b></template>
                                    <template v-else><b>{{appointment.patient.payment.paid}}</b> Out of <b>{{appointment.patient.payment.total}}</b></template>
                                    <br>
                                    <vs-progress v-if="appointment.patient.payment.percentage === 100" :percent="appointment.patient.payment.percentage" color="success"></vs-progress>
                                    <vs-progress v-else-if="appointment.patient.payment.percentage > 25" :percent="appointment.patient.payment.percentage" color="warning"></vs-progress>
                                    <vs-progress v-else-if="appointment.patient.payment.percentage <= 25" :percent="appointment.patient.payment.percentage" color="danger"></vs-progress>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </template>
            </vs-table>
        </div>
    </div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.css";
    import "@fortawesome/fontawesome-free/js/all.js";
    import { VueContext } from 'vue-context';
    export default {
        name: "Appointment",
        components: {
            VueContext
        },
        mounted() {
            this.getAppointmentsData(Date.now());
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
                resultTime: 0,
                appointments: [],
            }
        },
        methods: {
            optionClicked(appointmentID, text) {
                this.$vs.notify({
                    title: 'Context Menu',
                    text: text,
                    icon: 'feather',
                    iconPack: 'icon-alert-circle',
                    color: 'primary'
                })
            },

            getAppointmentsData(InitialTime){
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
                            },
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
                    },
                ];
                this.resultTime = Date.now() - InitialTime;
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
                })
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

            openContext(id){
                this.$refs[`appointment-${id}`][0].open();
            }
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }

    .v-context ul li{
        margin: 0;
        padding: 10px 35px;
        cursor: pointer;
    }

    .v-context ul li:hover {
        background: #1e88e5;
        color: #fafafa;
    }
</style>
