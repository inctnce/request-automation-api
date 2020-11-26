import get from "./get";
import post from "./post";
import put from "./put";
import del from "./delete";

const demand = {
  post: post,
  get: get,
  put: put,
  delete: del,
};

export default demand;
