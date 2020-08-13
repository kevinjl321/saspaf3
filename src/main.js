<<<<<<< HEAD
mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5qbDMyMSIsImEiOiJja2MxNHc2NzQxcTJ3MzFwM2xzbDZ1MWQ2In0.mDNPVHtcYZxBKYJ1njVYhA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});
=======
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
>>>>>>> 77309d156a09ed4eac5504834c6d501b78ad5935
