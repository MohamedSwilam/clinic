<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card v-if="can('view-patient')" ref="view" title='Personal Information' collapseAction refreshContentAction @refresh="getPatientData">
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
                </vs-row>
                <vs-row vs-justify="center">
                    <vs-button v-if="can('edit-patient')" :to="`/dashboard/patient/${$route.params.id}/edit`" size="small" icon-pack="feather" icon="icon-edit" type="filled">Edit Information</vs-button>
                </vs-row>
            </vx-card>
        </div>

        <browse-plan></browse-plan>

        <div class="vx-col w-full mb-base" v-if="can('browse-payment')">
            <vx-card title='Payments Information' collapseAction>
                <vs-table v-if="patient" :data="patient.payments">
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>Description</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>Time</vs-th>
                        <vs-th>To Be Paid</vs-th>
                        <vs-th>Paid</vs-th>
                        <vs-th>Action</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="index" v-for="(payment, index) in patient.payments">
                            <vs-td>{{index+1}}</vs-td>
                            <vs-td>{{payment.description}}</vs-td>
                            <vs-td>{{payment.created_at.split(" ")[0]}}</vs-td>
                            <vs-td>{{payment.created_at.split(" ")[1]}}</vs-td>
                            <vs-td>{{payment.to_be_paid}}</vs-td>
                            <vs-td>{{payment.paid}}</vs-td>
                            <vs-td>
                                <div class="flex">
<!--                                    <vs-button icon-pack="feather" radius icon="icon-file-text" type="border"></vs-button>-->
                                    <vs-button v-if="can('delete-payment')" :id="`delete-payment-btn-${payment.id}`" @click="confirmToDeletePayment(payment)" class="ml-3" icon-pack="feather" radius color="danger" icon="icon-trash" type="border"></vs-button>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
                <vs-divider v-if="can('create-payment')"/>
                <vs-row v-if="patient&&can('create-payment')">
                    <vs-row vs-w="12" class="mb-5">
                        <h3>Create Payment</h3>
                    </vs-row>
                    <vs-row vs-w="12" class="mb-5">
                        <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                            <vs-input
                                name="description"
                                class="w-full"
                                label-placeholder="Description"
                                icon-pack="feather"
                                icon="icon-file-text"
                                v-model="form.description"
                                v-validate="'required|min:3'"
                                :danger="errors.has('description')"
                                :danger-text="errors.first('description')"
                                val-icon-danger="clear"/>
                        </vs-col>
                        <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pt-3" vs-type="flex" vs-justify="center" vs-align="center">
                            <vs-input-number
                                min="0"
                                :max="patient.payments_total-patient.paid_payments"
                                v-model="form.paid"
                                label="Amount To Pay:"
                                :step="50"/>
                            <b class="ml-2"> Remaining: </b> <span class="ml-2">{{(patient.payments_total-patient.paid_payments)-form.paid}} EGP</span>
                        </vs-col>
                        <vs-col vs-w="12" vs-type="flex" vs-justify="center" vs-align="center" class="mt-3">
                            <vs-button :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):createPayment()" id="add-payment-btn" size="small" type="filled" icon-pack="feather" icon="icon-plus">Add Payment</vs-button>
                        </vs-col>
                    </vs-row>
                </vs-row>
            </vx-card>
        </div>

        <browse-medical-report></browse-medical-report>


        <prescription></prescription>
    </div>
</template>

<script>
    import browseMedicalReport from '../medicalReport/browse';
    import prescription from '../prescription/browse';
    import browsePlan from '../patientPlan/browse';
    export default {
        name: "profile",
        mounted() {
            this.form.patient_id = this.$route.params.id;
            this.getPatientData();
        },
        components: {
            browseMedicalReport: browseMedicalReport,
            prescription: prescription,
            browsePlan: browsePlan
        },
        data: () => {
            return {
                patient: null,

                form: {
                    description: '',
                    to_be_paid: 0,
                    paid: 0,
                    patient_id: null
                },

                is_requesting: false
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.description !== "" && this.form.paid > 0;
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
            },

            createPayment()
            {
                if (!this.validateForm) return;
                this.is_requesting=true;
                this.$vs.loading({container: `#add-payment-btn`, color: 'danger', scale: 0.45});
                this.$store.dispatch('payment/create', this.form)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#add-payment-btn > .con-vs-loading`);
                        this.patient.payments.push(response.data.data.data);
                        this.patient.paid_payments+=this.form.paid;
                        this.form.paid=0;
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
                        this.$vs.loading.close(`#add-payment-btn > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmToDeletePayment(payment)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deletePayment,
                    parameters: [payment]
                });
            },

            deletePayment(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#delete-payment-btn-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('payment/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#delete-payment-btn-${params[0].id} > .con-vs-loading`);
                        this.patient.payments = this.patient.payments.filter(payment => {return payment.id !== params[0].id});
                        this.patient.paid_payments-=params[0].paid;
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
                        this.$vs.loading.close(`#delete-payment-btn-${params[0].id} > .con-vs-loading`);
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
    .vs-input-number {
        width: fit-content;
    }
</style>
