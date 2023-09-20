import { createStore } from "vuex"

// Create a new store instance.
export const store = createStore({
    state () {
      return {
        formInputs: []
      }
    },
    mutations: {
      changeFormInputs (state, inputs) {
        state.formInputs = inputs;
      }
    },
    getters: {
        getFormInputs(state) {
            return state.formInputs;
        }
    }
  })