const getCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  //   console.log(data);
  return data;
};

const getProducts = async (product_id = null) => {
  try {
    let API = "https://dummyjson.com/products";

    if (product_id != null) {
      API += `/${product_id}`;
    }

    const response = await fetch(API);
    const data = await response.json();

    // Return data based on presence of product_id
    return product_id != null ? data : data.products;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
};

export { getCategories, getProducts };
