<template>
    <vx-card v-if="can('create-appointment')" ref="create" :title="form.patient_id==='new'?'Creating Reservation For New Patient':'Creating Reservation For Existing Patient'">
        <form-wizard :startIndex="startIndex" color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
            <tab-content title="Patient Information" class="mb-5" icon="feather icon-user" :before-change="validateStep1">
                <!-- tab 1 content -->
                <form data-vv-scope="step-1">
                    <div class="vx-row" v-if="form.patient_id === 'new'">
                        <vs-row>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input :danger="errors.has('step-1.first_name')" :danger-text="errors.first('step-1.first_name')" val-icon-danger="clear" icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="form.patient.first_name" class="w-full" name="first_name" v-validate="'required|alpha_dash|min:3'" />
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input :danger="errors.has('step-1.last_name')" :danger-text="errors.first('step-1.last_name')" val-icon-danger="clear" icon-pack="feather" icon="icon-user" label-placeholder="Last Name"  v-model="form.patient.last_name" class="w-full" name="last_name" v-validate="'required|alpha_dash|min:3'" />
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                                    <div class="vs-con-input">
                                        <input v-model="form.patient.birth_date" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                        <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                    Date of birth
                                    </span>
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                                    </div>
                                    <span></span>
                                </div>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input name="address" :danger="errors.has('step-1.address')" val-icon-danger="clear" :danger-text="errors.first('step-1.address')" class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="Address" v-model="form.patient.address" />
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input name="city" :danger="errors.has('step-1.city')" val-icon-danger="clear" :danger-text="errors.first('step-1.city')" class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="City" v-model="form.patient.city" />
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input name="country" :danger="errors.has('step-1.country')" val-icon-danger="clear" :danger-text="errors.first('step-1.country')" class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="Country" v-model="form.patient.country" />
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-row>
                                    <vs-col vs-w="9">
                                        <vs-input class="w-full" icon-pack="feather" icon="icon-phone" v-model="Telephone" label-placeholder="Telephone(s)" @keydown="$event.keyCode === 13 ? addTelephone : false" />
                                    </vs-col>
                                    <vs-col vs-w="3">
                                        <vs-button icon-pack="feather" icon="icon-plus" @click="addTelephone" class="w-full input-btn" type="gradient">Add</vs-button>
                                    </vs-col>
                                </vs-row>
                                <br>
                                <vs-row>
                                    <vs-col vs-w="12">
                                        <vs-chip
                                            :key="index"
                                            @click="removeTelephone(telephone)"
                                            v-for="(telephone, index) in form.patient.phones"
                                            closable>
                                            {{ telephone.number }}
                                        </vs-chip>
                                    </vs-col>
                                </vs-row>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                                    <div class="gender-container">
                                        <vs-radio v-model="form.patient.gender" vs-value="Male">Male</vs-radio>
                                        &nbsp;&nbsp;
                                        <vs-radio v-model="form.patient.gender" vs-value="Female">Female</vs-radio>
                                        <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                    Gender
                                    </span>
                                    </div>
                                    <span></span>
                                </div>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input :danger="errors.has('step-1.step-1.email')" :danger-text="errors.first('step-1.email')" val-icon-danger="clear" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.patient.email" class="w-full" name="email" v-validate="'email'" />
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input :danger="errors.has('step-1.occupation')" :danger-text="errors.first('step-1.occupation')" val-icon-danger="clear" icon-pack="feather" icon="icon-briefcase" label-placeholder="Occupation" v-model="form.patient.occupation" class="w-full" name="occupation" />
                            </vs-col>
                        </vs-row>
                    </div>

                    <div v-else>
                        <vs-row v-if="form.patient">
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Name: </b> {{form.patient.first_name}} {{form.patient.last_name}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Gender: </b> {{form.patient.gender}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Email: </b> {{form.patient.email?form.patient.email:'Not Specified!'}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Phone(s): </b>
                                <template v-for="(phone, index) in form.patient.phones">
                                    <span class="txt-hover">{{ phone.number }}</span>
                                    <template v-if="index !== form.patient.phones.length-1">, </template>
                                </template>
                                <template v-if="form.patient.phones.length===0">
                                    No Telephones Assigned!
                                </template>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>City: </b> {{form.patient.city?form.patient.city:'Not Specified!'}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Country: </b> {{form.patient.country?form.patient.country:'Not Specified!'}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Address: </b> {{form.patient.address?form.patient.address:'Not Specified!'}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Birth Date: </b> {{form.patient.birth_date?form.patient.birth_date:'Not Specified!'}}
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Occupation: </b> {{form.patient.occupation?form.patient.occupation:'Not Specified!'}}
                            </vs-col>
                        </vs-row>
                    </div>
                </form>
            </tab-content>

            <!-- tab 2 content -->
            <tab-content title="Appointment" class="mb-5" icon="feather icon-edit" :before-change="validateStep2">
                <form data-vv-scope="step-2">
                    <div class="vx-row">
                        <vs-row>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-select
                                    name="reservation_type"
                                    class="w-full"
                                    label="Reservation Type"
                                    v-model="form.reservation_type_id"
                                    @change="getReservationDurations"
                                    val-icon-danger="clear"
                                    :danger="errors.has('step-2.reservation_type')"
                                    :danger-text="errors.first('step-reservation_type')"
                                    v-validate="'required'"
                                >
                                    <vs-select-item :key="index" :value="type.id" :text="type.name" v-for="(type, index) in reservation_types" />
                                </vs-select>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-select
                                    name="doctor"
                                    class="w-full"
                                    label="Doctor"
                                    v-model="form.doctor_id"
                                    val-icon-danger="clear"
                                    :danger="errors.has('step-2.doctor')"
                                    :danger-text="errors.first('step-doctor')"
                                    v-validate="'required'"
                                >
                                    <vs-select-item :key="index" :value="doctor.id" :text="`${doctor.first_name} ${doctor.last_name}`" v-for="(doctor, index) in doctors" />
                                </vs-select>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pt-1 pl-5">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                                    <div class="vs-con-input">
                                        <input v-model="reservation_date" @change="getReservationDurations" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                        <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                    Reservation Date
                                    </span>
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                                    </div>
                                    <span></span>
                                </div>
                            </vs-col>

                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5 pt-5" v-if="durations.length===0 && reservation_date !== null">
                                No Durations Found In The Specified Date!
                            </vs-col>

                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5" v-if="reservation_date === null || durations.length>0">
                                <vs-select
                                    ref="reservation_duration_input"
                                    name="reservation_duration"
                                    class="w-full"
                                    label="Reservation Duration"
                                    :disabled="durations.length===0"
                                    v-model="form.reservation_duration_id"
                                    val-icon-danger="clear"
                                    :danger="errors.has('step-2.reservation_duration')"
                                    :danger-text="errors.first('step-2.reservation_duration')"
                                    v-validate="'required'"
                                >
                                    <vs-select-item :key="index" :value="duration.id" :text="`From ${duration.start_time} To ${duration.end_time} (${duration.counter}) - ${duration.room}`" v-for="(duration, index) in durations" />
                                </vs-select>
                            </vs-col>

                            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-textarea label="Illness Description" v-model="form.illness_description" />
                            </vs-col>
                        </vs-row>
                    </div>
                </form>
            </tab-content>

            <!-- tab 3 content -->
            <tab-content title="Payment" class="mb-5" icon="feather icon-dollar-sign" :before-change="validateStep3">
                <form data-vv-scope="step-3">
                    <div class="vx-row">
                        <vs-row>
                            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5">
                                <vs-table :data="['','']">
                                    <template slot="thead">
                                        <vs-th>Title</vs-th>
                                        <vs-th>Cost</vs-th>
                                    </template>

                                    <template slot-scope="{data}">
                                        <vs-tr v-if="form.reservation_type_id">
                                            <vs-td>
                                                {{reservation_types.filter(type =>{return type.id === form.reservation_type_id;})[0].name}}
                                            </vs-td>
                                            <vs-td>
                                                {{reservation_types.filter(type =>{return type.id === form.reservation_type_id;})[0].max_price}} EGP
                                            </vs-td>
                                        </vs-tr>
                                        <vs-tr v-if="form.patient.payments_total">
                                            <vs-td>Old Payments</vs-td>
                                            <vs-td>
                                                {{(form.patient.payments_total-form.patient.paid_payments)}} EGP
                                            </vs-td>
                                        </vs-tr>
                                        <vs-tr>
                                            <vs-td><b>TOTAL: </b></vs-td>
                                            <vs-td>{{total_to_be_paid}} EGP</vs-td>
                                        </vs-tr>
                                    </template>
                                </vs-table>
                            </vs-col>
                            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5" vs-justify="center" vs-align="center">
                                <vs-input-number min="0" :max="total_to_be_paid" v-model="form.payment.paid" label="Amount To Pay:" :step="50"/>
                            </vs-col>
                            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5" vs-justify="center" vs-align="center">
                                <b>Remaining: </b>{{total_to_be_paid-form.payment.paid}}
                            </vs-col>
                        </vs-row>
                    </div>
                </form>
            </tab-content>
        </form-wizard>
    </vx-card>
</template>

<script>
    import { FormWizard, TabContent } from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    // For custom error message
    import { Validator } from 'vee-validate';
    const dict = {
        custom: {
            first_name: {
                required: 'First name is required',
                alpha: "First name may only contain alphabetic characters",
                min: "The first name field must be at least 3 characters"
            },
            last_name: {
                required: 'Last name is required',
                alpha: "Last name may only contain alphabetic characters",
                min: "The Last name field must be at least 3 characters"
            },
            job_title: {
                required: 'Job title name is required',
                alpha: "Job title may only contain alphabetic characters"
            },
            proposal_title: {
                required: 'Proposal title name is required',
                alpha: "Proposal title may only contain alphabetic characters"
            },
            event_name: {
                required: 'Event name is required',
                alpha: "Event name may only contain alphabetic characters"
            },
        }
    };
    // register custom messages
    Validator.localize('en', dict);
    export default {
        name: "AddAppointment",
        created() {
            if(this.$route.params.patient_id !== 'new'){
                this.form.patient_id = parseInt(this.$route.params.patient_id);
                this.startIndex = 1;
                this.form.new_patient = 0;
                this.getPatientData();
            } else {
                this.form.patient_id = this.$route.params.patient_id;
            }
        },
        mounted() {
            this.getReservationTypes();
        },
        data() {
            return {
                reservation_types: [],
                form: {
                    new_patient: 1,//True
                    receptionist_id: this.$store.getters['auth/userData'].id,
                    patient: {
                        email: '',
                        first_name: '',
                        last_name: '',
                        birth_date: '',
                        address: '',
                        city: '',
                        country: '',
                        phones: [],
                        occupation: '',
                        reference: '',
                        gender: 'Male'
                    },
                    illness_description: '',
                    status_id: 1,
                    reservation_type_id: null,
                    reservation_duration_id: null,
                    doctor_id: 1,
                    patient_id: null,
                    payment: {
                        description: '',
                        to_be_paid: '',
                        paid: 0,
                    },
                    has_payment: 1
                },
                is_requesting: false,
                Telephone: '',
                reservation_date: null,
                durations: [],
                startIndex: 0,
                doctors: [],

                total_to_be_paid: 0
            }
        },
        methods: {
            getPatientData(){
                // this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('patient/view', this.$route.params.patient_id)
                    .then(response => {
                        // this.$vs.loading.close(this.$refs.create.$refs.content);
                        if (response.data.data.data.length===0){
                            this.$router.push('/dashboard/error-404');
                        }
                        this.form.patient = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        // this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            validateStep1() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll('step-1').then(result => {
                        if (result) {
                            if (this.form.patient.phones.length===0) {
                                this.$vs.notify({
                                    title: 'Oops..',
                                    text: 'Please, at least add one phone number!',
                                    iconPack: 'feather',
                                    icon: 'icon-alert-circle',
                                    color: 'danger'
                                });
                                reject("correct all values");
                            }
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },

            getReservationTypes()
            {
                this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('reservationType/getData')
                    .then(response => {
                        this.getDoctors();
                        this.reservation_types = response.data.data.data;
                        this.form.reservation_type_id = this.reservation_types[0].id;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            getReservationDurations()
            {
                this.$vs.loading({container: this.$refs.create.$refs.reservation_duration_input, scale: 0.5});
                this.$store.dispatch('reservationDuration/getData', `?date=${this.reservation_date}&reservationType=${this.form.reservation_type_id}`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.create.$refs.reservation_duration_input);
                        this.durations = response.data.data.data;
                        if (this.durations.length>0) {
                            this.form.reservation_duration_id = this.durations[0].id;
                        } else {
                            this.form.reservation_duration_id = null;
                        }

                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.create.$refs.reservation_duration_input);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            getDoctors(){
                this.$store.dispatch('employee/getData', '?doctor=true')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.doctors = response.data.data.data;
                        this.form.doctor_id = this.doctors[0].id;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            validateStep2() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll("step-2").then(result => {
                        if (result) {
                            if (!this.form.reservation_duration_id){
                                this.$vs.notify({
                                    title: 'Oops..',
                                    text: 'Please, select a duration to continue',
                                    iconPack: 'feather',
                                    icon: 'icon-alert-circle',
                                    color: 'danger'
                                });
                                reject("correct all values");
                            } else {
                                this.total_to_be_paid = this.reservation_types.filter(type => {
                                    return type.id === this.form.reservation_type_id;
                                })[0].max_price;
                                if(this.form.patient.payments_total){
                                    this.total_to_be_paid+=(this.form.patient.payments_total-this.form.patient.paid_payments);
                                }
                                resolve(true)
                            }
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },
            validateStep3() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll("step-3").then(result => {
                        if (result) {
                            // this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                            let reservationType = this.reservation_types.filter(type => {
                                return type.id === this.form.reservation_type_id;
                            })[0];
                            this.form.payment.to_be_paid = reservationType.max_price;
                            this.form.payment.description = `${reservationType.name}`;
                            let patient_id = this.form.patient_id;
                            let patient = this.form.patient;
                            if (this.form.new_patient) {
                                delete this.form.patient_id;
                            } else {
                                delete this.form.patient;
                            }
                            this.$store.dispatch('appointment/create', this.form)
                                .then(response => {
                                    this.is_requesting=false;
                                    // this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                                    this.$router.push(`/dashboard/appointment`);
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
                                    this.form.patient_id = patient_id;
                                    this.form.patient = patient;
                                    // this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                                    this.$vs.notify({
                                        title: 'Error',
                                        text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                                        iconPack: 'feather',
                                        icon: 'icon-alert-circle',
                                        color: 'danger'
                                    });
                                });
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },

            removeTelephone (item) {
                this.form.patient.phones.splice(this.form.patient.phones.indexOf(item), 1)
            },

            addTelephone (e) {
                e.preventDefault();
                if (this.Telephone !== '') {
                    this.form.patient.phones.push({
                        'country_code': '+20',
                        'number': this.Telephone,
                    });
                    this.Telephone = "";
                }
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
        },
        components: {
            FormWizard,
            TabContent
        }
    }
</script>

<style>
    .dob-input{
        padding-bottom: 7px !important;
        padding-top: 7px !important;
    }
    input[type=date]:invalid::-webkit-datetime-edit {
        color: rgb(220, 220, 220) !important;
    }
    .input-btn {
        position: relative;
        top: 17px;
        left: -33px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .gender-container{
        padding-top: 9px !important;
    }
    .gender-placeholder {
        -webkit-transform: translate(-3px,-90%)!important;
        transform: translate(-3px,-70%)!important;
    }
    .vs-input-number {
        width: fit-content;
    }
</style>
