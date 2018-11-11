import Vue from "vue";

export default {
    install(_vue) {
        _vue.mixin({beforeCreate: function() {
            const options = this.$options;
            if(options.store) {
                this.$store = options.store;
            } else if (options.parent && options.parent.$store) {
                this.$store = options.parent.$store
            }
        }});
    },

    hug(store) {
        new Vue({
            data() {
                return store;
            }
        })
    }
}