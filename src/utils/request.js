import axios from "axios";

const domain = 'http://localhost:3333';

// before port request, transfer params, and mainly add same domain 
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// for response, 做拦截, mainly has two parts: data extraction, and error handling
axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err));


// get obtain service resource
export const get = (url) => axios.get(url);

// post add a new resource
export const post = (url, params) => axios.post(url, params);

// put update a resource
export const put = (url, params) => axios.put(url, params);

// delete delete a resource
export const del = (url, params) => axios.del(url, params);

export const patch = (url, params) => axios.patch(url, params);