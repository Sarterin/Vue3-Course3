const storage = window.localStorage;

export default {
  get load() {
    const state = storage.getItem("state");
    return JSON.parse(state);
  },

  save(state) {
    const json = JSON.stringify(state);
    return storage.setItem("state", json);
  }
};
