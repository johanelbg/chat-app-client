import axios from "@/utils/axios";

const initialState = () => ({
  nickname: "",
  rooms: []
});

export default {
  namespaced: true,
  state: initialState(),
  getters: {
    isLoggedIn: ({ nickname }) => !!nickname
  },
  mutations: {
    setNickname(state, value) {
      state.nickname = value;
    },
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    removeRoom(state, roomId) {
      const updatedRooms = state.rooms.filter(room => room._id !== roomId);
      state.rooms = updatedRooms;
    },
    addRoom(state, room) {
      state.rooms = [...state.rooms, room];
    }
  },
  actions: {
    async getAllRooms({ commit }) {
      const url = "room";
      const { data } = await axios.get(url);
      commit("setRooms", data);
    },

    async postRoom({ commit }, room) {
      const url = "room";
      const { data } = await axios.post(url, room);
      commit("addRoom", data);
    },

    async deleteRoom({ commit }, roomId) {
      const url = `room/${roomId}`;
      await axios.delete(url);
      commit("removeRoom", roomId);
    }
  }
};
