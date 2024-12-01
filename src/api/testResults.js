import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// JSON server를 이용한 CRUD

// 전체 데이터 가져오기
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 데이터 하나 가져오기
export const getTestResultsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// 게시글 추가
export const createTestResult = async (resultData) => {
  const response = await axios.post(`${API_URL}`, resultData);
  return response.data;
};

// 삭제
export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// 수정
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};
