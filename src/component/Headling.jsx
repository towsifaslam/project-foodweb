import React from "react";

function Headling() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12  grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO'Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="  p-2 flex items-center justify-center bg-orange-600 text-white text-xl font-bold rounded-full px-3  capitalize hover:scale-105 hover:bg-white hover:text-orange-600 duration-600 mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full object-cover rounded-xl md:max-h[200px]"
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </div>
      {/* Card */}
      <div className="rounded-xl  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO'Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="  p-2 flex items-center justify-center bg-orange-600 text-white text-xl font-bold rounded-full px-3  capitalize hover:scale-105 hover:bg-white hover:text-orange-600 duration-600 mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full object-cover rounded-xl md:max-h[200px]"
          src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      {/* Card */}
      <div className="rounded-xl  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO'Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="  p-2 flex items-center justify-center bg-orange-600 text-white text-xl font-bold rounded-full px-3  capitalize hover:scale-105 hover:bg-white hover:text-orange-600 duration-600 mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full object-cover rounded-xl md:max-h[200px]"
          src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
      {/* Card */}
    </div>
  );
}

export default Headling;
