<template>
    <div>
        <vx-card title='Add Reservation Duration' collapse-action>
            <vs-row>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-select label="Reservation Type" autocomplete label-placeholder="Employee Role" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.type">
                        <vs-select-item :key="index" :value="item.id" :text="item.type" v-for="(item,index) in reservation_types" />
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
                <vs-col vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input-number min="0" v-model="form.counter" label="Counter:" :step="5"/>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button size="small" class="mr-5">Add Duration & Browse</vs-button>
                <vs-button size="small">Add Duration & Create Another</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "create-duration",
        data: () => {
            return {
                form: {
                    type: 1,
                    date: '',
                    start_time: 0,
                    end_time: 0,
                    counter: 0
                },

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
                ]
            }
        }
    }
</script>

<style>
    .vs-input-number {
        width: fit-content;
    }
</style>
