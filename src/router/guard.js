import router from ".";
import store from "../store";

const { getters } = store;

router.beforeEach(({ path }, from, next) => {
  if (!getters["data/isLoggedIn"]) {
    return path !== "/login" ? next("/login") : next();
  }

  return next();
});
