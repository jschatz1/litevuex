# vuexlite

```
npm i litevuex
```

**store.js**
```javascript
import Vue from "vue";
import Litevuex from "litevuex";

Vue.use(Litevuex);

let store = {
    msg: "No sir",
};

Vuexlite.hug(store);

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