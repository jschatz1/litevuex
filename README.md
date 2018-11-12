# LiteVuex

```
npm i litevuex
```

A tiny Vuex. For funzies

**store.js**
```javascript
import Vue from "vue";
import litevuex from "litevuex";

Vue.use(litevuex);

let store = {
    state: {
      msg: "No sir"
    },
    actions: {
      inputChanged($store, val) {
        $store.commit('setMessage', val)
      }
    },
    mutations: {
      setMessage($store, val) {
        $store.state.msg = val;
      }
    }
};

litevuex.hug(store);

export default store;
```

**main.js**
```vue
import Vue from 'vue'
import App from './App.vue'
import Store from './store.js';

Vue.config.productionTip = false
new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app')
```

**App.vue**
```javascript
<template>
  <div id="app">
    <input type="text" @input="inputted">
    <h1>{{$store.state.msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    inputted(e) {
      this.$store.dispatch('inputChanged', e.target.value);
    }
  }
}
</script>
```