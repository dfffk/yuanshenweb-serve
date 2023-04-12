import request from "../utils/request";

//查找所有角色数据
export const getHeaderimgsApi = () => request.get("/figures/find");

//根据id查找角色数据
export const getOneImgApi = (data) => request.post("/figures/find", data);
