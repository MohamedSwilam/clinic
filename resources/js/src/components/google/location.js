import * as _ from "lodash";

export default {
    /**
     * Parse country short name from address array.
     *
     * @param place
     * @returns {string}
     */
    parseCountry(place) {
        let country = null;

        _.forEach(place.address_components, (item) => {
            if(item.types.indexOf("country") > -1){
                country = item.long_name.toLowerCase();
                return;
            }
        })

        return country;
    },

    /**
     * Parse province short name from address array.
     *
     * @param place
     * @returns {string | *}
     */
    parseState(place) {
        let state = null;
        _.forEach(place.address_components, (item) => {
            if(item.types.indexOf("administrative_area_level_1") > -1){
                state = item.long_name.toLowerCase();
                return;
            }
        });

        return state;
    },

    /**
     * Parse city name from address array.
     *
     * @param place
     * @returns {string}
     */
    parseCity(place) {
        let city = null;
        _.forEach(place.address_components, (item) => {
            if(item.types.indexOf("locality") > -1){
                city = item.long_name.toLowerCase();
                return;
            }
        })

        return city;
    },

    /**
     * Parse the district.
     *
     * @param place
     * @returns {*}
     */
    parseDistrict(place) {
        let district = null;

        _.forEach(place.address_components, (item) => {
            if(item.types.indexOf("sublocality") > -1){
                district = item.long_name.toLowerCase();
                return;
            }
        })

        return district;
    },

    /**
     * Parse neighbourhood.
     *
     * @param place
     * @returns {*}
     */
    parseNeighbourhood(place) {
        let neighbourhood = null;
        _.forEach(place.address_components, (item) => {
            if(item.types.indexOf("neighborhood") > -1){
                neighbourhood = item.long_name.toLowerCase();
                return;
            }
        })

        return neighbourhood;
    },

    /**
     * Parse Street name.
     *
     * @param place
     * @returns {*}
     */
    parseStreetName(place) {
        let streetName = null;
        _.forEach(place.address_components, (item) => {
            if(item.types.indexOf("route") > -1){
                streetName = item.long_name.toLowerCase();
                return;
            }
        })

        return streetName;
    }
}
