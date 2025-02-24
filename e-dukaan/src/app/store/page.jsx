import Container from "@/components/home/Container";
import Product from "@/components/Product";
import { getCategories, getProducts } from "@/components/styles/library";
import Link from "next/link";

export default function StorePage() {
  return (
    <Container className={"grid grid-cols-5 gap-6"}>
      <CategoryListing />
      <ProductListing />
    </Container>
  );
}

const CategoryListing = async () => {
  const data = await getCategories();
  // console.log('cat', data);

  return (
    <div className="">
      <ul>
        {data.map((d, i) => {
          return (
            <Link href={"/"} key={i}>
              <li className="px-2 py-1 border-[1px]">{d.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const ProductListing = async () => {
  const data = await getProducts();
  // console.log('prod', data);

  return (
    <div className="col-span-4 grid grid-cols-3 gap-2 mt-3">
      {data.map((d) => {
        return <Product product={d} key={"product-" + d.id} />;
      })}
    </div>
  );
};
