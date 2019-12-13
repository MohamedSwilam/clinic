<template>
    <div>
        <div class="vx-col w-full mb-base" v-if="can('view-reservation')">
            <vx-card ref="reservation_type" title='Reservation Types' collapse-action refreshContentAction @refresh="getReservationTypes">
                <vs-table search :data="reservation_types">
                    <template slot="header">
                        <vs-button v-if="can('create-reservation')" size="small" to="/dashboard/settings/reservation/create" icon-pack="feather" icon="icon-plus" type="filled">Add New Type</vs-button>
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
                                        <div v-if="can('edit-reservation')" class="w-1/3 mr-5">
                                            <vs-button :to="`/dashboard/settings/reservation/edit/${type.id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                        </div>
                                        <div v-if="can('delete-reservation')" class="w-1/3">
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
        <vx-card ref="reservation_duration" title='Reservation Durations' collapse-action refreshContentAction @refresh="getReservationDurations">
            <vs-table :sst="true" :data="reservation_durations" @sort="handleSort">
                <template slot="header">
                    <vs-button class="mb-5" size="small" to="/dashboard/settings/reservation-duration/create" icon-pack="feather" icon="icon-plus" type="filled">Add New Duration</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Type</vs-th>
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

                        <vs-td>
                            {{ duration.reservation_type.name}}
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
                                        <vs-button :id="`btn-duration-delete-${duration.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteReservationDuration(duration)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-pagination goto class="mt-5" @change="handleChangePage" :total="Math.ceil(reservation_durations_total_items/15)" v-model="currentDurationPage"></vs-pagination>
        </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "browse",
        mounted() {
            if (this.can('view-reservation')){
                this.getReservationTypes();
                this.getReservationDurations();
            }
        },
        data: () => {
            return {
                is_requesting: false,
                reservation_types: [],
                reservation_durations: [],
                reservation_durations_total_items: 0,
                currentDurationPage: 1,
                sortFilter: 'sortDesc=date'
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
                        console.log(error);
                        this.$vs.loading.close(this.$refs.reservation_type.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            getReservationDurations()
            {
                this.$vs.loading({container: this.$refs.reservation_duration.$refs.content, scale: 0.5});
                this.$store.dispatch('reservationDuration/getData', `?page=${this.currentDurationPage}&paginate=15&${this.sortFilter}`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.reservation_duration.$refs.content);
                        this.reservation_durations = response.data.data.data;
                        this.reservation_durations_total_items = response.data.data.meta.pagination.total;
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.reservation_duration.$refs.content);
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
                        this.is_requesting = false;
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
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteReservationDuration,
                    parameters: [duration]
                });
            },

            deleteReservationDuration(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-duration-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('reservationDuration/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-duration-delete-${params[0].id} > .con-vs-loading`);
                        this.reservation_durations = this.reservation_durations.filter(type => {return type.id !== params[0].id});
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

            handleChangePage(page) {
                this.getReservationDurations();
            },

            handleSort(key, active) {
                this.sortFilter = active?`sortDesc=${key}`:`sortAsc=${key}`;
                this.currentDurationPage=1;
                this.getReservationDurations();
            }
        }
    }
</script>

<style scoped>

</style>
