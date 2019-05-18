import axios from "@/utils/axios";

const initialState = () => ({
  nickname: "",
  rooms: [],
  chats: [],
  selectedRoom: {}
});

export default {
  namespaced: true,
  state: initialState(),
  getters: {
    isLoggedIn: ({ nickname }) => !!nickname,
    isRoomSelected: ({ selectedRoom }) => !!Object.keys(selectedRoom).length
  },
  mutations: {
    setNickname(state, value) {
      state.nickname = value;
    },
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setSelectedRoom(state, selectedRoom) {
      state.selectedRoom = Object.assign({}, state.selectedRoom, selectedRoom);
    },
    setChats(state, chats) {
      state.chats = chats;
    },
    removeRoom(state, roomId) {
      const updatedRooms = state.rooms.filter(room => room._id !== roomId);
      state.rooms = updatedRooms;
    },
    addRoom(state, room) {
      state.rooms = [...state.rooms, room];
    },
    setMessage(state, message) {
      state.chats = [...state.chats, message];
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
    },

    async getChatByRoomId({ commit }, roomId) {
      const url = `chat/${roomId}`;
      const { data } = await axios.get(url);
      commit("setChats", data);
    },

    async sendMessage({ commit, state }, message) {
      const url = `chat`;
      const messageObj = {
        room: state.selectedRoom._id,
        nickname: state.nickname,
        message: message
      };
      const { data } = await axios.post(url, messageObj);
      commit("setMessage", data);
    }
  }
};
