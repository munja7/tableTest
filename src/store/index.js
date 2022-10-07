import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flights: [{
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
    {
      date: '10.12.2022',
      name: 'qqqqqq',
      amount: 12,
      distance: 700.5
    },
  ],
  },
  getters: {
    getFlights(state){
      return state.flights;
    }
  },
  mutations: {
    set_flights(state, data){
      state.flights = data;
    }
  },
  actions: {
    // GET_FLIGHTS_FROM_DB({commit}){
    //   return axios.get(api).then((response) => {
    //     console.log(response.data)
    //     commit('set_flights', response.data);
    //   })
    // }
  },
  modules: {
  }
})
