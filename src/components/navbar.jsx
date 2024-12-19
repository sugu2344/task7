const NavBar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex flex-row justify-between items-center bg-[#8CFF98] py-2 px-5 font-bold">
          <div>
            <p>Movie-App</p>
          </div>
          {/* <div>
            <ul className="flex flex-row justify-between items-center space-x-6 font-bold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#footer">Footer</a>
              </li>
            </ul>
          </div> */}
          <div>
            <span class="material-symbols-outlined">favorite</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
