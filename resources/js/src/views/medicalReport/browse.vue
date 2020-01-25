<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-medical-report')">
        <vx-card ref="medical_report" title='Medical Reports' collapseAction refreshContentAction @refresh="getMedicalReports">
            <vs-table :sst="true" :data="medicalReports">
                <template slot="header">
                    <vs-button :to="`/dashboard/patient/${$route.params.id}/create-medical-report`" class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Medical Report</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Added By</vs-th>
                    <vs-th>Date</vs-th>
                    <vs-th>Time</vs-th>
                    <vs-th>Action</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(report, index) in medicalReports">
                        <vs-td>{{index+1}}</vs-td>
                        <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: report.doctor.id}})">{{report.doctor.first_name}} {{report.doctor.last_name}}</a></vs-td>
                        <vs-td>{{ report.created_at | date(true) }}</vs-td>
                        <vs-td>{{ report.created_at | time }}</vs-td>
                        <vs-td>
                            <div class="flex">
                                    <vs-button :to="`/dashboard/medical-report/${report.id}`" icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    <vs-button :to="`/dashboard/medical-report/${report.id}/edit`" class="ml-3" icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    <vs-button
                                        class="ml-3"
                                        v-if="can('delete-medical-report')"
                                        :id="`delete-report-btn-${report.id}`"
                                        @click="confirmToDelete(report)"
                                        icon-pack="feather"
                                        radius color="danger"
                                        icon="icon-trash"
                                        type="border"></vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>

                </template>
            </vs-table>
            <vs-pagination goto class="mt-5" @change="handleMedicalReportChangePage" :total="medical_report_total_pages" v-model="medicalReportCurrentPage"></vs-pagination>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "browse-medical-report",
        mounted() {
            this.getMedicalReports();
        },
        data: () => {
            return {
                medicalReports: [],
                medicalReportCurrentPage: 1,
                medicalReportPaginate: 15,
                medical_report_total_pages: 0,

                is_requesting: false
            }
        },

        methods: {
            getMedicalReports()
            {
                this.$vs.loading({container: this.$refs.medical_report.$refs.content, scale: 0.5});
                this.$store.dispatch('medicalReport/browse', `?patient=${this.$route.params.id}&page=${this.medicalReportCurrentPage}&paginate=${this.medicalReportPaginate}`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.medical_report.$refs.content);
                        this.medicalReports = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.medical_report.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmToDelete(report)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteReport,
                    parameters: [report]
                });
            },

            deleteReport(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#delete-report-btn-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('medicalReport/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#delete-report-btn-${params[0].id} > .con-vs-loading`);
                        this.medicalReports = this.medicalReports.filter(report => {return report.id !== params[0].id});
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
                        this.$vs.loading.close(`#delete-report-btn-${params[0].id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            handleMedicalReportChangePage()
            {
                this.getMedicalReports();
            }
        }
    }
</script>

<style scoped>

</style>
