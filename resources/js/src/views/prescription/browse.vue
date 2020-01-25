<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-prescription')">
        <vx-card ref="prescription" title='Prescriptions' collapseAction refreshContentAction @refresh="getPrescription">
            <vs-table :sst="true" :data="prescriptions">
                <template slot="header">
                    <vs-button :to="`/dashboard/patient/${$route.params.id}/create-prescription`" class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Prescription</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Added By</vs-th>
                    <vs-th>Date</vs-th>
                    <vs-th>Time</vs-th>
                    <vs-th>Action</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(report, index) in prescriptions">
                        <vs-td>{{index+1}}</vs-td>
                        <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: report.creator.id}})">{{report.creator.first_name}} {{report.creator.last_name}}</a></vs-td>
                        <vs-td>{{ report.created_at | date(true) }}</vs-td>
                        <vs-td>{{ report.created_at | time }}</vs-td>
                        <vs-td>
                            <div class="flex">
                                    <vs-button :to="`/dashboard/prescription/${report.id}`" icon-pack="feather" icon="icon-eye" color="primary" radius type="border"></vs-button>
                                    <vs-button class="ml-3" icon-pack="feather" icon="icon-edit" color="warning" radius type="border"></vs-button>
                                    <vs-button
                                        class="ml-3"
                                        v-if="can('delete-prescription')"
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
            <vs-pagination goto class="mt-5" @change="handleChangePage" :total="total_pages" v-model="currentPage"></vs-pagination>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "browse-prescription",
        mounted() {
            this.getPrescription();
        },
        data: () => {
            return {
                prescriptions: [],
                currentPage: 1,
                paginate: 15,
                total_pages: 0,

                is_requesting: false
            }
        },

        methods: {
            getPrescription()
            {
                this.$vs.loading({container: this.$refs.prescription.$refs.content, scale: 0.5});
                this.$store.dispatch('prescription/browse', `?patient=${this.$route.params.id}&page=${this.currentPage}&paginate=${this.paginate}`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.prescription.$refs.content);
                        this.prescriptions = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.prescription.$refs.content);
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
                this.$store.dispatch('prescription/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#delete-report-btn-${params[0].id} > .con-vs-loading`);
                        this.prescriptions = this.prescriptions.filter(report => {return report.id !== params[0].id});
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

            handleChangePage()
            {
                this.getPrescription();
            }
        }
    }
</script>

<style scoped>

</style>
