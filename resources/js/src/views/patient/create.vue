<template>
    <div>
        <vx-card v-if="can('create-patient')" ref="create" title='Create Patient' collapse-action>
            <vs-row>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('first_name')" :danger-text="errors.first('first_name')" val-icon-danger="clear" icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="form.first_name" class="w-full" name="first_name" v-validate="'required|alpha_dash|min:3'" />
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('last_name')" :danger-text="errors.first('last_name')" val-icon-danger="clear" icon-pack="feather" icon="icon-user" label-placeholder="Last Name"  v-model="form.last_name" class="w-full" name="last_name" v-validate="'required|alpha_dash|min:3'" />
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div class="vs-con-input">
                            <input v-model="form.birth_date" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                    Date of birth
                                    </span>
                            <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                        </div>
                        <span></span>
                    </div>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input name="address" :danger="errors.has('address')" val-icon-danger="clear" :danger-text="errors.first('address')" class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="Address" v-model="form.address" />
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input name="city" :danger="errors.has('city')" val-icon-danger="clear" :danger-text="errors.first('city')" class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="City" v-model="form.city" />
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input name="country" :danger="errors.has('country')" val-icon-danger="clear" :danger-text="errors.first('country')" class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="Country" v-model="form.country" />
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
                                v-for="(telephone, index) in form.phones"
                                closable>
                                {{ telephone.number }}
                            </vs-chip>
                        </vs-col>
                    </vs-row>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div class="gender-container">
                            <vs-radio v-model="form.gender" vs-value="Male">Male</vs-radio>
                            &nbsp;&nbsp;
                            <vs-radio v-model="form.gender" vs-value="Female">Female</vs-radio>
                            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                    Gender
                                    </span>
                        </div>
                        <span></span>
                    </div>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('email')" :danger-text="errors.first('email')" val-icon-danger="clear" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.email" class="w-full" name="email" v-validate="'email'" />
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('occupation')" :danger-text="errors.first('occupation')" val-icon-danger="clear" icon-pack="feather" icon="icon-briefcase" label-placeholder="Occupation" v-model="form.occupation" class="w-full" name="occupation" />
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('reference')" :danger-text="errors.first('reference')" val-icon-danger="clear" icon-pack="feather" icon="icon-git-branch" label-placeholder="Referred From" v-model="form.reference" class="w-full" name="reference" />
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button id="btn-create" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" :disabled="!validateForm" icon-pack="feather" icon="icon-save">Create Patient</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "create",
        data: () => {
            return {
                form: {
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
                is_requesting: false,
                Telephone: ''
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.first_name !== "" && this.form.last_name !== "" && this.form.gender !== "" && this.form.phones.length > 0;
            }
        },
        methods: {

            create() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                for (let key in this.form) {
                    if(this.form[key] === ''){
                        delete this.form[key];
                    }
                }
                this.$store.dispatch('patient/create', this.form)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$router.push(`/dashboard/patient/${response.data.data.data.id}`);
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
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            removeTelephone (item) {
                this.form.phones.splice(this.form.phones.indexOf(item), 1)
            },

            addTelephone () {
                if (this.Telephone !== '') {
                    this.form.phones.push({
                        'country_code': '+20',
                        'number': this.Telephone,
                    });
                    this.Telephone = "";
                }
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
