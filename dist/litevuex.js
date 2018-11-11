/**
 * litevuex v0.1.3
 * (c) 2018 Evan You
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global.Vuex = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

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

    return main;

})));
