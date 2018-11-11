/**
 * litevuex v0.1.41
 * (c) 2018 Jacob Schatz
 * @license MIT
 */
import Vue from 'vue';

var main = {
    install: function install(_vue) {
        _vue.mixin({beforeCreate: function() {
            var options = this.$options;
            if(options.store) {
                this.$store = options.store;
            } else if (options.parent && options.parent.$store) {
                this.$store = options.parent.$store;
            }
        }});
    },

    hug: function hug(store) {
        new Vue({
            data: function data() {
                return store;
            }
        });
    }
};

export default main;
