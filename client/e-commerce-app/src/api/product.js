import API from "./axios";

export const allProducts = () => {
    return API.get("/products");
}

export const viewProduct = (id) => {
    return API.get(`/products/${id}`);
}

export const createProduct = (data) => {
    return API.post("/products", data,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
}

export const updateProduct = (id, formdata) => {
    return API.put(`/products/${id}`, formdata,{
        headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
        }
    });
}

export const removeProduct = (id) => {
    return API.delete(`/products/${id}`,{
        headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
}