<template>
    <div>
        <vx-card title='Patients List' collapse-action>
            <vs-table search :data="patients">
                <template slot="header">
                    <vs-button size="small" to="/dashboard/patient/create" icon-pack="feather" icon="icon-plus" type="filled">New Patient</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th sort-key="public_id">ID</vs-th>
                    <vs-th sort-key="name">Name</vs-th>
                    <vs-th sort-key="age">Birth Date</vs-th>
                    <vs-th>Telephones</vs-th>
                    <vs-th sort-key="payment_percentage">Payment</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(patient, index) in patients">
                        <vs-td :data="index+1">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="patient.public_id">
                            {{ patient.public_id}}
                        </vs-td>

                        <vs-td :data="patient.name">
                            {{ patient.name}}
                        </vs-td>

                        <vs-td :data="patient.dob">
                            {{ patient.dob}}
                        </vs-td>

                        <vs-td>
                            <template v-for="(telephone, telephone_index) in patient.telephones">
                                {{ telephone }}<template v-if="telephone_index !== patient.telephones.length-1">, </template>
                            </template>
                        </vs-td>

                        <vs-td :data="patient.counter">
                            <template v-if="patient.payment_percentage===100"><i class="fas fa-check"></i> <b>Complete</b></template>
                            <template v-else><b>{{patient.payment.paid}}</b> Out of <b>{{patient.payment.total}}</b></template>
                            <br>
                            <vs-progress v-if="patient.payment_percentage === 100" :percent="patient.payment_percentage" color="success"></vs-progress>
                            <vs-progress v-else-if="patient.payment_percentage > 25" :percent="patient.payment_percentage" color="warning"></vs-progress>
                            <vs-progress v-else-if="patient.payment_percentage <= 25" :percent="patient.payment_percentage" color="danger"></vs-progress>
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/4 pl-2">
                                        <vs-button :to="`/dashboard/patient/${patient.public_id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                    </div>
                                    <div class="w-1/4 pl-2">
                                        <vs-button @click="reserveAppointement(patient.public_id)" radius color="dark" type="border" icon-pack="feather" icon="icon-edit-2"></vs-button>
                                    </div>
                                    <div class="w-1/4 pl-2">
                                        <vs-button :to="`/dashboard/patient/${patient.public_id}/edit`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>
                                    <div class="w-1/4 pl-2">
                                        <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeletePatient(patient)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
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
                resultTime: 0,
                patients: []
            }
        },
        methods: {
            reserveAppointement(patientID)
            {
                this.$router.push({name: 'add-appointment', params: {patient_id: patientID}});
            },

            getPatientsData(){
                this.patients = [
                    {
                        id : 1,
                        name: "Phil Gray",
                        public_id: "p-105",
                        dob: "18/10/1997",
                        telephones: ["01096436702", "01113689783"],
                        payment_percentage: (200*100)/1000,
                        payment: {
                            paid: 200,
                            total: 1000
                        },
                    },
                    {
                        id : 2,
                        name: "Irene Baker",
                        public_id: "p-116",
                        dob: "05/09/1989",
                        telephones: ["01116568369"],
                        payment_percentage: (750*100)/750,
                        payment: {
                            paid: 750,
                            total: 750,
                        },
                    },
                    {
                        id : 3,
                        name: "Evan White",
                        public_id: "p-118",
                        dob: "16/03/1991",
                        telephones: ["01096123366", "01115696966"],
                        payment_percentage: (950*100)/950,
                        payment: {
                            paid: 950,
                            total: 950
                        },
                    },
                    {
                        id : 4,
                        name: "Sonia Clark",
                        public_id: "p-120",
                        dob: "04/12/1975",
                        telephones: ["01086123445", "01007865613"],
                        payment_percentage: (700*100)/800,
                        payment: {
                            paid: 700,
                            total: 800,
                        },
                    },{
                        id : 5,
                        name: "Phil Gray",
                        public_id: "p-121",
                        dob: "18/10/1997",
                        telephones: ["01096436702", "01113689783"],
                        payment_percentage: (300*100)/1250,
                        payment: {
                            paid: 300,
                            total: 1250,
                        },
                    },
                    {
                        id : 6,
                        name: "Irene Baker",
                        public_id: "p-122",
                        dob: "05/09/1989",
                        telephones: ["01116568369"],
                        payment_percentage: (1250*100)/1250,
                        payment: {
                            paid: 1250,
                            total: 1250,
                        },
                    },
                    {
                        id : 7,
                        name: "Evan White",
                        public_id: "p-123",
                        dob: "16/03/1991",
                        telephones: ["01096123366", "01115696966"],
                        payment_percentage: (700*100)/800,
                        payment: {
                            paid: 700,
                            total: 800,
                        }
                    },
                    {
                        id : 8,
                        name: "Sonia Clark",
                        public_id: "p-124",
                        dob: "04/12/1975",
                        telephones: ["01086123445", "01007865613"],
                        payment_percentage: (1000*100)/1000,
                        payment: {
                            paid: 1000,
                            total: 1000,
                        }
                    }
                ];
            },

            confirmDeletePatient(patinet)
            {
                this.patientIdToDelete = patinet.id;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deletePatient
                });
            },

            deletePatient()
            {
                this.vs_alert('Success', 'Reservation Duration Successfully Deleted.', 'success', 'icon-check');
            },

            //Vuesax alert
            vs_alert (title, text, color, icon)
            {
                this.$vs.notify({
                    title: title,
                    text: text,
                    color: color,
                    iconPack: 'feather',
                    icon: icon
                });
            }
        }
    }
</script>

<style>

</style>
