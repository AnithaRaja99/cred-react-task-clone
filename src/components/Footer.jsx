function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h1 className="text-2xl font-bold">CRED</h1>
          <p className="text-gray-400 mt-4">
            Premium fintech experience.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>

    </footer>
  )
}

export default Footer