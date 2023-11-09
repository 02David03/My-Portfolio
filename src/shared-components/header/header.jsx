function Header() {

  return(
    <header className="bg-black flex justify-center shadow-white shadow-md">
      <div className="container flex justify-between items-center py-2">
        <h2 className="text-white"> D.A </h2>
        <nav className="flex flex-col items-end">
          <div className="text-primary text-3xl flex gap-6">
            <a className="" href="#"> About me </a>
            <a href="#"> Portfolio </a>
          </div>
          <div className="flex w-64 h-1 bg-primary rounded"></div>
        </nav>
        
      </div>
    </header>
  )
}

export default Header;