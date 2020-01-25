<template>
    <div>
        <vx-card v-if="can('edit-medical-report')" ref="edit" title='Edit Medical Report' collapse-action>
            <vs-row v-if="form">
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div class="vs-con-input">
                            <input v-model="form.onset_date" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                Onset Date
                            </span>
                            <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                        </div>
                        <span></span>
                    </div>
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div>
                            <vs-radio v-model="form.onset_manner" vs-value="Sudden">Sudden</vs-radio>
                            &nbsp;&nbsp;
                            <vs-radio v-model="form.onset_manner" vs-value="Gradual">Gradual</vs-radio>
                            <span class="pb-5 input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                    Manner of onset
                            </span>
                        </div>
                        <span></span>
                    </div>
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div>
                            <vs-radio v-model="form.duration" vs-value="Continuous">Continuous</vs-radio>
                            &nbsp;&nbsp;
                            <vs-radio v-model="form.duration" vs-value="Attacks">Attacks</vs-radio>
                            <span class="pb-5 input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                    Duration
                            </span>
                        </div>
                        <span></span>
                    </div>
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                        <div>
                            <vs-radio v-model="form.severity" vs-value="Mild">Mild</vs-radio>
                            &nbsp;&nbsp;
                            <vs-radio v-model="form.severity" vs-value="Moderate">Moderate</vs-radio>
                            &nbsp;&nbsp;
                            <vs-radio v-model="form.severity" vs-value="Severe">Severe</vs-radio>
                            <span class="pb-5 input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder">
                                    Severity
                            </span>
                        </div>
                        <span></span>
                    </div>
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('factors')" :danger-text="errors.first('factors')" val-icon-danger="clear" icon-pack="feather" icon="icon-edit" label-placeholder="Initiating Factors" v-model="form.factors" class="w-full" name="factors" v-validate="'min:2'" />
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input :danger="errors.has('symptoms')" :danger-text="errors.first('symptoms')" val-icon-danger="clear" icon-pack="feather" icon="icon-edit" label-placeholder="Associated Symptoms" v-model="form.associated_symptoms" class="w-full" name="symptoms" v-validate="'min:2'" />
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-textarea counter="350" :counter-danger.sync="counterDanger1" label="Examination" v-model="form.examination" />
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-textarea counter="350" :counter-danger.sync="counterDanger2" label="Intra Oral Examination" v-model="form.oral_examination" />
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-textarea counter="350" :counter-danger.sync="counterDanger3" label="Special Test and Examination" v-model="form.special_test" />
                </vs-col>

                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-textarea counter="350" :counter-danger.sync="counterDanger4" label="Diagnosis" v-model="form.diagnosis" />
                </vs-col>

                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <label class="mb-3"><b>Treatment Plan: </b></label>
                    <quill-editor v-model="form.treatment_plan"></quill-editor>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row v-if="form" vs-justify="center" vs-align="center">
                <vs-button id="btn-edit" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):edit()" :disabled="!validateForm" icon-pack="feather" icon="icon-save">Edit Medical Report</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'

    export default {
        name: "edit",
        components: {
            quillEditor,
        },
        mounted() {
            this.getMedicalReport();
        },
        data: () => {
            return {
                form: null,
                is_requesting: false,

                counterDanger1: false,
                counterDanger2: false,
                counterDanger3: false,
                counterDanger4: false,
                counterDanger5: false,
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.patient_id !== null && this.form.doctor_id !== null;
            }
        },
        methods: {
            getMedicalReport()
            {
                this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
                this.$store.dispatch('medicalReport/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
                        this.form = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            edit() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-edit`, color: 'primary', scale: 0.45});
                console.log(this.form);
                this.$store.dispatch('medicalReport/update', {id: this.$route.params.id, data: this.form})
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
                        this.$router.push(`/dashboard/medical-report/${response.data.data.data.id}`);
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
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
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
