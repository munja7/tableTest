import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      filterColumn:'',
      filterCriteria: '',
      filterValue:'',
    
    flights: [{"id":1,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Афины","amount":7,"distance":2941},{"id":2,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Белград","amount":4,"distance":2194},{"id":3,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Берлин","amount":6,"distance":1806},{"id":4,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Берн","amount":8,"distance":2685},{"id":5,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Андорра-ла-Велья","amount":12,"distance":3557},{"id":6,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Амстердам","amount":3,"distance":2435},{"id":7,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Братислава","amount":6,"distance":1949},{"id":8,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Брюссель","amount":9,"distance":2542},{"id":9,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Будапешт","amount":15,"distance":1825},{"id":10,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Бухарест","amount":12,"distance":1763},{"id":11,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Вадуц","amount":11,"distance":2511},{"id":12,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Валлетта","amount":2,"distance":4047},{"id":13,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Варшава","amount":8,"distance":1253},{"id":14,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Ватикан","amount":4,"distance":3059},{"id":15,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Вена","amount":6,"distance":1938},{"id":16,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Вильнюс","amount":9,"distance":895},{"id":17,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Дублин","amount":2,"distance":3426},{"id":18,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Загреб","amount":13,"distance":2296},{"id":19,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Киев","amount":15,"distance":854},{"id":20,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Кишинев","amount":7,"distance":1318},{"id":21,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Копенгаген","amount":4,"distance":2240},{"id":22,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Лиссабон","amount":8,"distance":4541},{"id":23,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Лондон","amount":1,"distance":2864},{"id":24,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Любляна","amount":10,"distance":2309},{"id":25,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Люксембург","amount":18,"distance":2539},{"id":26,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Мадрид","amount":3,"distance":4070},{"id":27,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Минск","amount":6,"distance":709},{"id":28,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Монако","amount":19,"distance":3065},{"id":29,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Осло","amount":14,"distance":1923},{"id":30,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Париж","amount":13,"distance":2830},{"id":31,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Подгорица","amount":17,"distance":2629},{"id":32,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Прага","amount":16,"distance":1922},{"id":33,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Рейкьявик","amount":7,"distance":4851},{"id":34,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Рига","amount":9,"distance":916},{"id":35,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Рим","amount":4,"distance":3051},{"id":36,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Сан-Марино","amount":5,"distance":2796},{"id":37,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Сараево","amount":8,"distance":2401},{"id":38,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Скопье","amount":3,"distance":2621},{"id":39,"date":"2022-10-06T21:00:00.000Z","name":"Москва-София","amount":5,"distance":2232},{"id":40,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Стокгольм","amount":7,"distance":1585},{"id":41,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Таллинн","amount":9,"distance":1050},{"id":42,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Тирана","amount":10,"distance":2919},{"id":43,"date":"2022-10-06T21:00:00.000Z","name":"Москва-Хельсинки","amount":2,"distance":1115}],
    flightsFiltered: [],
    isfiltered: 0,

    data:[],


    perPage: 3,
  },
  getters: {
    getTotalPages(state){
      console.log(state.flights.length);
      return Math.ceil(state.isfiltered ? 
        state.flightsFiltered.length/state.perPage: 
        state.flights.length/state.perPage);
    },
    getFlights(state){
      return state.flights;
    },
    getFlightsFiltered(state){
      return state.flightsFiltered;
    },
    getIsfiltered(state){
      return state.isfiltered;
    },
  },
  mutations: {
    set_flights(state, data){
      state.data = data;
      // state.flights = data;
    },
    set_filtered_flights(state, data){
      state.flightsFiltered = data;
    },
    set_filterColumn(state, value){
      state.filterColumn = value;
      console.log(state.filterColumn);
    },
    set_filterCriteria(state, value){
      state.filterCriteria = value;
      console.log(state.filterCriteria);
    },
    set_filterValue(state, value){
      state.filterValue = value;
      console.log(state.filterValue);
    },

  },
  actions: {
    GET_FLIGHTS_FROM_DB({state, commit}, payload){
      console.log(payload.from, payload.to);
      let data = state.flights;
      commit('set_flights', data.slice(payload.from, payload.to));
      // state.flights.slice(payload.from, payload.to);

      // return axios.get('api').then((response) => {
      //   console.log(response.data)
      //   commit('set_flights', response.data);
      // })
    },
       // GET_FILTERED_FLIGHTS_FROM_DB({commit, state}){
    //   return axios.get(api).then((response) => {
    //     console.log(response.data)
    //     commit('set_filtered_flights', response.data);
    //   })
    // }
  },
  modules: {
  }
})
