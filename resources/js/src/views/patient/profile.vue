<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card ref="view" title='Personal Information' collapseAction refreshContentAction @refresh="getPatientData">
                <vs-row v-if="patient">
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Name: </b> {{patient.first_name}} {{patient.last_name}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Gender: </b> {{patient.gender}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Email: </b> {{patient.email?patient.email:'Not Specified!'}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Phone(s): </b>
                        <template v-for="(phone, index) in patient.phones">
                            <span class="txt-hover" @click="copyToClipboard(phone.number)">{{ phone.number }}</span>
                            <template v-if="index !== patient.phones.length-1">, </template>
                        </template>
                        <template v-if="patient.phones.length===0">
                            No Telephones Assigned!
                        </template>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>City: </b> {{patient.city?patient.city:'Not Specified!'}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Country: </b> {{patient.country?patient.country:'Not Specified!'}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Address: </b> {{patient.address?patient.address:'Not Specified!'}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Birth Date: </b> {{patient.birth_date?patient.birth_date:'Not Specified!'}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Occupation: </b> {{patient.occupation?patient.occupation:'Not Specified!'}}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Referred From: </b> {{patient.reference?patient.reference:'No Body'}}
                    </vs-col>
                </vs-row>
                <vs-row vs-justify="center">
                    <vs-button :to="`/dashboard/patient/${$route.params.id}/edit`" size="small" icon-pack="feather" icon="icon-edit" type="filled">Edit Information</vs-button>
                </vs-row>
            </vx-card>
        </div>
        <div class="vx-col w-full mb-base">
            <vx-card title='Payments Information' collapseAction>
                <vs-table :data="['','']">
                    <template slot="header">
                        <vs-button class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Payment</vs-button>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>Type</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>Time</vs-th>
                        <vs-th>Amount</vs-th>
                        <vs-th>Export</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr>
                            <vs-td>1</vs-td>
                            <vs-td>Operation</vs-td>
                            <vs-td>01 NOV, 2019</vs-td>
                            <vs-td>2:44 PM</vs-td>
                            <vs-td>1800 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>2</vs-td>
                            <vs-td>Operation</vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>11:16 AM</vs-td>
                            <vs-td>1200 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>3</vs-td>
                            <vs-td>Reveal</vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>300 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>4</vs-td>
                            <vs-td>Reveal</vs-td>
                            <vs-td>15 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>300 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </div>
        <div class="vx-col w-full mb-base">
            <vx-card title='Medical Reports' collapseAction>
                <vs-table :data="['','']">
                    <template slot="header">
                        <vs-button class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Medical Report</vs-button>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>Added By</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>Time</vs-th>
                        <vs-th>Action</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr>
                            <vs-td>1</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>01 NOV, 2019</vs-td>
                            <vs-td>2:44 PM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>2</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>11:16 AM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>3</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>4</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>15 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </div>
        <!--<div class="vx-col w-full mb-base" v-for="i in 12" :key="i">-->
            <!--<vx-card :title='`Medical Report ${i}`' :subtitle="`10th, Oct 2019 2:16 PM`" collapseAction>-->
                <!--<vs-row>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 1-->
                    <!--</vs-col>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 2-->
                    <!--</vs-col>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 3-->
                    <!--</vs-col>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 4-->
                    <!--</vs-col>-->
                <!--</vs-row>-->
            <!--</vx-card>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "profile",
        mounted() {
          this.getPatientData();
        },
        data: () => {
            return {
                patient: null
            }
        },
        methods: {
            getPatientData()
            {
                this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('patient/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.patient = response.data.data.data;
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
            }
        }
    }
</script>

<style>
</style>
