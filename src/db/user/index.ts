import del from "./delete";
import get from "./get";
import login from "./login";
import put from "./put";
import register from "./register";


const user = {
  register: register,
  login: login,
  get: get,
  put: put,
  delete: del,
};
export default user;
