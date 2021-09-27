import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[]
  },
  mutations: {
    setProductos(state, payload){
      state.productos = payload;
    }
  },
  actions: {
    async getProductos({commit}){
      const peticion = await fetch ('https://www.datos.gov.co/resource/xdk5-pm3f.json');
      const data = await peticion.json();
      console.log(data);
      commit('setProductos', data)
    }
  },
  modules: {
  }
})
