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
                return store.state;
            }
        })
        this.makeDispatchable(store);
        this.makeCommitable(store);
    },

    makeDispatchable(store) {
        store.dispatch = function(action) {
            store.actions[action](store);
        }
    },

    makeCommitable(store) {
        store.commit = function(commit, val) {
            store.mutations[commit](store, val);
        }
    },

    
}