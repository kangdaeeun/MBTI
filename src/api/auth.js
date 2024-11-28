import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';
// const authAPI = axios.create({
//   baseURL: 'https://moneyfulpublicpolicy.co.kr',
// });

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  // const response = await authAPI.post("/register", userData);
  return response.data; // {message: '회원가입 성공', success: true}
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  // const response = await authAPI.post("/login", userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get("/profile", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response.data;
};

export const updateProfile = async (formData, token) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
};

// export const getUserProfile = async (token) => {
//   const response = await instance.get("/profile", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`, //Authorization 헤더에 토큰을 포함합니다.
//     },
//   });
//   return response.data; //응답에 사용자 프로필 데이터가 포함되어 있다고 가정
// };

// export const updateProfile = async (formData, token) => {
//   const response = await instance.patch("/profile", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`, //Authorization 헤더에 토큰을 포함합니다.
//     },
//   });
//   return response.data; //응답에 업데이트된 프로필 데이터가 포함되어 있다고 가정
// };