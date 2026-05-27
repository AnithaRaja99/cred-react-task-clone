import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="about"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            exclusive rewards for trusted members
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            CRED is built for people who value trust, premium experiences,
            and seamless financial management.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-110 transition duration-300">
            Explore More
          </button>
        </div>

      </div>

    </motion.section>
  )
}

export default About