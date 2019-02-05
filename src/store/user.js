import APIService from "@/services/APIService.js";
export default {
  namespaced: true,
  state: {
    user: {
      name: "stub_name" // TODO
    }
  },
  mutations: {
    SET_USER(state, new_user) {
      state.user = new_user;
    }
  },
  actions: {
    // Returns a promise. TODO.
    log_in(vuex, { username, password }) {
      // TODO
      return new Promise((resolve, reject) => {
        APIService.log_in(username, password)
          .then(user => {
            vuex.commit("SET_USER", user);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logout(vuex) {
      return new Promise((resolve, reject) => {
        APIService.logout()
          .then(() => {
            vuex.commit("SET_USER", null);
            resolve();
          })
          .catch(() => {
            // TODO offline logout
            reject();
          });
      });
    }
  },
  getters: {
    authorized: state => {
      return state.user !== null && typeof state.user === "object"
        ? true
        : false;
    }
  }
};
