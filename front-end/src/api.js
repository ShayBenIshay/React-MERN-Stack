import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

// Add a request interceptor to include the Bearer token in headers
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (credentials) => {
  const response = await api.post("/auth", credentials);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await api.get(`/employees/${id}`);
  return response.data;
};

export const getEmployees = async () => {
  console.log("fetching employees");
  const response = await api.get("/employees");
  console.log(response.data);
  return response.data;
};
