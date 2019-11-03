<template>
    <div>
        <div class="vx-col w-full mb-base">
            <vx-card title='Personal Information' collapseAction>
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
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5">
                        <b>Last Visit: </b> 02/11/2019
                    </vs-col>
                </vs-row>
                <vs-row vs-justify="center">
                    <vs-button :to="`/dashboard/patient/${$route.params.id}/edit`" size="small" icon-pack="feather" icon="icon-edit" type="filled">Edit Information</vs-button>
                </vs-row>
            </vx-card>
        </div>
        <div class="vx-col w-full mb-base">
            <vx-card title='Payments Information' collapseAction>
                <vs-table :data="['','']">
                    <template slot="header">
                        <vs-button class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Payment</vs-button>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>Type</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>Time</vs-th>
                        <vs-th>Amount</vs-th>
                        <vs-th>Export</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr>
                            <vs-td>1</vs-td>
                            <vs-td>Operation</vs-td>
                            <vs-td>01 NOV, 2019</vs-td>
                            <vs-td>2:44 PM</vs-td>
                            <vs-td>1800 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>2</vs-td>
                            <vs-td>Operation</vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>11:16 AM</vs-td>
                            <vs-td>1200 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>3</vs-td>
                            <vs-td>Reveal</vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>300 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>4</vs-td>
                            <vs-td>Reveal</vs-td>
                            <vs-td>15 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>300 EGP</vs-td>
                            <vs-td>
                                <vs-button size="small" icon-pack="feather" icon="icon-file-text" type="filled">Export PDF</vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </div>
        <div class="vx-col w-full mb-base">
            <vx-card title='Medical Reports' collapseAction>
                <vs-table :data="['','']">
                    <template slot="header">
                        <vs-button class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Medical Report</vs-button>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>Added By</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>Time</vs-th>
                        <vs-th>Action</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr>
                            <vs-td>1</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>01 NOV, 2019</vs-td>
                            <vs-td>2:44 PM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>2</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>11:16 AM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>3</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>17 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>4</vs-td>
                            <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: 5}})">Dr. Phil Gray</a></vs-td>
                            <vs-td>15 OCT, 2019</vs-td>
                            <vs-td>12:45 PM</vs-td>
                            <vs-td>
                                <div class="flex">
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button icon-pack="feather" icon="icon-trash" color="danger" radius type="border"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </div>
        <!--<div class="vx-col w-full mb-base" v-for="i in 12" :key="i">-->
            <!--<vx-card :title='`Medical Report ${i}`' :subtitle="`10th, Oct 2019 2:16 PM`" collapseAction>-->
                <!--<vs-row>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 1-->
                    <!--</vs-col>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 2-->
                    <!--</vs-col>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 3-->
                    <!--</vs-col>-->
                    <!--<vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">-->
                        <!--Medcal Info 4-->
                    <!--</vs-col>-->
                <!--</vs-row>-->
            <!--</vx-card>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style>
</style>
