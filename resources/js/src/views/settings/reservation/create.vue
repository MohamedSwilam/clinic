<template>
    <div>
        <vx-card title='Create Reservation Type' collapse-action>
            <vs-row>
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
                    <vs-input-number :min="form.min_price" v-model="form.max_price" label="Maximum Price:" :step="50"/>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button id="btn-create" class="vs-con-loading__container" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" icon-pack="feather" icon="icon-save">Create Type</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "create",
        data: () => {
            return {
                form: {
                    name: '',
                    min_price: 0,
                    max_price: 0,
                    online_reservation: false
                },

                is_requesting: false
            }
        },
        methods: {
            create() {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                this.$store.dispatch('reservationType/create', this.form)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
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
            },

            viewWaitMessage()
            {
                this.$vs.notify({
                    title: 'Please, Wait..',
                    text: 'Your request in in progress.',
                    color: 'warning',
                    iconPack: 'feather',
                    icon: 'icon-clock'
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
