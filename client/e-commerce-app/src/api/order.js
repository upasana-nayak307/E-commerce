import API from "./axios";

export const createOrder=(data)=>{
    return API.post('/orders',data);
}

export const getOrders=()=>{
    return API.get('/orders');
}

export const cancelOrder = (id) => {
  return API.put(`/orders/cancel/${id}`);
};

export const getAllOrders = () => {
  return API.get("/orders/admin/orders");
};

export const updateOrderStatus = (orderId, status) => {
  return API.put("/orders/admin/update-status", { orderId, status });
};