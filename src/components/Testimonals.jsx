import { motion } from "framer-motion"

function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          loved by millions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">
            <h3 className="text-5xl font-bold">10M+</h3>
            <p className="mt-4 text-gray-400">Users</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">
            <h3 className="text-5xl font-bold">4.8★</h3>
            <p className="mt-4 text-gray-400">Play Store Rating</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">
            <h3 className="text-5xl font-bold">15M+</h3>
            <p className="mt-4 text-gray-400">Transactions</p>
          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default Testimonials