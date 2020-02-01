<template>
    <div>
        <vx-card v-if="can('create-prescription')" ref="create" title='Create Report' collapse-action>
            <vs-row>
                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <label class="mb-3"><b>Language: </b></label>
                    <ul class="centerx mt-3" style="display: flex;">
                        <li style="display: inline-flex;">
                            <vs-radio v-model="form.language" vs-value="Arabic">Arabic</vs-radio>
                        </li>
                        <li class="ml-5" style="display: inline-flex;">
                            <vs-radio v-model="form.language" vs-value="English">English</vs-radio>
                        </li>
                    </ul>
                </vs-col>
            </vs-row>
            <vs-row v-if="form.language==='English'">
                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <label class="mb-3"><b>Prescription: </b></label>
                    <quill-editor v-model="form.descriptionE"></quill-editor>
                </vs-col>
            </vs-row>
            <vs-row v-else-if="form.language==='Arabic'">
                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-textarea dir="rtl" label="Description" v-model="form.descriptionA" />
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button id="btn-create" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" :disabled="!validateForm" icon-pack="feather" icon="icon-save">Create Report</vs-button>
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
        name: "create",
        components: {
            quillEditor,
        },
        mounted() {
            this.form.patient_id = this.$route.params.id;
            this.form.creator_id = this.$store.getters['auth/userData'].id;
        },
        data: () => {
            return {
                form: {
                    description: ``,
                    descriptionE: ``,
                    descriptionA: ``,
                    language: 'English',
                    patient_id: null,
                    creator_id: null,
                },
                is_requesting: false,
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.patient_id !== null && this.form.creator_id !== null && this.form.prescription !== ``;
            }
        },
        methods: {
            create() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                this.form.language==='English'?this.form.description=this.form.descriptionE:this.form.description=this.form.descriptionA;
                this.$store.dispatch('prescription/create', this.form)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$router.push(`/dashboard/report/${response.data.data.data[0].id}`);
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
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
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
