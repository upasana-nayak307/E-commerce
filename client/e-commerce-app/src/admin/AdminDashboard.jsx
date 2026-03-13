import { useState,useEffect } from "react";
import styles from "./admin.module.css";
import { createProduct, updateProduct , removeProduct} from "../api/product";
import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import { getAllOrders } from "../api/order";
import { ProductContext } from "../context/ProductContext";
import { updateOrderStatus } from "../api/order";

function AdminDashboard() {
  const navigate=useNavigate();
  const [orders,setOrders] = useState([]);
  const {products , fetchProducts } = useContext(ProductContext);
  const [editingId,setEditingId]=useState(null);
  const [formdata,setFormData]=useState({
    name:"",
    description:"",
    price:"",
    category:"",
    stock:"",
    image:null
  });
  useEffect(() => {
  fetchOrders();
}, []);

const fetchOrders = async () => {
  const res = await getAllOrders();
  setOrders(res.data);
};
const updateStatus = async (orderId,status) => {
  await updateOrderStatus(orderId,status);
  fetchOrders();
};
  function handleChange(e){
    const {name,type,value,files}=e.target;
    if(type==="file"){
      setFormData({...formdata,[name]: files[0]});
    }else{
      setFormData({...formdata,[name]:value});
    }
  }
  async function handleSubmit(e){
    e.preventDefault();
    console.log(formdata);
    const data=new FormData();
    data.append("name",formdata.name);
    data.append("description",formdata.description);
    data.append("price",formdata.price);
    data.append("category",formdata.category);
    data.append("stock",formdata.stock);
    if (formdata.image) {
      data.append("image", formdata.image);
    }else if (formdata._existingImage) {
      data.append("_existingImage", formdata._existingImage);
    }
    try {
      let res;
      if(editingId){
        res=await updateProduct(editingId,data);
        alert("Product updated sucessfully");
      }else{
        res=await createProduct(data);
        alert("Product added sucessfully");
      }
      console.log(res.data);
      await fetchProducts();
      setFormData({
        name:"",
        description:"",
        price:"",
        category:"",
        stock:"",
        image:null
      });
      setEditingId(null);
      navigate('/home');
    } catch (error) {
      console.error(error.response.data);
      alert("Product is not added");
    }
  }
  
  function handleEdit(product){
    setFormData({
    name:product.name,
    description:product.description,
    price: product.price,
    category: product.category,
    stock: product.stock,
    image: null,
    _existingImage: product.image
    })
    setEditingId(product._id);
  }
  async function handleDelete(product){
    if (!window.confirm("Are you sure you want to delete this product?"))
    return;
    try {
      await removeProduct(product._id);
      alert("product deleted");
      fetchProducts();
    } catch (error) {
      console.error(error.response.data);
      alert("Failed to delete product");
    }
  }
  return (
    <div className={styles.dashboard}>

      {/* Sidebar */}
      <aside className={`${styles.glassSidebar} ${styles.sidebar}`}>
        <div className={styles.sidebarContent}>
        <div className={styles.topSidebar}>
          <div className={styles.logo}>
            <h1 className={styles.fontDisplay}>LUXE</h1>
            <p className={styles.tagline}>Admin Dashboard</p>
          </div>

          <nav className={styles.nav}>

            <div className={`${styles.navItem} ${styles.active}`}>
              <span>📊 Dashboard</span>
            </div>

            <div className={styles.navItem}>
              <span>➕ Add Product</span>
            </div>

            <div className={styles.navItem}>
              <span>📦 Products</span>
            </div>

            <div className={styles.navItem}>
              <span>🛒 Orders</span>
            </div>

            <div className={styles.navItem}>
              <span>⚙️ Settings</span>
            </div>
          </nav>
          </div>
          <div className={styles.logout}>
            <div className={styles.navItem} onClick={()=>navigate("/login")}>
              <span>🚪 Logout</span>
            </div>
          </div>
        </div>
      </aside>


      {/* Main Content */}
      <main className={styles.main}>

        {/* Navbar */}
        <header className={`${styles.topNavbar} ${styles.glassCard}`}>

          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className={styles.glassInput}
            />
          </div>

          <div className={styles.profile}>

            <div className={styles.notification}>
              🔔
              <span className={styles.notificationBadge}>3</span>
            </div>

            <div className={styles.profileInfo}>

              <div className={styles.avatar}>
                A
              </div>

              <div>
                <p className={styles.adminName}>Admin User</p>
                <p className={styles.adminRole}>Super Admin</p>
              </div>

            </div>

          </div>

        </header>


        {/* Dashboard Content */}
        <div className={styles.content}>

          {/* Stats */}
          <section>

            <h2 className={styles.sectionTitle}>Overview</h2>

            <div className={styles.statsGrid}>

              <div className={`${styles.statCard} ${styles.glassCard}`}>
                <h3>Total Sales</h3>
                <p>$847,290</p>
              </div>

              <div className={`${styles.statCard} ${styles.glassCard}`}>
                <h3>Total Orders</h3>
                <p>2,847</p>
              </div>

              <div className={`${styles.statCard} ${styles.glassCard}`}>
                <h3>Total Customers</h3>
                <p>15,420</p>
              </div>

              <div className={`${styles.statCard} ${styles.glassCard}`}>
                <h3>Total Products</h3>
                <p>584</p>
              </div>

            </div>

          </section>


          {/* Add Product */}
          <section>

            <h2 className={styles.sectionTitle}>Add New Product</h2>

            <div className={`${styles.glassCard} ${styles.addProduct}`}>

              <form className={styles.productForm} onSubmit={handleSubmit}>
                <div className={styles.uploadContainer}>

                  <h3 className={styles.uploadLabel}>Product Image</h3>

                  <label className={styles.dropZone}>

                    <input 
                      type="file"
                      accept="image/png, image/jpeg"
                      hidden
                      name="image"
                      onChange={handleChange}
                    />

                    <div className={styles.iconCircle}>
                      📤
                    </div>

                    <div className={styles.uploadText}>
                      <p className={styles.mainText}>Drag & drop image here</p>

                      <p className={styles.subText}>
                        or <span className={styles.highlight}>click to browse</span>
                      </p>

                      <p className={styles.formatText}>
                        PNG, JPG up to 5MB
                      </p>
                    </div>

                  </label>

                </div>
                <div className={styles.formGroup}>
                  <label>Product Name</label>
                  <input type="text" className={styles.glassInput} name="name" onChange={handleChange} value={formdata.name}/>
                </div>

                <div className={styles.formGroup}>
                  <label>Category</label>
                  <select className={styles.glassInput} name="category" onChange={handleChange} value={formdata.category}>
                    <option value="">Select Category</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Watches">Watches</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Price</label>
                  <input type="number" className={styles.glassInput} name="price" onChange={handleChange} value={formdata.price}/>
                </div>

                <div className={styles.formGroup}>
                  <label>Stock</label>
                  <input type="number" className={styles.glassInput} name="stock" onChange={handleChange} value={formdata.stock}/>
                </div>

                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label>Description</label>
                  <textarea rows="4" className={styles.glassInput} name="description" onChange={handleChange} value={formdata.description}/>
                </div>

                <button className={styles.btnPrimary} type="submit">
                  Add Product
                </button>

              </form>

            </div>

          </section>


          {/* Products Table */}
            <section>

              <h2 className={styles.sectionTitle}>Products</h2>

              <div className={`${styles.glassCard} ${styles.tableWrapper}`}>

                <table className={styles.luxuryTable}>

                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((p) => (
                      <tr key={p._id}>
                        <td className={styles.productCell}>
                          <img
                            src={p.image}
                            alt={p.name}
                            className={styles.productImage}
                          />
                          <span>{p.name}</span>
                        </td>

                        <td>{p.category}</td>

                        <td className={styles.price}>${p.price}</td>

                        <td>
                          <span className={styles.stockBadge}>
                            {p.stock} in stock
                          </span>
                        </td>

                        <td className={styles.actions}>
                          <button className={styles.editBtn} onClick={()=>handleEdit(p)}>Edit</button>
                          <button className={styles.deleteBtn} onClick={()=>handleDelete(p)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>

            </section>


          {/* Orders */}
          <section>

            <h2 className={styles.sectionTitle}>Recent Orders</h2>

            <div className={`${styles.glassCard} ${styles.tableWrapper}`}>

              <table className={styles.luxuryTable}>

                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((o)=>(
                  <tr key={o._id}>

                  <td>#{o._id.slice(-6)}</td>

                  <td>{o.userId?.name}</td>

                  <td>{o.products[0]?.productId?.name}</td>

                  <td>${o.totalPrice}</td>

                  <td>{o.status}</td>

                  <td>
                  <button 
                  onClick={()=>updateStatus(o._id,"processing")} 
                  className={styles.confirm} 
                  style={{color:"#22c55e"}}
                  disabled={o.status !== "pending"}
                  >
                  Confirm
                  </button>

                  <button 
                  onClick={()=>updateStatus(o._id,"shipped")} 
                  className={styles.ship} 
                  style={{color:"#f59e0b"}}
                  disabled={o.status !== "processing"}
                  >
                  Ship
                  </button>

                  <button 
                  onClick={()=>updateStatus(o._id,"delivered")} 
                  className={styles.deliver} 
                  style={{color:"#3b82f6"}}
                  disabled={o.status !== "shipped"}
                  >
                  Deliver
                  </button>
                  </td>

                  </tr>
                  ))}
                </tbody>
              </table>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;