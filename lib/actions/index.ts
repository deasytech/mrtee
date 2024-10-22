import Customer from "@/lib/models/Customer";
import Order from "@/lib/models/Order";
import { connectToDB } from "@/lib/mongoDB";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCollections = async () => {
  const collections = await fetch(`${API_URL}/collections`);
  return await collections.json();
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${API_URL}/collections/${collectionId}`)
  return await collection.json()
}

export const getLatestProducts = async (limit: number) => {
  try {
    const res = await fetch(`${API_URL}/products?limit=${limit}`);
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching latest products:", error);
    return [];
  }
}

export const getProducts = async () => {
  const products = await fetch(`${API_URL}/products`);
  return await products.json();
}

export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${API_URL}/products/${productId}`);
  return await product.json();
}

export const getProductsByCategory = async (category: string) => {
  console.log("products by category: ", category);
  const products = await fetch(`${API_URL}/products/category/${category}`);
  return await products.json();
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${API_URL}/search/${query}`)
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${API_URL}/orders/customers/${customerId}`)
  return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
  console.log(productId)
  const relatedProducts = await fetch(`${API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}

export const getTotalSales = async () => {
  await connectToDB();
  const orders = await Order.find()
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0)
  return { totalOrders, totalRevenue }
}

export const getTotalCustomers = async () => {
  await connectToDB();
  const customers = await Customer.find()
  const totalCustomers = customers.length
  return totalCustomers
}

export const getSalesPerMonth = async () => {
  await connectToDB()
  const orders = await Order.find()

  const salesPerMonth = orders.reduce((acc, order) => {
    const monthIndex = new Date(order.createdAt).getMonth(); // 0 for Janruary --> 11 for December
    acc[ monthIndex ] = (acc[ monthIndex ] || 0) + order.totalAmount;
    // For June
    // acc[5] = (acc[5] || 0) + order.totalAmount (orders have monthIndex 5)
    return acc
  }, {})

  const graphData = Array.from({ length: 12 }, (_, i) => {
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(0, i))
    // if i === 5 => month = "Jun"
    return { name: month, sales: salesPerMonth[ i ] || 0 }
  })

  return graphData
}