<template>
    <div>
        <vs-button vs-w="3" color="primary" type="filled" icon-pack="feather" icon="icon-plus" @click="download">Download PDF</vs-button>
        <div class="centerx" ref="content">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{patients.length}} results found in {{resultTime}}ms</b>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                    <vs-button vs-w="3" color="primary" type="filled" icon-pack="feather" icon="icon-plus">New Patient</vs-button>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input vs-w="9" icon-pack="feather" icon="icon-search" :label-placeholder="$t('Search') || 'Search'" v-model="searchText" class="is-label-placeholder w-full" />
                </vs-col>
            </vs-row>
            <div class="vx-col w-full mb-base"></div>
            <vs-table multiple v-model="selected" max-items="50" pagination :data="patients" v-if="patients.length > 0">
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th sort-key="public_id">ID</vs-th>
                    <vs-th sort-key="name">Name</vs-th>
                    <vs-th sort-key="dob">Age</vs-th>
                    <vs-th sort-key="telephones">Telephones</vs-th>
                    <vs-th sort-key="payment">Payment</vs-th>
                    <vs-th sort-key="last_visit">Status</vs-th>
                </template>
                <template slot-scope="{data}">
                    <template v-for="(tr, indextr) in data">
                        <vue-context :ref="`patient-${tr.id}`">
                            <ul class="bordered-items p-0">
                                <li @click="optionClicked(tr.id, 1)"><i class="fas fa-eye"></i>&nbsp;&nbsp; View</li>
                                <li @click="optionClicked(tr.id, 2)"><i class="fas fa-user-edit"></i>&nbsp;&nbsp; Edit</li>
                                <li @click="optionClicked(tr.public_id, 3)"><i class="fas fa-edit"></i>&nbsp;&nbsp; Reserve Appointment</li>
                                <li @click="optionClicked(tr.id, 4)"><i class="fas fa-share"></i>&nbsp;&nbsp; Send</li>
                                <li @click="optionClicked(tr.id, 5)"><i class="fas fa-file-csv"></i>&nbsp;&nbsp; Export CSV</li>
                                <li @click="optionClicked(tr.id, 6)"><i class="fas fa-trash"></i>&nbsp;&nbsp; Delete</li>
                            </ul>
                        </vue-context>
                        <vs-tr :data="tr" :key="indextr">
                            <vs-td :data="indextr + 1">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                    {{ indextr + 1 }}
                                </div>
                            </vs-td>

                            <vs-td :data="tr.public_id">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                    {{ tr.public_id }}
                                </div>
                            </vs-td>

                            <vs-td :data="tr.name">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                    {{ tr.name }}
                                </div>
                            </vs-td>

                            <vs-td :data="tr.dob">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                {{ tr.dob }}
                                </div>
                            </vs-td>

                            <vs-td :data="tr.telephones">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                    <template v-for="(telephone, index) in tr.telephones">
                                        {{ telephone }}<template v-if="index != tr.telephones.length-1">, </template>
                                    </template>
                                </div>
                            </vs-td>

                            <vs-td :data="tr.payment">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                    <template v-if="tr.payment.percentage == 100"><i class="fas fa-check"></i> <b>Complete</b></template>
                                    <template v-else><b>{{tr.payment.paid}}</b> Out of <b>{{tr.payment.total}}</b></template>
                                    <br>
                                    <vs-progress v-if="tr.payment.percentage == 100" :percent="tr.payment.percentage" color="success"></vs-progress>
                                    <vs-progress v-else-if="tr.payment.percentage > 25" :percent="tr.payment.percentage" color="warning"></vs-progress>
                                    <vs-progress v-else-if="tr.payment.percentage <= 25" :percent="tr.payment.percentage" color="danger"></vs-progress>
                                </div>
                            </vs-td>

                            <vs-td :data="tr.last_visit">
                                <div @contextmenu.prevent="openContext(tr.id)">
                                    <template v-for="status in patientStatus">
                                        <vs-chip v-if="
                                        new Date().getTime()-new Date(tr.last_visit).getTime() > status.start_period
                                        &&
                                        new Date().getTime()-new Date(tr.last_visit).getTime() <= status.end_period
                                        " :color="status.color">
                                            <vx-tooltip color="warning" title="Last Visit" :text="tr.last_visit">
                                                {{status.name}}
                                            </vx-tooltip>
                                        </vs-chip>
                                    </template>
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
    import router from '../../router'
    import { VueContext } from 'vue-context';
    import html2canvas from "html2canvas";
    import jsPDF from 'jsPDF'

    export default {
        name: "Patient",
        components: {
            VueContext
        },
        mounted() {
            this.getPatientsData(Date.now());
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
                patients: [],
                patientStatus: []
            }
        },
        methods: {
            download () {
                const doc = new jsPDF();
                /** WITH CSS */
                var canvasElement = document.createElement('canvas');
                html2canvas(this.$refs.content, { canvas: canvasElement
                }).then(function (canvas) {
                    const img = canvas.toDataURL("image/png");
                    doc.addImage(img,'JPEG',20,20);
                    doc.save("sample.pdf");
                });
            },
            optionClicked(patientID, actionID) {
                if(actionID == 3){
                    router.push({name: 'add-appointment', params: {patient_id: patientID}});
                }
                this.$vs.notify({
                    title: 'Context Menu',
                    text: patientID,
                    icon: 'feather',
                    iconPack: 'icon-alert-circle',
                    color: 'primary'
                })
            },

            getPatientsData(InitialTime){
                this.patientStatus = [
                    {
                        name: 'Active',
                        color: 'success',
                        start_period: '0',
                        end_period: '16000000000'
                    },
                    {
                        name: 'In-Active',
                        color: 'danger',
                        start_period: '16000000001',
                        end_period: '99999999999999',
                    }
                ];
                this.patients = [
                    {
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
                        last_visit: '2019-5-01 15:30:00',
                    },
                    {
                        id : 2,
                        name: "Irene Baker",
                        public_id: "p-116",
                        dob: "05/09/1989",
                        telephones: ["01116568369"],
                        payment: {
                            paid: 750,
                            total: 750,
                            percentage: (750*100)/750
                        },
                        last_visit: '2018-5-13 15:30:00',
                    },
                    {
                        id : 3,
                        name: "Evan White",
                        public_id: "p-118",
                        dob: "16/03/1991",
                        telephones: ["01096123366", "01115696966"],
                        payment: {
                            paid: 950,
                            total: 950,
                            percentage: (950*100)/950
                        },
                        last_visit: '2018-5-13 15:30:00',
                    },
                    {
                        id : 4,
                        name: "Sonia Clark",
                        public_id: "p-120",
                        dob: "04/12/1975",
                        telephones: ["01086123445", "01007865613"],
                        payment: {
                            paid: 700,
                            total: 800,
                            percentage: (700*100)/800
                        },
                        last_visit: '2019-5-01 15:30:00',
                    },{
                        id : 5,
                        name: "Phil Gray",
                        public_id: "p-121",
                        dob: "18/10/1997",
                        telephones: ["01096436702", "01113689783"],
                        payment: {
                            paid: 300,
                            total: 1250,
                            percentage: (300*100)/1250
                        },
                        last_visit: '2019-5-01 15:30:00',
                    },
                    {
                        id : 6,
                        name: "Irene Baker",
                        public_id: "p-122",
                        dob: "05/09/1989",
                        telephones: ["01116568369"],
                        payment: {
                            paid: 1250,
                            total: 1250,
                            percentage: (1250*100)/1250
                        },
                        last_visit: '2018-5-13 15:30:00',
                    },
                    {
                        id : 7,
                        name: "Evan White",
                        public_id: "p-123",
                        dob: "16/03/1991",
                        telephones: ["01096123366", "01115696966"],
                        payment: {
                            paid: 700,
                            total: 800,
                            percentage: (700*100)/800
                        },
                        last_visit: '2019-5-01 15:30:00',
                    },
                    {
                        id : 8,
                        name: "Sonia Clark",
                        public_id: "p-124",
                        dob: "04/12/1975",
                        telephones: ["01086123445", "01007865613"],
                        payment: {
                            paid: 1000,
                            total: 1000,
                            percentage: (1000*100)/1000
                        },
                        last_visit: '2018-5-13 15:30:00',
                    }
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

            openContext(id) {
                this.$refs[`patient-${id}`][0].open();
            }
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
