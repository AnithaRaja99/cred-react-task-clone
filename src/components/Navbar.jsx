import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-widest">
          CRED
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          <li className="hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
            Rewards
          </li>

          <li className="hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
            Benefits
          </li>

          <li className="hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
            Security
          </li>

          <li className="hover:text-white hover:scale-110 transition duration-300 cursor-pointer">
            Support
          </li>

        </ul>

        {/* Button */}
        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-110 hover:bg-gray-200 transition duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Download App
        </button>

      </div>

    </motion.nav>
  )
}

export default Navbar