import Link from "next/link";

// Navbar component for navigation and cart link
export const Navbar = () => {
  return (
    <div className="bg-gray-800 mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-semibold flex items-center"
        >
          Furniture MarketPlace
        </Link>

        {/* Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/get-prices" className="text-white hover:text-gray-300">
            Get Prices
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
