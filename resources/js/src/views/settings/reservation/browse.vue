<template>
    <div>
        <div class="vx-col w-full mb-base">
        <vx-card ref="reservation_type" title='Reservation Types' collapse-action refreshContentAction @refresh="getReservationTypes">
            <vs-table search :data="reservation_types">
                <template slot="header">
                    <vs-button size="small" to="/dashboard/settings/reservation/create" icon-pack="feather" icon="icon-plus" type="filled">Add New Type</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th sort-key="name">Type</vs-th>
                    <vs-th sort-key="min_price">Minimum Price</vs-th>
                    <vs-th sort-key="max_price">Maximum Price</vs-th>
                    <vs-th sort-key="online_reservation">is Online?</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(type, index) in data">
                        <vs-td :data="index+1">
                            {{ index+1 }}
                        </vs-td>

                        <vs-td :data="type.name">
                            {{ type.name}}
                        </vs-td>

                        <vs-td :data="type.min_price">
                            {{ type.min_price}}
                        </vs-td>

                        <vs-td :data="type.max_price">
                            {{ type.max_price}}
                        </vs-td>

                        <vs-td :data="type.online_reservation">
                            <vs-chip :color="type.online_reservation?'success':'danger'">{{ type.online_reservation?'Yes':'No' }}</vs-chip>
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3" style="margin: 0 10px;">
                                        <vs-button :to="`/dashboard/settings/reservation/edit/${type.id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </div>
                                    <div class="w-1/3">
                                        <vs-button :id="`btn-type-delete-${type.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteReservation(type)"></vs-button>
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
        mounted() {
          this.getReservationTypes();
        },
        data: () => {
            return {
                reservation_types: [],
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

                reservationDurationIdToDelete: null,
                is_requesting: false
            }
        },
        methods: {
            getReservationTypes()
            {
                this.$vs.loading({container: this.$refs.reservation_type.$refs.content, scale: 0.5});
                this.$store.dispatch('reservationType/getData')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.reservation_type.$refs.content);
                        this.reservation_types = response.data.data.data;
                    })
                    .catch(error => {
                        this.$vs.loading.close();
                        console.log(error);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeleteReservation(type)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteReservationType,
                    parameters: [type]
                });
            },

            deleteReservationType(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-type-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('reservationType/delete', params[0].id)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-type-delete-${params[0].id} > .con-vs-loading`);
                        this.reservation_types = this.reservation_types.filter(type => {return type.id !== params[0].id});
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
                        this.$vs.loading.close(`#btn-type-delete-${params[0].id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
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
