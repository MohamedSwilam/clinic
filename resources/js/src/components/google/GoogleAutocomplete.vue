<template>
    <div class="vs-component vs-con-input-label vs-input is-label-placeholder w-full vs-input-primary is-label-placeholder">
        <div class="vs-con-input">
            <gmap-autocomplete
                class="hasValue vs-inputx vs-input--input normal hasIcon"
                id="google-address-input"
                style="border: 1px solid rgba(0, 0, 0, 0.2);"
                ref="autocompleteInput"
                vs-w="9"
                placeholder=""
                :value="address"
                :selectFirstOnEnter="true"
                @place_changed="placeChanged"></gmap-autocomplete>
            <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">{{placeholder}}</span>
            <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-map-pin null"></i><!---->
        </div>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "gmap-autocomplete",
        props: {
            address: {
                type: String,
            },
            placeholder: {
                type: String,
                default: 'Search for your address',
            }
        },
        methods: {
            placeChanged(place){
                this.$emit('place-changed', place);
            }
        }
    }
</script>
