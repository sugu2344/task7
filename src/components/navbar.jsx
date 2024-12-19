import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function navFavourites() {
    navigate("/favourites");
  }
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex flex-row justify-between items-center bg-[#8CFF98] py-2 px-5 font-bold">
          <div>
            <p>Movie-App</p>
          </div>
          <div>
            <button onClick={handleHome}>Home</button>
          </div>
          <div>
            <span
              onClick={navFavourites}
              class="material-symbols-outlined cursor-pointer"
            >
              favorite
            </span>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
