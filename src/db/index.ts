import post_user from "./user/register";
import login_user from "./user/login";
import get_user from "./user/get";
import put_user from "./user/put";
import del_user from "./user/delete";

const db = {
  user: {
    register: post_user,
    login: login_user,
    get: get_user,
    put: put_user,
    del: del_user,
  },
};

export default db;
