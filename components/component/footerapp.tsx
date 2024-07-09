/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vGEjWfEkr6d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-amber-100 dark:bg-black text-amber-900 dark:text-orange-400">
      <div className="container mx-auto px-4 py-4 md:px-8 lg:py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="text-base font-semibold md:text-lg">Oriental Building Strategy</span>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 md:text-sm">
              Des solutions de qualité pour vos besoins quotidiens.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-0">
            <Link href="/" className="text-sm hover:underline sm:text-base" prefetch={false}>Home</Link>
            <Link href="/company" className="text-sm hover:underline sm:text-base" prefetch={false}>Company</Link>
            <Link href="/services" className="text-sm hover:underline sm:text-base" prefetch={false}>Services</Link>
            <Link href="/products" className="text-sm hover:underline sm:text-base" prefetch={false}>Products</Link>
            <Link href="/contact" className="text-sm hover:underline sm:text-base" prefetch={false}>Contact</Link>
          </nav>

          {/* Copyright Notice */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
            &copy; 2024 Oriental Building Strategy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
