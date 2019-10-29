<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card title="Personal Information">

                <div class="vx-row">
                    <div class="vx-col w-full mb-6">
                        <vs-select label="Employee Role" autocomplete label-placeholder="Employee Role" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="SelectedEmployeeType">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in EmployeeRoles" />
                        </vs-select>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <div class="image-preview" v-if="imageData.length > 0" style="display: inline-flex;">
                            <img alt="employee photo" class="preview" :src="imageData">
                        </div>
                        <div style="display: inline-flex;position: relative;top: -15px;">
                            <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Employee Photo</vs-button>
                        </div>
                    </div>

                    <div class="vx-col sm:w-1/2 w-full mb-6">
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
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="FirstName" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="Last Name" v-model="LastName" />
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
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

                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-map-pin" label-placeholder="Address" v-model="address.address_text" />
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-select
                            class="w-full"
                            label="City"
                            v-model="address.city"
                        >
                            <vs-select-item :key="index" :value="city" :text="city.name" v-for="(city, index) in cities" />
                        </vs-select>
                    </div>

                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-select
                            class="w-full"
                            label="Country"
                            v-model="address.country"
                        >
                            <vs-select-item :key="index" :value="country.id" :text="country.name" v-for="(country, index) in address.city.countries" />
                        </vs-select>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
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
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Password" v-model="password" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Confirm Password" v-model="confirmPassword" />
                    </div>
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button icon-pack="feather" icon="icon-save" type="gradient">Save Employee</vs-button>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-employee",
        data: function () {
            return {
                EmployeeRoles: [
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
                    city: '',
                    country: '',
                    address_text: '',
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
                password: '',
                confirmPassword: '',
            }
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
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
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
        top: 6px;
        position: relative;
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
