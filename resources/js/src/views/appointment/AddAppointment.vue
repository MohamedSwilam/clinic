<template>
    <vx-card :title="patientID=='new'?'Creating Reservation For New Patient':'Creating Reservation For Existing Patient'">
        <form-wizard :startIndex="startIndex" color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
            <tab-content title="Patient Information" class="mb-5" icon="feather icon-user" :before-change="validateStep1">
                <!-- tab 1 content -->
                <form data-vv-scope="step-1">
                    <div class="vx-row" v-if="patientID == 'new'">

                        <vs-row>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="firstName" class="w-full" name="first_name" v-validate="'required|alpha'" />
                                <span class="text-danger">{{ errors.first('step-1.first_name') }}</span>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input icon-pack="feather" icon="icon-user" label-placeholder="Last Name"  v-model="lastName" class="w-full" name="last_name" v-validate="'required|alpha'" />
                                <span class="text-danger">{{ errors.first('step-1.last_name') }}</span>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                                    <div class="vs-con-input">
                                        <input v-model="DOB" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                        <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                    Date of birth
                                    </span>
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                                    </div>
                                    <span></span>
                                </div>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input icon-pack="feather" icon="icon-map-pin" label-placeholder="Address" v-model="address.address_text" class="w-full" name="address_text" v-validate="'alpha'" />
                                <span class="text-danger">{{ errors.first('step-1.address_text') }}</span>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-select
                                    class="w-full"
                                    label="City"
                                    v-model="address.city"
                                >
                                    <vs-select-item :key="index" :value="city" :text="city.name" v-for="(city, index) in cities" />
                                </vs-select>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-select
                                    class="w-full"
                                    label="Country"
                                    v-model="address.country"
                                >
                                    <vs-select-item :key="index" :value="country.id" :text="country.name" v-for="(country, index) in address.city.countries" />
                                </vs-select>
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
                                            :key="telephone"
                                            @click="removeTelephone(telephone)"
                                            v-for="telephone in Telephones"
                                            closable>
                                            {{ telephone }}
                                        </vs-chip>
                                    </vs-col>
                                </vs-row>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                                    <div class="gender-container">
                                        <vs-radio v-model="gender" vs-value="1">Male</vs-radio>
                                        &nbsp;&nbsp;
                                        <vs-radio v-model="gender" vs-value="0">Female</vs-radio>
                                        <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                    Gender
                                    </span>
                                    </div>
                                    <span></span>
                                </div>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="email" class="w-full" name="email" v-validate="'email'" />
                                <span class="text-danger">{{ errors.first('step-1.email') }}</span>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                                <vs-input icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="email" class="w-full" name="email" v-validate="'email'" />
                                <span class="text-danger">{{ errors.first('step-1.email') }}</span>
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">

                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">

                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">

                            </vs-col>
                        </vs-row>
                    </div>

                    <div v-else>
                        <vs-row>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Name: </b> Mohamed Ehab Swilam
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Gender: </b> Male
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Email: </b> mohamed_swilam@hotmail.com
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Phone(s): </b> 01096436702, 01112336987
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Address: </b> 25, Street name - cairo, Egypt
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Martial Status: </b> Not Defined
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Age: </b> 22 Years, 01 Month(s)
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Occupation: </b> Not Defined
                            </vs-col>
                            <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                                <b>Referred From: </b> No body
                            </vs-col>

                        </vs-row>

                    </div>
                </form>
            </tab-content>

            <!-- tab 2 content -->
            <tab-content title="Appointment" class="mb-5" icon="feather icon-edit" :before-change="validateStep2">
                <form data-vv-scope="step-2">
                    <div class="vx-row">
                        <div class="vx-col w-1/2">
                            <vs-input size="large" label="Proposal Title" v-model="proposalTitle" class="w-full mt-5" name="proposal_title" v-validate="'required|alpha'" />
                            <span class="text-danger">{{ errors.first('step-2.proposal_title') }}</span>

                            <vs-input size="large" label="Job Title"  v-model="jobTitle" class="w-full mt-5" name="job_title" v-validate="'required|alpha'" />
                            <span class="text-danger">{{ errors.first('step-2.job_title') }}</span>
                        </div>
                        <div class="vx-col w-1/2 mt-10">
                            <vs-textarea v-model="textarea" label="Short discription" class="h-full" />
                        </div>
                    </div>
                </form>
            </tab-content>

            <!-- tab 3 content -->
            <tab-content title="Payment" class="mb-5" icon="feather icon-dollar-sign" :before-change="validateStep3">
                <form data-vv-scope="step-3">
                    <div class="vx-row">
                        <div class="vx-col w-1/2">
                            <vs-input size="large" label="Event Name" v-model="eventName" class="w-full mt-5" name="event_name" v-validate="'required|alpha'" />
                            <span class="text-danger">{{ errors.first('step-3.event_name') }}</span>
                        </div>
                        <div class="vx-col w-1/2">
                            <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                        </div>
                        <div class="vx-col w-1/2 mt-5">
                            <vs-select v-model="status" class="w-full select-large" label="Event Status">
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />
                            </vs-select>
                        </div>
                        <div class="vx-col w-1/2 mt-8">
                            <div class="demo-alignment">
                                <span>Requirements:</span>
                                <vs-checkbox>Staffing</vs-checkbox>
                                <vs-checkbox>Catering</vs-checkbox>
                            </div>
                        </div>
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
                alpha: "First name may only contain alphabetic characters"
            },
            last_name: {
                required: 'Last name is required',
                alpha: "Last name may only contain alphabetic characters"
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
        mounted() {

        },
        created() {
            this.patientID = this.$route.params.patient_id;
            if(this.patientID != 'new'){
                this.startIndex = 1;
                this.getPatientData(this.patientID);
            }
        },
        data() {
            return {
                startIndex: 0,
                searchText: "",
                firstName: "",
                lastName: "",
                Telephones: [
                    '01096436702',
                    '01116436790',
                ],
                Telephone: "",
                city: "",
                email: "",
                martial_status: "",
                referred_from: "",
                address: {
                    address_text: '',
                    country: '',
                    city: '',
                },
                DOB: null,
                gender: 1,
                proposalTitle: "",
                jobTitle: "",
                textarea: "",
                eventName: "",
                eventLocation: "san-francisco",
                status: "plannning",
                statusOptions: [
                    { text: "Plannning", value: "plannning" },
                    { text: "In Progress", value: "in progress" },
                    { text: "Finished", value: "finished" },
                ],
                LocationOptions: [
                    { text: "New York", value: "new-york" },
                    { text: "Chicago", value: "chicago" },
                    { text: "San Francisco", value: "san-francisco" },
                    { text: "Boston", value: "boston" },
                ],
                cities: [
                    {
                        id: 1,
                        name: 'Cairo',
                        countries: [
                            {
                                id: 1,
                                name: 'Heliopolis'
                            },
                            {
                                id: 2,
                                name: 'Maadi'
                            },
                            {
                                id: 3,
                                name: 'Nasr City'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Alexandria',
                        countries: [
                            {
                                id: 4,
                                name: 'Alex1'
                            },
                            {
                                id: 5,
                                name: 'Alex2'
                            },
                            {
                                id: 6,
                                name: 'Alex3'
                            }
                        ]
                    },
                ],
            }
        },
        methods: {
            getPatientData(patientID){
                patient
            },

            validateStep1() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll('step-1').then(result => {
                        if (result) {
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
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
                            alert("Form submitted!");
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },

            removeTelephone (e, item) {
                this.Telephones.splice(this.Telephones.indexOf(item), 1)
            },

            addTelephone (e) {
                e.preventDefault();
                let item = this.Telephone;
                if (item != '') {
                    this.Telephones.push(item);
                    this.Telephone = "";
                }
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
</style>
