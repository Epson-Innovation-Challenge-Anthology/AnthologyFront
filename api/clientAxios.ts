"use client";

import axios from "axios";
import Cookies from 'js-cookie';


const clientAxios = axios.create({
    baseURL: 'http://localhost:3000'
})

clientAxios.interceptors.request.use(
  (config)=>{ 
      const accessToken = Cookies.get('accessToken')
      if (accessToken) {
        config.headers.setAuthorization(`Bearer ${accessToken}`)
      }
      return config
    },
  error => Promise.reject(error)
)

clientAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = Cookies.get('refreshToken')
      if(refreshToken){
        try {
          const request: RefreshTokenRequest = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
          }
          const response = await axios.post('/auth/refresh', request)
          const { access_token : newAccessToken } = response.data.data;
          Cookies.set('accessToken', newAccessToken)
          error.config.headers.setAuthorization(`Bearer ${newAccessToken}`)
          return clientAxios(error.config)
        }
        catch(refreshError) {
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  }
);

export default clientAxios;

