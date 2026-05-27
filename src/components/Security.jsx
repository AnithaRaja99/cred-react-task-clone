import { FaLock } from "react-icons/fa"

function Security() {
  return (
    <section className="bg-[#111] text-white py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <FaLock className="text-6xl mx-auto mb-8" />

        <h2 className="text-4xl md:text-5xl font-bold">
          security first
        </h2>

        <p className="mt-6 text-gray-400 leading-8">
          Your payments and data are protected with industry-grade encryption
          and advanced security systems.
        </p>

      </div>

    </section>
  )
}

export default Security