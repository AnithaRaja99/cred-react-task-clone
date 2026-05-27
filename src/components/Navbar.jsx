function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-6 fixed w-full top-0">

      <h1 className="text-2xl font-bold">
        CRED
      </h1>

      <ul className="hidden md:flex gap-8">
        <li>Features</li>
        <li>Security</li>
        <li>About</li>
      </ul>

    </nav>
  )
}

export default Navbar