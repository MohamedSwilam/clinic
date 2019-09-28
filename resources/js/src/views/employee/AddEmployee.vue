<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card title="Personal Information">

                <div class="vx-row">
                    <div class="vx-col w-full mb-2">
                        <vs-select label="Employee Type" autocomplete label-placeholder="Employee Type" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="SelectedEmployeeType">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in EmployeeTypes" />
                        </vs-select>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <div class="image-preview" v-if="imageData.length > 0" style="display: inline-flex;">
                            <img class="preview" :src="imageData">
                        </div>
                        <div style="display: inline-flex;position: relative;top: -15px;">
                            <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                            <vs-button icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Employee Photo</vs-button>
                        </div>
                    </div>

                    <div class="vx-col sm:w-1/2 w-full mb-2">
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
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="FirstName" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="Last Name" v-model="LastName" />
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
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
                    </div>

                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <google-autocomplete @place-changed="setAddress" id="address" name="address"></google-autocomplete>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2" style="padding: 0;">
                        <vs-row>
                            <vs-col vs-w="9">
                                <vs-input class="w-full" icon-pack="feather" icon="icon-phone" v-model="Telephone" label-placeholder="Telephone(s)" @keydown="$event.keyCode === 13 ? addTelephone() : false" />
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
                    </div>

                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="Email" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Password" v-model="password" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Confirm Password" v-model="confirmPassword" />
                    </div>
                </div>
            </vx-card>
        </div>
        <div class="vx-col w-full mb-base">
            <vx-card title="Educational Information">
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="School Attended" v-model="SchoolAttend" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-pocket" label-placeholder="Degree Held" v-model="DegreeHeld" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2" style="padding: 0;">
                        <vs-row>
                            <vs-col vs-w="9">
                                <vs-input class="w-full" icon-pack="feather" v-model="rewardItem" icon="icon-award" label-placeholder="Hons & Awards" @keydown="$event.keyCode === 13 ? addReward() : false" />
                            </vs-col>
                            <vs-col vs-w="3">
                                <vs-button icon-pack="feather" icon="icon-plus" @click="addReward" class="w-full input-btn" type="gradient">Add</vs-button>
                            </vs-col>
                        </vs-row>
                        <br>
                        <vs-row>
                            <vs-col vs-w="12">
                                <vs-chip
                                    :key="Reward"
                                    @click="removeReward(Reward)"
                                    v-for="Reward in Rewards"
                                    closable>
                                    {{ Reward }}
                                </vs-chip>
                            </vs-col>
                        </vs-row>
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">

                    </div>
                </div>
            </vx-card>
        </div>


        <div class="vx-col w-full mb-base">
            <vx-card title="Social Media Accounts">
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-facebook" label-placeholder="Facebook" v-model="socialmedia.facebook" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-twitter" label-placeholder="Twitter" v-model="socialmedia.twitter" />
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-instagram" label-placeholder="Instagram" v-model="socialmedia.instagram" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-2">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-linkedin" label-placeholder="Linkedin" v-model="socialmedia.linkedin" />
                    </div>
                </div>
            </vx-card>
        </div>


        <div class="vx-col w-full mb-base">
            <vx-card title="Salary Information">
                <div class="vx-row">
                    <div class="vx-col w-full mb-2">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                            <div class="gender-container">
                                <vs-radio v-model="salaryType" vs-value="0">Fixed</vs-radio>
                                &nbsp;&nbsp;
                                <vs-radio v-model="salaryType" vs-value="1">Commission</vs-radio>
                                <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                Salary Type
                                </span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                </div>

                <br>

                <div class="vx-row" v-if="salaryType == 0">
                    <div class="centerx">
                        <vs-row>
                            <vs-col vs-w="3">
                                <label><b>Salary:</b></label>
                            </vs-col>
                            <vs-col vs-w="9">
                                <vs-input-number v-model="salary" :step="500"/>
                            </vs-col>
                        </vs-row>
                    </div>
                </div>

                <div class="vx-row" v-else>
                    <div class="vx-col w-full mb-2">
                        <!--Commission-->
                        <vs-select label="Reservation Types" placeholder="Select Reservation Types" multiple vs-autocomplete class="selectExample" v-model="selectedReservationTypes">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in reservationTypes" />
                        </vs-select>
                        <br>
                        <vs-row :key="index" v-for="(selectedReservation, index) in reservationTypes" v-if="selectedReservationTypes.includes(selectedReservation.value)">
                            <vs-col vs-w="4">
                                <label><b>Commission of {{selectedReservation.text}} in %: </b></label>
                            </vs-col>
                            <vs-col vs-w="8">
                                <vs-input-number v-model="reservationTypes[index].commission" max="100" :step="5"/>
                            </vs-col>
                        </vs-row>
                        <!--<vs-input class="w-full" icon-pack="feather" icon="icon-dollar-sign" label-placeholder="Salary" v-model="DegreeHeld" />-->
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
    import Location from "../../components/google/location";
    import GoogleAutocomplete from "../../components/google/GoogleAutocomplete";
    export default {
        name: "add-employee",
        data: function () {
            return {
                EmployeeTypes: [
                    {text: 'Administrator', value: 1},
                    {text: 'Doctor', value: 2},
                    {text: 'Assistant Doctor', value: 3},
                    {text: 'Receptionist', value: 4},
                    {text: 'Accountant', value: 5},
                ],
                SelectedEmployeeType: 1,
                FirstName: "",
                LastName: "",
                Telephone: "",
                Email: "",
                Telephones: [
                    '01096436702',
                    '01116436790',
                ],
                DOB: null,
                gender: 1,
                imageData: "/images/avatar-s-11.png",
                address: {
                    street_address_1: '',
                    street_address_2: '',
                    city: '',
                    state: '',
                    country: '',
                    longitude: '',
                    latitude: '',
                },
                password: '',
                confirmPassword: '',
                SchoolAttend: '',
                DegreeHeld: '',
                rewardItem: '',
                Rewards: [
                    'Reward 1',
                    'Reward 2',
                    'Reward 3',
                    'Reward 4',
                ],
                salaryType: 0,
                salary: 0,
                reservationTypes: [
                    { text: 'Reveal', value: 1, commission: 0},
                    { text: 'Consultation', value: 2, commission: 0},
                    { text: 'Operation', value: 3, commission: 0},
                ],
                selectedReservationTypes: [],
                socialmedia:[{
                    facebook: '',
                    twitter: '',
                    linkedin: '',
                    instagram: ''
                }]
            }
        },
        components: {
            GoogleAutocomplete
        },
        methods: {
            previewImage: function(event) {
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        this.imageData = e.target.result;
                    }
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            },

            setAddress(place){
                this.address.street_address_1 = place.formatted_address;
                this.address.longitude = place.geometry.location.lng();
                this.address.latitude = place.geometry.location.lat();
                this.address.city = Location.parseCity(place);
                this.address.state = Location.parseState(place);
                this.address.country = Location.parseCountry(place);
            },

            removeReward (item) {
                this.Rewards.splice(this.Rewards.indexOf(item), 1)
            },

            addReward () {
                let item = this.rewardItem;
                if (item != '') {
                    this.Rewards.push(item);
                    this.rewardItem = "";
                }
            },

            removeTelephone (item) {
                this.Telephones.splice(this.Telephones.indexOf(item), 1)
            },

            addTelephone () {
                let item = this.Telephone;
                if (item != '') {
                    this.Telephones.push(item);
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

    .gender-container{
        padding-top: 9px !important;
    }

    .gender-placeholder {
        -webkit-transform: translate(-3px,-90%)!important;
        transform: translate(-3px,-70%)!important;
    }

    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding-right: 20px;
    }

    #img-upload {
        display: none;
    }

    img.preview {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }

    .input-btn {
        position: relative;
        top: 17px;
        left: -33px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .vs-input-number {
        width: fit-content;
    }
</style>
