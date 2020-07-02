import Vue from "vue";
import Vuex from "vuex";

import home from "./home.module";
import auth from "./auth.module";
import article from "./article.module";
import profile from "./profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
  // new vue : 새 인스턴스 생성
  modules: {
    home,
    auth,
    article,
    profile,
  },
});
