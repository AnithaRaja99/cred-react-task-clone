import { motion } from "framer-motion"

const features = [
  {
    title: "CRED Coins",
    description: "Earn exclusive coins and unlock premium rewards.",
    image:
      "https://cdn-icons-png.flaticon.com/512/272/272525.png",
  },

  {
    title: "UPI Payments",
    description: "Fast, secure and seamless UPI transactions.",
    image:
      "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
  },

  {
    title: "Cashback Rewards",
    description: "Get cashback every time you pay your bills.",
    image:
      "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },

  {
    title: "Credit Score",
    description: "Track and improve your credit health instantly.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  },

  {
    title: "Smart Security",
    description: "Industry-grade encryption for every payment.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },

  {
    title: "Premium Benefits",
    description: "Enjoy exclusive member-only experiences.",
    image:
      "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
  },
]

function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#111] text-white py-24 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full top-20 left-10"></div>

      <div className="absolute w-96 h-96 bg-purple-500 opacity-10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-black text-center mb-16 shine-text"
        >
          powerful features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >

              {/* Floating Glow */}
              <div className="absolute w-32 h-32 bg-white opacity-5 blur-2xl rounded-full -top-10 -right-10"></div>

              {/* Image */}
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mb-6 float-animation"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* Title */}
              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-7">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.section>
  )
}

export default Features