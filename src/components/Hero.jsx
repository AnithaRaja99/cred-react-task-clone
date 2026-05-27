import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen pt-24 flex flex-col justify-center items-center text-center px-6">

      {/* Rotating Gradient */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500 opacity-20 blur-3xl rounded-full rotate-animation"></div>

      {/* Floating Glows */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-20 left-20 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 bottom-20 right-20 animate-pulse"></div>

      {/* Floating Small Cards */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-10 top-40 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl"
      >
        <p className="text-sm">🔥 Cashback Rewards</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-10 bottom-40 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl"
      >
        <p className="text-sm">💳 Smart Payments</p>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-8xl font-black leading-tight z-10 shine-text"
      >
        rewards <br />
        for the worthy
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl z-10"
      >
        Experience a premium way to manage payments,
        unlock rewards, and enjoy seamless fintech experiences.
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="mt-10 bg-white text-black px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.5)] z-10"
      >
        Download CRED
      </motion.button>

      {/* Floating Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
        alt="phone"
        className="w-72 md:w-96 mt-16 rounded-3xl shadow-2xl z-10 float-animation"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      />

    </section>
  )
}

export default Hero