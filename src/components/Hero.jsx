import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white h-screen flex flex-col justify-center items-center text-center py-24">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        rewards <br /> for the worthy
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-xl text-lg">
        Pay credit card bills. Earn rewards. Experience premium fintech.
      </p>

      <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-110 hover:bg-gray-200 transition duration-300 shadow-xl">
        Download CRED
      </button>

    </section>
  )
}

export default Hero