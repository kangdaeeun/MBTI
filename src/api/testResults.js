import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults';
// const jsonAPI = axios.create({
//   baseURL: "http://localhost:5000/testResults",
// })

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  await axios.post("http://localhost:5000/testResults", resultData)
  // await jsonAPI.post("/testResult", resultData)
};

export const deleteTestResult = async (id) => {
  await axios.delete(`http://localhost:5000/testResults/${id}`)
  // await jsonAPI.delete(`/testResults/${id})
};

export const updateTestResultVisibility = async (id, visibility) => {
  await axios.put(`http://localhost:5000/testResults/${id}`, visibility)
  // await jsonAPI.put(`testResults/${id}, visibility)
};