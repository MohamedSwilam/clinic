<template>
    <div>
        <vx-card v-if="can('view-reservation')" ref="create" title='Add Reservation Duration' collapse-action>
            <vs-row>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-select label="Reservation Type" autocomplete label-placeholder="Employee Role" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.reservation_type_id">
                        <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in reservation_types" />
                    </vs-select>
                 </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div class="vs-con-input">
                            <input v-model="form.date" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                Reservation Date
                                </span>
                            <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                        </div>
                        <span></span>
                    </div>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div class="vs-con-input">
                            <input v-model="form.start_time" required type="time" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                Start Time
                                </span>
                            <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-clock null"></i>
                        </div>
                        <span></span>
                    </div>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div class="vs-con-input">
                            <input v-model="form.end_time" required type="time" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                End Time
                                </span>
                            <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-clock null"></i>
                        </div>
                        <span></span>
                    </div>
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input icon-pack="feather" icon="icon-airplay" label-placeholder="Room" v-model="form.room" class="w-full" name="room"/>
                </vs-col>

                <vs-col vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input-number min="0" v-model="form.counter" label="Counter:" :step="5"/>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button id="btn-create-false" class="vs-con-loading__container mr-5" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):createReservationDuration(false)" size="small">Add Duration & Browse</vs-button>
                <vs-button id="btn-create-true" class="vs-con-loading__container" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):createReservationDuration(true)" size="small">Add Duration & Create Another</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "create-duration",
        mounted()
        {
            this.getReservationTypes();
        },
        data: () => {
            return {
                form: {
                    reservation_type_id: null,
                    date: null,
                    start_time: null,
                    end_time: null,
                    room: '',
                    counter: 1,
                },
                is_requesting: false,
                reservation_types: []
            }
        },
        methods: {
            getReservationTypes()
            {
                this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('reservationType/getData')
                    .then(response => {
                        this.reservation_types = response.data.data.data;
                        this.form.reservation_type_id = this.reservation_types[0].id;
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            createReservationDuration(createNew)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create-${createNew}`, color: 'primary', scale: 0.45});
                this.$store.dispatch('reservationDuration/create', this.form)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create-${createNew} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                        if (!createNew)
                        {
                            this.$router.push('/dashboard/settings/reservation');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create-${createNew} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            }
        }
    }
</script>

<style>
    .vs-input-number {
        width: fit-content;
    }
</style>
