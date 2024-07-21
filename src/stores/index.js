import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main-store',
  state: () => {
    return {
      receivedData: null,
      chatID: null, 
    };
  },
  actions: {
    async setData (payload) {
      this.receivedData = payload;
    },

    async setChatID (payload) {
      this.chatID = payload;
    }
  },
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useNavbarStore, import.meta.hot));
// }
