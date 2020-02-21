<template>
    <div>
        <vx-card v-if="can('create-plan')" ref="create" title='Create Plan' collapse-action>
            <vs-row>
                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-select label="Patient Plan" autocomplete label-placeholder="Patient Plan" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.plan">
                        <vs-select-item :key="index" :value="item.plan" :text="item.plan" v-for="(item,index) in plans" />
                    </vs-select>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-col vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input-number min="1" v-model="form.number" label="Number:" :step="1"/>
                    </vs-col>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-col vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                        <vs-input-number min="0" v-model="form.cost" label="Cost:" :step="50"/>
                    </vs-col>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button id="btn-create" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" :disabled="!validateForm" icon-pack="feather" icon="icon-save">Create Plan</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>

    export default {
        name: "create",
        mounted() {
            this.form.patient_id = this.$route.params.id;
            this.form.creator_id = this.$store.getters['auth/userData'].id;
        },
        data: () => {
            return {
                form: {
                    plan: 'Bone',
                    number: 1,
                    cost: 0,
                    patient_id: null,
                    creator_id: null,
                },
                is_requesting: false,

                plans: [
                    {
                        plan: 'Bone'
                    },
                    {
                        plan: 'Implants'
                    },
                    {
                        plan: 'Porcelain Crowns'
                    },
                    {
                        plan: 'Emax Crowns'
                    },
                    {
                        plan: 'Endo'
                    },
                    {
                        plan: 'Filling'
                    },
                    {
                        plan: 'Scaling & Polishing'
                    },
                    {
                        plan: 'Whittening'
                    },
                    {
                        plan: 'Gum'
                    },
                    {
                        plan: 'Extraction'
                    },
                    {
                        plan: 'Denture'
                    },
                ]
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.patient_id !== null && this.form.creator_id !== null;
            }
        },
        methods: {

            create() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                this.$store.dispatch('plan/create', this.form)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$router.push(`/dashboard/patient/${this.form.patient_id}`);
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
        }
    }
</script>

<style>
    .vs-input-number {
        width: fit-content;
    }
</style>
