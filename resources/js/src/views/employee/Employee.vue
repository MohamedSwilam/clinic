<template>
    <div>
        <div class="centerx">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{employees.length}} results found in {{resultTime}}ms</b>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                    <vs-button to="/employee/add-employee" vs-w="3" color="primary" type="filled" icon-pack="feather" icon="icon-user-plus">&nbsp;&nbsp;Add Employee</vs-button>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                    <vs-input vs-w="9" icon-pack="feather" icon="icon-search" :label-placeholder="$t('Search') || 'Search'" v-model="searchText" class="is-label-placeholder w-full" />
                </vs-col>
            </vs-row>
            <div class="vx-col w-full mb-base">
            </div>
        </div>

        <!-- USER PROFILE CARD 2 - MINIMAL -->
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base" v-for="employee in employees">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="80px" :src="employee.photo_url" />
                    <div class="text-center">
                        <h4>{{ employee.name }}</h4>
                        <p class="text-grey">{{ employee.title }}</p>
                    </div>
                    <br>
                    <div class="text-left vx-col w-full">
                        <i class="fas fa-envelope"></i> {{ $t('Email') || 'Email' }}
                        <p class="text-grey txt-hover" @click="copyToClipboard(employee.email)">{{ employee.email }}</p>
                    </div>
                    <br>
                    <div class="text-left vx-col w-full">
                        <i class="fas fa-phone"></i>  {{ $t('Telephone') || 'Telephone(s)' }}
                        <p class="text-grey">
                            <template v-for="(telephone, index) in employee.telephones">
                                <span class="txt-hover" @click="copyToClipboard(telephone)">{{ telephone }}</span>
                                <template v-if="index != employee.telephones.length-1">, </template>
                            </template>
                        </p>
                    </div>
                    <template slot="footer">
                        <vs-divider />

                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <vx-tooltip color="danger" :text="$t('Delete') || 'Delete'">
                                    <vs-button color="danger" type="filled" icon-pack="feather" icon="icon-trash"></vs-button>
                                </vx-tooltip>
                            </span>
                            <span class="flex items-center">
                                <vx-tooltip color="warning" :text="$t('EditInformation') || 'Edit Information'">
                                    <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit"></vs-button>
                                </vx-tooltip>
                            </span>
                            <span class="flex items-center">
                                <vs-button type="gradient" icon-pack="feather" icon="icon-eye">{{$t('ViewProfile') || 'View Profile'}}</vs-button>
                            </span>
                        </div>
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.css"
    import "@fortawesome/fontawesome-free/js/all.js"
    export default {
        name: "Employee",
        mounted() {
            this.getEmployeesData(Date.now());
        },
        data: function (){
            return {
                searchText: "",
                resultTime: 0,
                employees: []
            }
        },
        methods: {
            getEmployeesData(InitialTime){
                this.employees = [
                    {
                        id : 1,
                        name: "Phil Gray",
                        title: "Doctor",
                        photo_url: "/images/avatar-s-3.png",
                        email: "Phil_Gray@hotmail.com",
                        telephones: ["01096436702", "01113689783"]
                    },
                    {
                        id : 2,
                        name: "Irene Baker",
                        title: "Receptionist",
                        photo_url: "/images/avatar-s-2.png",
                        email: "Irene_Baker@hotmail.com",
                        telephones: ["01096436702", "01113689783"]
                    },
                    {
                        id : 3,
                        name: "Evan White",
                        title: "Assistant Doctor",
                        photo_url: "/images/avatar-s-1.png",
                        email: "Evan_White@hotmail.com",
                        telephones: ["01096436702", "01113689783"]
                    },
                    {
                        id : 4,
                        name: "Sonia Clark",
                        title: "Receptionist",
                        photo_url: "/images/avatar-s-4.png",
                        email: "Sonia_Clark@hotmail.com",
                        telephones: ["01096436702", "01113689783"]
                    }
                ];
                this.resultTime = Date.now() - InitialTime;
            },

            copyToClipboard(text) {
                if (window.clipboardData && window.clipboardData.setData) {
                    // IE specific code path to prevent textarea being shown while dialog is visible.
                    this.onCopy();
                    return clipboardData.setData("Text", text);

                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                        document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        this.onCopy();
                        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                    } catch (ex) {
                        this.onError();
                        return false;
                    } finally {
                        document.body.removeChild(textarea);
                    }
                }
            },
            onCopy() {
                this.$vs.notify({
                    title: 'Success!',
                    text: 'Text copied successfully.',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-check-circle'
                });
            },
            onError() {
                this.$vs.notify({
                    title: 'Failed!',
                    text: 'Error in copying text.',
                    color: 'danger',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-alert-circle'
                })
            },
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
