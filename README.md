# LiteVuex

```
npm i litevuex
```

A tiny Vuex. For funzies

**store.js**
```javascript
import Vue from "vue";
import LiteVuex from "litevuex";

Vue.use(LiteVuex);

let store = {
    msg: "No sir",
};

LiteVuex.hug(store);

export default store
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
    <h1>{{$store.msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log(this.$store)
  },
  methods: {
    inputted(e) {
      this.$store.msg = e.target.value;
    }
  }
}
</script>
```