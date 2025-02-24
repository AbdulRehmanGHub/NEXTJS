// // We are using the Next method (server side rendering and api fetching) now - It load faster, SEO friendly, more optimized than the CSR method.

import Product from "../Product";
import Container from "./Container";

export default async function FeaturedProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const data = await response.json();
  // console.log("data: ", data.products);

  return (
    <div className="p-4 mt-10">
      <Container>
        <h1 className="text-center text-3xl font-semibold mb-4">
          Featured Products
        </h1>

        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {data.products.map((prod) => {
            return <Product key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
}
