<template>
    <div>
        <vx-card v-if="can('create-prescription')" ref="create" title='Create Report' collapse-action>
            <vs-row>
                <vs-col vs-w="12" vs-type="flex" vs-justify="flex-end" vs-align="flex-end">
                    <vs-button v-if="patient" class="arabic-font" @click="addTemplate1">وثيقة ضمان</vs-button>
                </vs-col>
                <vs-col vs-w="12">
                    <label class="mb-3"><b>Report: </b></label>
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
                           'insertdatetime media table paste code help wordcount print'
                         ],
                         toolbar:
                           'undo redo | print | formatselect | bold italic backcolor | \
                           alignleft aligncenter alignright alignjustify | \
                           bullist numlist outdent indent | removeformat | help '
                       }"></editor>
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
    import Editor from '@tinymce/tinymce-vue'

    export default {
        name: "create",
        mounted() {
            this.getPatientData();
            this.form.patient_id = this.$route.params.id;
            this.form.creator_id = this.$store.getters['auth/userData'].id;
        },
        components: {
            'editor': Editor
        },
        data: () => {
            return {
                form: {
                    title: `Title`,
                    description: ``,
                    language: 'English',
                    patient_id: null,
                    creator_id: null,
                },
                patient: null,
                is_requesting: false,
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.patient_id !== null && this.form.creator_id !== null && this.form.prescription !== ``;
            }
        },
        methods: {
            getPatientData()
            {
                this.$store.dispatch('patient/view', this.$route.params.id)
                    .then(response => {
                        this.patient = response.data.data.data;
                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            create() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
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
            },

            addTemplate1()
            {
                let temp = `<h5>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</h5>
<h5 style="text-align: right;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Khaled Yasser&nbsp; :الاسم.&nbsp;&nbsp;</h5>
<h5 style="text-align: right;">1&nbsp; :رقم الملف.&nbsp;</h5>
<h5 style="text-align: right;">&nbsp;</h5>
<h1 style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;وثيقة ضمان&nbsp; &nbsp;</h1>
<p>&nbsp;</p>
<p style="text-align: right;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ـ ذلك لتجميل و علاج</p>
<p style="text-align: right;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-1</p>
<p style="text-align: right;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -2</p>
<p style="text-align: right;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; نتعهد نحن المركز البريطاني للاسنان بضمان التركيبات الخاصة بالمريض/ة لمدة خمسة عشر سنة ضد&nbsp; أي&nbsp; فك للاصق أو كسر وفي حالة حدوث أي من ذلك يتم استبداله مجانا بدون اى تكاليف إضافية</p>
<p style="text-align: right;">شاكرين لسيادتكم حسن تعاونكم معنا</p>
<p style="text-align: right;">&nbsp;</p>
<p style="text-align: center;">&nbsp; &nbsp; &nbsp; الختم&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;التوقيع</p>`;
                temp = temp.replace("##name##", `${this.patient.first_name} ${this.patient.last_name}`);
                temp = temp.replace("##id##", this.patient.id);
                this.form.description = temp;
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
    .arabic-font{
        font-family: monospace;
    }
</style>
