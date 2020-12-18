import axios from 'axios';
const baseURL = process.env.NODE_ENV === 'development' ? './' : '/api'
const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  // easy-mock服务挂了，暂时不使用了

  timeout: 60000,
  withDirectives: true
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
     return response.data
  },
  error => {
    // 如果没有登录，跳转到登录页

 
    return Promise.reject(error);
  }
);
export default service