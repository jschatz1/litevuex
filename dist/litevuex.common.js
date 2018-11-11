/**
 * litevuex v0.1.44
 * (c) 2018 Jacob Schatz
 * @license MIT
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

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
                return store.state;
            }
        });
        this.makeDispatchable(store);
        this.makeCommitable(store);
    },

    makeDispatchable: function makeDispatchable() {
        store.dispatch = function(action) {
            store.actions[action]();
        };
    },

    makeCommitable: function makeCommitable() {
        store.commit = function(commit) {
            store.mutations[commit]();
        };
    },

    
};

module.exports = main;
