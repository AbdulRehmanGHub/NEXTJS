import Link from "next/link";

const Navbar = () => {
  return (
    <header class="px-4 py-4 flex items-center justify-between border-b-[1px]">
      <div>
        <Link href="/" class="text-2xl text-sky-500 font-semibold">
          LOGO
        </Link>
      </div>
      <ul class="flex items-center justify-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
