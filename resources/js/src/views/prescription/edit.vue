<template>
    <div>
        <vx-card v-if="can('edit-prescription')" ref="edit" title='Edit Report' collapse-action>
            <template v-if="form">
                <vs-row>
                    <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <label class="mb-3"><b>Prescription: </b></label>
                        <editor
                            v-model="form.description"
                            api-key="dbsm75kn7l835v4zmlswhv7qwx2aj6wo2440q4uth36pcqdk"
                            initialValue=""
                            :init="{
                         height: 500,
                         menubar: true,
                         plugins: [
                           'advlist autolink lists link image charmap print preview anchor',
                           'searchreplace visualblocks code fullscreen',
                           'insertdatetime media table paste code help wordcount'
                         ],
                         toolbar:
                           'undo redo | formatselect | bold italic backcolor | \
                           alignleft aligncenter alignright alignjustify | \
                           bullist numlist outdent indent | removeformat | help'
                       }"></editor>
                    </vs-col>
                </vs-row>
            </template>

            <vs-divider></vs-divider>
            <vs-row v-if="form" vs-justify="center" vs-align="center">
                <vs-button id="btn-edit" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):edit()" :disabled="!validateForm" icon-pack="feather" icon="icon-save">Edit Prescription</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'

    export default {
        name: "edit",
        components: {
            'editor': Editor
        },
        mounted() {
            this.getPrescription();
        },
        data: () => {
            return {
                form: null,
                is_requesting: false,
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.patient_id !== null && this.form.creator_id !== null;
            }
        },
        methods: {
            getPrescription()
            {
                this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
                this.$store.dispatch('prescription/view', this.$route.params.id)
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
                this.$store.dispatch('prescription/update', {id: this.$route.params.id, data: this.form})
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
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
