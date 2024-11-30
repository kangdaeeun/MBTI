import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입하는 API
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 로그인하는 API
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

// 유저 정보가지고 오는 API
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 닉네임 업데이트
export const updateProfile = async (token, profileData) => {
  const formData = new FormData();
  if (profileData.nickname) {
    formData.append("nickname", profileData.nickname);
  }
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multiprot/form-data",
    },
  });
  return response.data;
};
