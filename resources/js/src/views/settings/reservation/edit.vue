<template>
    <div>
        <vx-card ref="edit" title='Edit Reservation Type' collapse-action>
            <vs-row v-if="form">
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input icon-pack="feather" icon="icon-file-text" label-placeholder="Type Name" v-model="form.name" class="w-full" name="type"/>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5 pt-6">
                    <vs-switch color="success" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" v-model="form.online_reservation">
                        <span slot="on">Can Be Reserved Online</span>
                        <span slot="off">Can not Be Reserved Online</span>
                    </vs-switch>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input-number min="0" max="5600" v-model="form.min_price" label="Minimum Price:" :step="50"/>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input-number :min="form.minimum_price" v-model="form.max_price" label="Maximum Price:" :step="50"/>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button size="small" id="btn-edit" class="vs-con-loading__container" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):save()" icon-pack="feather" icon="icon-save">Save</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "edit",
        mounted() {
            this.getReservationType();
        },
        data: () => {
            return {
                form: null,
                is_requesting: false
            }
        },
        methods: {
            getReservationType()
            {
                this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
                this.$store.dispatch('reservationType/view', this.$route.params.id)
                    .then(response => {
                        response.data.data.data.length===0?this.$router.push('/dashboard/error-404'):this.form = response.data.data.data;
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
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

            save()
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-edit`, color: 'primary', scale: 0.45});
                this.$store.dispatch('reservationType/update', {id: this.$route.params.id, data: this.form})
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
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
    .vs-input-number {
        width: fit-content;
    }
</style>
