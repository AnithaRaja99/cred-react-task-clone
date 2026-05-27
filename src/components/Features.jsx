const features = [
  {
    title: "Credit Card Payments",
    description: "Pay bills instantly with rewards."
  },
  {
    title: "Cashback Rewards",
    description: "Earn cashback on every payment."
  },
  {
    title: "Credit Score Tracking",
    description: "Monitor your credit score easily."
  },
  {
    title: "UPI Payments",
    description: "Fast and secure UPI transactions."
  },
  {
    title: "CRED Coins",
    description: "Collect coins and redeem rewards."
  },
  {
    title: "Premium Benefits",
    description: "Exclusive experiences for members."
  }
]

function Features() {
  return (
    <section
      id="features"
      className="bg-[#111] text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          powerful features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] p-8 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-[#2a2a2a] transition duration-300"
            >

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Features