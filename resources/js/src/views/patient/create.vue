<template>
    <div>
        <vx-card title='Create Patient' collapse-action>
            <form data-vv-scope="validate">
                <vs-row>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="form.firstName" class="w-full" name="first_name" v-validate="'required|alpha'" />
                        <span class="text-danger">{{ errors.first('validate.first_name') }}</span>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input icon-pack="feather" icon="icon-user" label-placeholder="Last Name"  v-model="form.lastName" class="w-full" name="last_name" v-validate="'required|alpha'" />
                        <span class="text-danger">{{ errors.first('validate.last_name') }}</span>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                            <div class="vs-con-input">
                                <input v-model="form.DOB" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                        Date of birth
                                        </span>
                                <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                            </div>
                            <span></span>
                        </div>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input icon-pack="feather" icon="icon-map-pin" label-placeholder="Address" v-model="form.address.address_text" class="w-full" name="address_text"/>
                        <span class="text-danger">{{ errors.first('validate.address_text') }}</span>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-select
                            class="w-full"
                            label="City"
                            v-model="form.address.city"
                        >
                            <vs-select-item :key="index" :value="city" :text="city.name" v-for="(city, index) in cities" />
                        </vs-select>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-select
                            class="w-full"
                            label="Country"
                            v-model="form.address.country"
                        >
                            <vs-select-item :key="index" :value="country.id" :text="country.name" v-for="(country, index) in form.address.city.countries" />
                        </vs-select>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-row>
                            <vs-col vs-w="9">
                                <vs-input class="w-full" icon-pack="feather" icon="icon-phone" v-model="form.Telephone" label-placeholder="Telephone(s)" @keydown="$event.keyCode === 13 ? addTelephone : false" />
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
                                    v-for="telephone in form.Telephones"
                                    closable>
                                    {{ telephone }}
                                </vs-chip>
                            </vs-col>
                        </vs-row>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                            <div class="gender-container">
                                <vs-radio v-model="form.gender" vs-value="1">Male</vs-radio>
                                &nbsp;&nbsp;
                                <vs-radio v-model="form.gender" vs-value="0">Female</vs-radio>
                                <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                        Gender
                                        </span>
                            </div>
                            <span></span>
                        </div>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.email" class="w-full" name="email" v-validate="'email'" />
                        <span class="text-danger">{{ errors.first('validate.email') }}</span>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Occupation" v-model="form.occupation" class="w-full" name="occupation" />
                        <span class="text-danger">{{ errors.first('validate.occupation') }}</span>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input icon-pack="feather" icon="icon-git-branch" label-placeholder="Referred From" v-model="form.referred_from" class="w-full" name="referred_from" />
                        <span class="text-danger">{{ errors.first('validate.referred_from') }}</span>
                    </vs-col>
                </vs-row>
                <vs-divider></vs-divider>
                <vs-row vs-justify="center" vs-align="center">
                    <vs-button @click="createPatient" icon-pack="feather" icon="icon-save">Create Patient</vs-button>
                </vs-row>
            </form>
        </vx-card>
    </div>
</template>

<script>
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
        name: "create",
        data: () => {
            return {
                form: {
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
                    occupation: "",
                    address: {
                        address_text: '',
                        country: '',
                        city: '',
                    },
                    DOB: null,
                    gender: 1,
                },
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
            createPatient() {
                this.$validator.validateAll('validate').then(result => {
                    if (result) {
                        this.vs_alert ('Done', 'Patient has been created successfully', 'success', 'icon-check');
                    } else {
                        this.vs_alert ('Oops', 'Error has been occurred!', 'danger', 'icon-check');
                    }
                });
            },

            removeTelephone (e, item) {
                this.Telephones.splice(this.Telephones.indexOf(item), 1)
            },

            addTelephone (e) {
                e.preventDefault();
                let item = this.Telephone;
                if (item !== '') {
                    this.Telephones.push(item);
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
