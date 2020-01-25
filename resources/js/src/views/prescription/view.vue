<template>
    <div>
        <div class="vx-col w-full mb-base" v-if="can('view-prescription')">
            <vx-card ref="view" title='General Information' collapseAction refreshContentAction @refresh="getPrescription">
                <vs-row v-if="report">
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <b>Creator Name: </b> <a href="#" @click="$router.push({name: 'view-employee', params: {id: report.creator.id}})">{{report.creator.first_name}} {{report.creator.last_name}}</a>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <b>Patient Name: </b> <a href="#" @click="$router.push({name: 'profile-patient', params: {id: report.patient.id}})">{{report.patient.first_name}} {{report.patient.last_name}}</a>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <b>Created At: </b> {{ report.created_at | date(true) }} {{ report.created_at | time }}
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <b>Last Modification: </b> {{ report.updated_at | date(true) }} {{ report.updated_at | time }}
                    </vs-col>
                </vs-row>
                <vs-row v-if="report">
                    <vs-col vs-type="flex" vs-align="center" vs-justify="center">
                        <vs-button :to="`/dashboard/prescription/${$route.params.id}/edit`" size="small" color="warning" icon-pack="feather" icon="icon-edit">Edit Report</vs-button>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>

        <div class="vx-col w-full mb-base" v-if="can('view-prescription')">
            <vx-card ref="view" title='Prescription' collapseAction refreshContentAction @refresh="getPrescription">
                <vs-row v-if="report">
                    <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5">
                        <div class="quill-editor rich-text-container" v-html="report.description"></div>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>


    export default {
        name: "view",
        mounted() {
            this.getPrescription();
        },
        data: () => {
            return {
                report: null
            }
        },
        methods: {
            getPrescription()
            {
                this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('prescription/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.report = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            }
        }
    }
</script>

<!--<style>-->
<!--    /*@import "@sass/vuexy/components/horizontalNavMenu.scss"*/-->
<!--    @import '../../../../../node_modules/quill/dist/quill.core.css';-->
<!--    @import '../../../../../node_modules/quill/dist/quill.snow.css';-->
<!--    @import '../../../../../node_modules/quill/dist/quill.bubble.css';-->
<!--    .rich-text-container{-->
<!--        border: 1px solid grey;-->
<!--        border-radius: 5px;-->
<!--        padding: 5px;-->
<!--    }-->
<!--</style>-->

<style lang="scss">
    /*@import "~quill/dist/quill.core.css";*/
    @import "~quill/dist/quill.core.css";
    @import "~quill/dist/quill.snow.css";
    @import "~quill/dist/quill.bubble.css";

    .ql-align-right {
        text-align: right;
    }

    .ql-align-center {
        text-align: center;
    }

    .ql-align-justify {
        text-align: justify;
    }
</style>
