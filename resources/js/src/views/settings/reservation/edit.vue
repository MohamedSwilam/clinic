<template>
    <div>
        <vx-card title='Edit Reservation Type' collapse-action>
            <vs-row>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input icon-pack="feather" icon="icon-file-text" label-placeholder="Type Name" v-model="form.type" class="w-full" name="type"/>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5 pt-6">
                    <vs-switch color="success" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" v-model="form.is_online">
                        <span slot="on">Can Be Reserved Online</span>
                        <span slot="off">Can not Be Reserved Online</span>
                    </vs-switch>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input-number min="0" max="5600" v-model="form.minimum_price" label="Minimum Price:" :step="50"/>
                </vs-col>
                <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-5 pl-5">
                    <vs-input-number :min="form.minimum_price" v-model="form.maximum_price" label="Maximum Price:" :step="50"/>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row vs-justify="center" vs-align="center">
                <vs-button icon-pack="feather" icon="icon-save">Save Type</vs-button>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data: () => {
            return {
                form: {
                    type: 'Type Name',
                    minimum_price: 150,
                    maximum_price: 300,
                    is_online: true
                }
            }
        }
    }
</script>

<style>
    .vs-input-number {
        width: fit-content;
    }
</style>
