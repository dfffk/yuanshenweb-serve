import axios from "axios";
import { Message } from "element-ui";
//创建一个axios实例对象
const request = axios.create({
  baseURL: "http://www.egz234.cn:3333",
  timeout: 5000,
});
//请求拦截器
request.interceptors.request.use(
  (req) => {
    return req;
  },
  () => {}
);

//响应拦截器
request.interceptors.response.use(
  (res) => {
    if (res.data.code == 200) {
      return res.data;
    } else {
      //element-ui里面的提示方法
      Message({
        type: "error",
        message: res.data.message || "接口错误",
      });
      return Promise.reject(res.data);
    }
  },
  (err) => {
    console.log("响应拦截器err");
    switch (err.response.status) {
      case 401:
        localStorage.clear();
        //如果不是hash模式：window.location.pathname='/login'
        location.hash = "/login";
        return Promise.reject(err.response);
      case 404:
        Message({
          type: "error",
          message: "找不到网页",
        });
        return Promise.reject(err.response);
      default:
        return Promise.reject(err.response);
    }
  }
);
export default request;
