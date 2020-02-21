<template>
    <div ref="view">
        <vs-row class="mb-5 pl-5">
            <vs-col vs-w="12">
                <img class="pdf-logo" src="/images/logo.png" alt="British Denteal Clinic">
            </vs-col>
            <vs-col vs-w="12" vs-type="flex" vs-justify="center" vs-align="center">
                <h3><strong>Medical Report</strong></h3>
            </vs-col>
        </vs-row>
        <br>
        <vs-row v-if="report">
            <vs-col :vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Name: </b> {{report.patient.first_name}} {{report.patient.last_name}}
            </vs-col>
            <vs-col :vs-lg="12" vs-sm="12" vs-xs="12" class="mb-2 pl-5">
                <b>ID: </b> {{report.patient.id}}
            </vs-col>
            <vs-divider/>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Onset Date: </b> {{report.onset_date}}
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Manner of onset: </b> {{report.onset_manner}}
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Duration: </b> {{report.duration}}
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Severity: </b> {{report.severity}}
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Initiating Factors: </b> {{report.factors}}
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Associated Symptoms: </b> {{report.associated_symptoms}}
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Examination: </b>
                <p>{{report.examination}}</p>
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Intra Oral Examination: </b>
                <p>{{report.oral_examination}}</p>
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Intra Oral Examination: </b>
                <p>{{report.oral_examination}}</p>
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Special Test and Examination: </b>
                <p>{{report.special_test}}</p>
            </vs-col>
            <vs-col :vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Diagnosis: </b>
                <p>{{report.diagnosis}}</p>
            </vs-col>
            <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                <b>Treatment Plan: </b>
                <div class="quill-editor rich-text-container" v-html="report.treatment_plan"></div>
            </vs-col>
        </vs-row>
        <vs-button @click="print" size="large" icon-pack="feather" icon="icon-printer" type="gradient" class="print-btn">Print Now</vs-button>
    </div>
</template>

<script>
    export default {
        name: "pdf",
        mounted() {
            this.getMedicalReport();
        },
        data: () => {
            return {
                report: null
            }
        },
        methods: {
            getMedicalReport()
            {
                this.$vs.loading({container: this.$refs.view, scale: 0.5});
                this.$store.dispatch('medicalReport/view', this.$route.params.id)
                    .then(response => {
                        this.report = response.data.data.data;
                        this.$vs.loading.close(this.$refs.view);
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.view);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            print()
            {
                window.print();
            }
        }
    }
</script>

<style>
.print-btn {
    position: fixed;
    bottom: 5px;
    right: 5px;
}

.pdf-logo {
    width: auto;
    height: auto;
    max-width: 75px;
    max-height: 75px;
}

@media print {
    .print-btn {
        display: none;
    }
}




.ql-align-right{
    text-align: right;
}

.ql-align-center {
    text-align: center;
}
</style>
