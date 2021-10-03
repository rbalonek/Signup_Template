import api from "./api-config";

// const api = "http://localhost:3000";

export const getAllVendors = async () => {
  const resp = await api.get("/vendors");
  return resp.data;
};

export const postVendor = async (formData) => {
  const resp = await api.post("/vendors", { vendor: formData });
  return resp.data;
};

export const deleteVendor = async (id) => {
  const resp = await api.delete(`/vendors/${id}`);
  return resp.data;
};
