
import Image from "next/image";


export default function Home() {
  return (
    <div className="gradient-background flex flex-col min-h-screen items-center justify-center">
      <main className="text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Image
          src="/img/web/bms_logo.svg"
          alt="BookMyService Logo"
          width={128} // Set explicit width
          height={128} // Set explicit height
          className="w-32 h-32 mx-auto"
        />
        {/* Heading */}
        <h1 className="text-4xl font-bold mt-6 text-black">
          Welcome to BookMyService
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mt-4">
          Discover personalized recommendations and learn more about us.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/recommendations"
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-300 transition duration-300"
          >
            Explore Recommendations
          </a>
        </div>
      </main>
    </div>
  );
}