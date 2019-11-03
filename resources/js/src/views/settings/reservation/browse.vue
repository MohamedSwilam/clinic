<template>
    <div>
        <div class="vx-col w-full mb-base">
        <vx-card title='Reservation Types' collapse-action>
            <vs-table search :data="reservation_types">
                <template slot="header">
                    <vs-button size="small" to="/dashboard/settings/reservation/create" icon-pack="feather" icon="icon-plus" type="filled">Add New Type</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th sort-key="type">Type</vs-th>
                    <vs-th sort-key="minimum_price">Minimum Price</vs-th>
                    <vs-th sort-key="maximum_price">Maximum Price</vs-th>
                    <vs-th sort-key="is_online">is Online?</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(type, index) in data">
                        <vs-td :data="index+1">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="type.type">
                            {{ type.type}}
                        </vs-td>

                        <vs-td :data="type.minimum_price">
                            {{ type.minimum_price}}
                        </vs-td>

                        <vs-td :data="type.maximum_price">
                            {{ type.maximum_price}}
                        </vs-td>

                        <vs-td :data="type.is_online">
                            <vs-chip :color="type.is_online?'success':'danger'">{{ type.is_online}}</vs-chip>
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3" style="margin: 0 10px;">
                                        <vs-button :to="`/dashboard/settings/reservation/edit/${type.id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteReservation(type)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        </div>

        <div class="vx-col w-full mb-base">
        <vx-card title='Reservation Durations' collapse-action>
            <vs-table search :data="reservation_durations">
                <template slot="header">
                    <vs-button size="small" to="/dashboard/settings/reservation-duration/create" icon-pack="feather" icon="icon-plus" type="filled">Add New Duration</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th sort-key="type">Type</vs-th>
                    <vs-th sort-key="date">Date</vs-th>
                    <vs-th sort-key="start_time">Start Time</vs-th>
                    <vs-th sort-key="end_time">End Time</vs-th>
                    <vs-th sort-key="counter">Counter</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(duration, index) in data">
                        <vs-td :data="index+1">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="duration.type">
                            {{ duration.type}}
                        </vs-td>

                        <vs-td :data="duration.date">
                            {{ duration.date}}
                        </vs-td>

                        <vs-td :data="duration.start_time">
                            {{ duration.start_time}}
                        </vs-td>

                        <vs-td :data="duration.end_time">
                            {{ duration.end_time}}
                        </vs-td>

                        <vs-td :data="duration.counter">
                            {{ duration.counter}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3">
                                        <vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteReservationDuration(duration)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "browse",
        data: () => {
            return {
                reservation_types: [
                    {
                        id: 1,
                        type: 'reveal',
                        minimum_price: 200,
                        maximum_price: 400,
                        is_online: true
                    },
                    {
                        id: 2,
                        type: 'Operation',
                        minimum_price: 1500,
                        maximum_price: 3000,
                        is_online: false
                    }
                ],
                reservation_durations: [
                    {
                        id: 1,
                        type: 'reveal',
                        date: '05/11/2019',
                        start_time: '1:00PM',
                        end_time: '2:00PM',
                        counter: 15,
                    },
                    {
                        id: 2,
                        type: 'operation',
                        date: '05/11/2019',
                        start_time: '2:00PM',
                        end_time: '4:00PM',
                        counter: 7,
                    },
                    {
                        id: 3,
                        type: 'reveal',
                        date: '05/11/2019',
                        start_time: '2:00PM',
                        end_time: '4:00PM',
                        counter: 25,
                    }
                ],

                reservationTypeIdToDelete: null,
                reservationDurationIdToDelete: null
            }
        },
        methods: {
            confirmDeleteReservation(type)
            {
                this.reservationTypeIdToDelete = type.id;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteReservationType
                });
            },

            deleteReservationType()
            {
                this.vs_alert ('Success', 'Reservation Type Successfully Deleted.', 'success', 'icon-check');
            },

            confirmDeleteReservationDuration(duration)
            {
                this.reservationDurationIdToDelete = duration.id;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteReservationDuration
                });
            },

            deleteReservationDuration()
            {
                this.vs_alert ('Success', 'Reservation Duration Successfully Deleted.', 'success', 'icon-check');
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

<style scoped>

</style>
