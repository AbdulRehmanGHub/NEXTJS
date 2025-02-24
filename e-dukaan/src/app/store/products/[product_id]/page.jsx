import Container from "@/components/home/Container";
import { getProducts } from "@/components/styles/library";
import styles from "@/components/styles/product/product.module.css";
import RecentProducts from "@/components/home/RecentProducts";
import FeaturedProducts from "@/components/home/FeaturedProducts";
// export const dynamic = 'force-dynamic';

// const products = [
//   {
//     id: 1,
//     title: "Essence Mascara Lash Princess",
//     description:
//       "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//     category: "beauty",
//     price: 9.99,
//     discountPercentage: 7.17,
//     rating: 4.94,
//     stock: 5,
//     tags: ["beauty", "mascara"],
//     brand: "Essence",
//     sku: "RCH45Q1A",
//     weight: 2,
//     dimensions: {
//       width: 23.17,
//       height: 14.43,
//       depth: 28.01,
//     },
//     warrantyInformation: "1 month warranty",
//     shippingInformation: "Ships in 1 month",
//     availabilityStatus: "Low Stock",
//     reviews: [
//       {
//         rating: 2,
//         comment: "Very unhappy with my purchase!",
//         date: "2024-05-23T08:56:21.618Z",
//         reviewerName: "John Doe",
//         reviewerEmail: "john.doe@x.dummyjson.com",
//       },
//       {
//         rating: 2,
//         comment: "Not as described!",
//         date: "2024-05-23T08:56:21.618Z",
//         reviewerName: "Nolan Gonzalez",
//         reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
//       },
//       {
//         rating: 5,
//         comment: "Very satisfied!",
//         date: "2024-05-23T08:56:21.618Z",
//         reviewerName: "Scarlett Wright",
//         reviewerEmail: "scarlett.wright@x.dummyjson.com",
//       },
//     ],
//     returnPolicy: "30 days return policy",
//     minimumOrderQuantity: 24,
//     meta: {
//       createdAt: "2024-05-23T08:56:21.618Z",
//       updatedAt: "2024-05-23T08:56:21.618Z",
//       barcode: "9164035109868",
//       qrCode: "https://assets.dummyjson.com/public/qr-code.png",
//     },
//     images: [
//       "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
//     ],
//     thumbnail:
//       "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
//   },
// ];

export default async function ProductPage({ params }) {
  // const product = products.find((product) => product.id === parseInt(1));
  // if (!product) {
  //   return (
  //     <Container>
  //       <p className="p-4 text-red-500">Product not found!</p>
  //     </Container>
  //   );
  // }

  const product = await getProducts(params.product_id);
  // console.log("prod", product);

  return (
    <Container>
      <div className="py-12 px-4">
        <div className="flex flex-col md:flex-row items-start bg-white">
          <img
            src={product.thumbnail}
            alt={product.title}
            className={`${styles.productImage} w-full md:w-1/2 object-cover`}
          />

          <div className="p-6 md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Price: Rs. {product.price}
            </p>

            {product.discountPercentage && (
              <p className="text-md text-red-500 mb-4">
                Discount: {product.discountPercentage}% off
              </p>
            )}

            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Brand: </strong>
                {product.brand}
              </li>
              <li>
                <strong>Stock: </strong>
                {product.stock}
              </li>
              <li>
                <strong>Rating: </strong>
                {product.rating}
              </li>
              <li>
                <strong>Category: </strong>
                {product.category}
              </li>
            </ul>

            <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* {new Date().getTime() % 2 == 0 ? (
        <RecentProducts />
      ) : (
        <FeaturedProducts bgColor={"bg-white"} />
      )} */}
    </Container>
  );
}
