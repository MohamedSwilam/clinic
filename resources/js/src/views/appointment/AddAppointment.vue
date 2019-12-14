<template>
    <vx-card ref="create" :title="form.patient_id==='new'?'Creating Reservation For New Patient':'Creating Reservation For Existing Patient'">
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
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input :danger="errors.has('step-1.reference')" :danger-text="errors.first('step-1.reference')" val-icon-danger="clear" icon-pack="feather" icon="icon-git-branch" label-placeholder="Referred From" v-model="form.patient.reference" class="w-full" name="reference" />
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
                                    <span class="txt-hover" @click="copyToClipboard(phone.number)">{{ phone.number }}</span>
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
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>form.Referred From: </b> {{form.patient.reference?form.patient.reference:'No Body'}}
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
                                    class="w-full"
                                    label="Reservation Type"
                                    v-model="form.reservation_type_id"
                                >
                                    <vs-select-item :key="index" :value="type.id" :text="type.name" v-for="(type, index) in reservation_types" />
                                </vs-select>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5 pt-1">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                                    <div class="vs-con-input">
                                        <input v-model="reservation_date" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                        <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                    Reservation Date
                                    </span>
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                                    </div>
                                    <span></span>
                                </div>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-select
                                    class="w-full"
                                    label="Doctor"
                                    v-model="form.doctor_id"
                                >
                                    <vs-select-item :key="index" :value="doctor.id" :text="`${doctor.first_name} ${doctor.last_name}`" v-for="(doctor, index) in doctors" />
                                </vs-select>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-select
                                    class="w-full"
                                    label="Reservation Duration"
                                    v-model="form.reservation_duration_id"
                                >
                                    <vs-select-item :key="index" :value="duration.id" :text="duration.duration" v-for="(duration, index) in durations" />
                                </vs-select>
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
                                        <vs-th>Discount</vs-th>
                                        <vs-th>Total</vs-th>
                                    </template>

                                    <template slot-scope="{data}">
                                        <vs-tr>
                                            <vs-td>Operation</vs-td>
                                            <vs-td>5000 EGP</vs-td>
                                            <vs-td>0%</vs-td>
                                            <vs-td>5000 EGP</vs-td>
                                        </vs-tr>
                                        <vs-tr>
                                            <vs-td>Old Payments</vs-td>
                                            <vs-td>600 EGP</vs-td>
                                            <vs-td>-</vs-td>
                                            <vs-td>5000 EGP</vs-td>
                                        </vs-tr>
                                        <vs-tr>
                                            <vs-td></vs-td>
                                            <vs-td></vs-td>
                                            <vs-td><b>TOTAL: </b></vs-td>
                                            <vs-td>5600 EGP</vs-td>
                                        </vs-tr>
                                    </template>
                                </vs-table>
                            </vs-col>
                            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5" vs-justify="center" vs-align="center">
                                <vs-input-number min="0" max="5600" v-model="amount_to_pay" label="Amount To Pay:" :step="50"/>
                            </vs-col>
                            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5" vs-justify="center" vs-align="center">
                                <b>Remaining: </b>{{5600-amount_to_pay}}
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
            this.form.patient_id = this.$route.params.patient_id;
            if(this.form.patient_id !== 'new'){
                this.startIndex = 1;
                this.form.new_patient = 1;
                this.getPatientData();
            }
        },
        mounted() {
            this.getReservationTypes();
        },
        data() {
            return {
                reservation_types: [],
                form: {
                    new_patient: 0,//False
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
                    status: 'Pending',
                    reservation_type_id: null,
                    reservation_duration_id: null,
                    doctor_id: 1,
                    patient_id: null,
                    payment: {
                        description: '',
                        to_be_paid: '',
                        paid: '',
                        has_payment: 1
                    }

                },
                is_requesting: false,
                Telephone: '',



                startIndex: 0,
                firstName: "",
                lastName: "",
                Telephones: [
                    '01096436702',
                    '01116436790',
                ],
                reservation_type: 1,
                reservation_date: '',
                reservation_doctor: 1,
                reservation_duration: 1,
                amount_to_pay: 0,
                durations: [
                    {
                        id: 1,
                        duration: '8:00AM - 10:00AM'
                    },
                    {
                        id: 2,
                        duration: '10:00AM - 12:00PM'
                    },
                    {
                        id: 3,
                        duration: '12:00PM - 2:00PM'
                    }
                ],
                doctors: [],
            }
        },
        methods: {
            getPatientData(){
                // this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('patient/view', this.$route.params.patient_id)
                    .then(response => {
                        // this.$vs.loading.close(this.$refs.create.$refs.content);
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

            getDoctors(){
                this.$store.dispatch('employee/getData', '')
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
                            resolve(true)
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
                            this.vs_alert('Done', 'Reservation has been placed successfully', 'success', 'icon-check');
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
