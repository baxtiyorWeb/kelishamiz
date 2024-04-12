import { message } from "antd";
import api from "./../config/api/api";
// get categories
export const getCategories = async () => {
  const res = await api.get("/category/all");
  return res.data;
};

// Create Read products

export const createCategories = async (data) => {
  console.log(data);
  const res = await api.post("/category", data, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const registerLoginAndPassword = async (data) => {
  const secretKey = localStorage.getItem("secretKey");
  console.log(secretKey);
  const res = await api.post("/authority/register-login-password", data, {
    headers: {
      "Content-Type": "application/json",
      xsrfCookieName: "JSESSIONID",
      secretKey: secretKey,
    },
  });

  localStorage.setItem("accessToken", res.data?.data?.tokenData?.accessToken);
  localStorage.setItem("refreshToken", res.data?.data?.tokenData?.refreshToken);
  window.location.href = "/profile";
  return res.data;
};

export const getDistrict = async (id) => {
  const res = await api.get(`/district/all/${id}`);
  return res.data;
};

export const getCategoryPropertiesId = async (id) => {
  const res = await api.get(`/category/properties/${id}`);
  return res.data;
};

export const getProducts = async () => {
  const res = await api.get("/product/list?page=0&size=100");
  return res.data;
};

export const createProduct = async (data) => {
  const res = await api.post("/product", data, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(res.data?.data);
  message.success("product qo'shildi");
  return res.data;
};

export const fileUplaodLoadedData = async (data) => {
  const res = await api.post(
    `/file/upload`,
    {
      file: data,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  console.log(res.data?.data);
  message.success("rasm yuklandi");
  return res.data;
};