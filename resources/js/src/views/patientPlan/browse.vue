<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-plan')">
        <vx-card ref="plan" title='Patients Plans' collapseAction refreshContentAction @refresh="getPlans">
            <vs-table :sst="true" :data="plans">
                <template slot="header">
                    <vs-button :to="`/dashboard/patient/${$route.params.id}/create-plan`" class="mb-5" size="small" icon-pack="feather" icon="icon-plus" type="filled">Add Plan</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Added By</vs-th>
                    <vs-th>Created At</vs-th>
                    <vs-th>Plan</vs-th>
                    <vs-th>Number</vs-th>
                    <vs-th>Cost</vs-th>
                    <vs-th>Total</vs-th>
                    <vs-th>Action</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(plan, index) in plans">
                        <vs-td>{{index+1}}</vs-td>
                        <vs-td><a href="#" @click="$router.push({name: 'view-employee', params: {id: plan.creator.id}})">{{plan.creator.first_name}} {{plan.creator.last_name}}</a></vs-td>
                        <vs-td>{{ plan.created_at | date(true) }}<br>{{ plan.created_at | time }}</vs-td>
                        <vs-td>{{ plan.plan }}</vs-td>
                        <vs-td>{{ plan.number }}</vs-td>
                        <vs-td>{{ plan.cost }}</vs-td>
                        <vs-td>{{ plan.cost*plan.number }}</vs-td>
                        <vs-td>
                            <div class="flex">
                                    <vs-button
                                        class="ml-3"
                                        v-if="can('delete-plan')"
                                        :id="`delete-plan-btn-${plan.id}`"
                                        @click="confirmToDelete(plan)"
                                        icon-pack="feather"
                                        radius color="danger"
                                        icon="icon-trash"
                                        type="border"></vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                    <vs-tr v-if="total>0">
                        <vs-td></vs-td>
                        <vs-td><strong>TOTAL</strong></vs-td>
                        <vs-td></vs-td>
                        <vs-td></vs-td>
                        <vs-td></vs-td>
                        <vs-td></vs-td>
                        <vs-td>{{total}}</vs-td>
                        <vs-td></vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "browse-plan",
        mounted() {
            this.getPlans();
        },
        data: () => {
            return {
                plans: [],
                total: 0,
                is_requesting: false
            }
        },

        methods: {
            getPlans()
            {
                this.$vs.loading({container: this.$refs.plan.$refs.content, scale: 0.5});
                this.$store.dispatch('plan/browse', `?patient=${this.$route.params.id}`)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.plan.$refs.content);
                        this.plans = response.data.data.data;
                        this.calculateTotal();
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.plan.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            calculateTotal()
            {
                let total = 0;
                for(let i = 0; i<this.plans.length; i++){
                    total+=this.plans[i].number*this.plans[i].cost;
                }
                this.total = total;
            },

            confirmToDelete(plan)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deletePlan,
                    parameters: [plan]
                });
            },

            deletePlan(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#delete-plan-btn-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('plan/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#delete-plan-btn-${params[0].id} > .con-vs-loading`);
                        this.plans = this.plans.filter(plan => {return plan.id !== params[0].id});
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
                        this.$vs.loading.close(`#delete-plan-btn-${params[0].id} > .con-vs-loading`);
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

<style scoped>

</style>
