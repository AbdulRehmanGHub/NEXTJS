import Link from "next/link";
import styles from "@/components/styles/navbar.module.css";
import Container from "./home/Container";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <Container className={`flex items-center justify-between`}>
        <Link href="/">
          <div className="flex items-center">
            <span className="text-teal-500 font-bold text-4xl">
              E-Dukaan<b className="text-black">.</b>
            </span>
          </div>
        </Link>

        <div className={`${styles.searchBar} flex items-center`}>
          <input
            type="text"
            placeholder="search for products.."
            className={`${styles.searchInput}`}
          />
          <button className={`${styles.searchButton}`}>
            <FiSearch size={18} />
          </button>
        </div>

        <Nav />
      </Container>
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="flex items-center gap-5">
      <ul className="flex items-center gap-3 font-semibold">
        <li className={styles.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/store">Store</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FiShoppingCart color="black" size={24} />
          <span
            className={`${styles.cartBadge} absolute top-[-15px] right-[-20px] bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}
          >
            5
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
