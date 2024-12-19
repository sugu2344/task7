import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="py-10 my-3 mx-3">
        <div className="bg-[#F7F7F2] px-5 py-10">
          <div className="flex flex-wrap gap-4 p-5 bg-[#0D1F2D] ">
            {/* Card start */}
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4 flex flex-col">
              <img src="https://placehold.co/600x400" alt="Product" />
              <div className="flex flex-col justify-between flex-grow text-center space-y-3 mt-3">
                <h1 className="font-bold text-2xl">Title</h1>
                <p className="text-justify flex justify-center">Description</p>
                <div className="flex space-x-2">
                  <button className="border-2 p-2 rounded-xl text-[#FF3562] hover:bg-black hover:text-white cursor-pointer mt-auto">
                    View Details
                  </button>
                  <button className="border-2 p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer mt-auto">
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
