import React from "react";
import "../App.css";

function Hero() {
  return (
    <>
      {/* first Image */}
      <div className="w-full">
        <div
          className="overflow-hidden h-96"
          // style={{height: 450}}
        >
          {/* Item 1 */}
          <div>
            <img
              src="https://images.pexels.com/photos/7641148/pexels-photo-7641148.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="block w-full"
              alt="SabaFab"
            />
          </div>
        </div>
      </div>

      {/* cards */}
      <p className="text-center text-2xl mt-4 poppins-bold">
        {" "}
        - SHOP BY CATEGORY -{" "}
      </p>
      <div className="grid grid-cols-5 gap-2 px-2 mt-1 poppins-semibold">
        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/5503173/pexels-photo-5503173.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CASUAL</p>
        </div>
        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6044416/pexels-photo-6044416.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">FORMAL</p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">
            SHALWAR KAMEEZ
          </p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6276062/pexels-photo-6276062.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CLASSIC</p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6153893/pexels-photo-6153893.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">
            DESIGNER
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 mt-4 px-2">
        <div>
          <img
            className="h-full max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-full max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-full max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-full max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-5 gap-2 px-2 mt-10 poppins-semibold">
        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/7205816/pexels-photo-7205816.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">
            DESIGNER
          </p>
        </div>
        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6153893/pexels-photo-6153893.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CLASSIC</p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6044416/pexels-photo-6044416.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">
            SHALWAR KAMEEZ
          </p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6276062/pexels-photo-6276062.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">FORMAL</p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/5503173/pexels-photo-5503173.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CASUAL</p>
        </div>
      </div>

      {/* E-commerce card */}
      <p className="text-center text-2xl mt-4 poppins-bold">
        {" "}
        - NEW ARRIVALS -{" "}
      </p>
      <div className="grid grid-cols-5 gap-2 px-2 mt-1">
        <div>
          <img
            className="h-96 max-w-full"
            src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
            alt=""
          />
          <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
            Broad Checks Medium Grey Wool
          </p>
          <p className="text-gray-400">From Rs.8,100PKR</p>
        </div>
        <div>
          <img
            className="h-96 max-w-full"
            src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
            Brown Design Wool Rich Stripes
          </p>
          <p className="text-gray-400">From Rs.8,100PKR</p>
        </div>

        <div>
          <img
            className="h-96 max-w-full"
            src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
            alt=""
          />
          <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
            Brown Self Stripes Wool Rich
          </p>
          <p className="text-gray-400">From Rs.8,100PKR</p>
        </div>

        <div>
          <img
            className="h-96 max-w-full"
            src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
            Cherry Red Houndstooth Wool Rich
          </p>
          <p className="text-gray-400">From Rs.8,100PKR</p>
        </div>

        <div>
          <img
            className="h-96 max-w-full"
            src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
            Dark Brown Plain Wool Rich
          </p>
          <p className="text-gray-400">From Rs.8,100PKR</p>
        </div>
      </div>

      <p className="text-center text-2xl mt-4 poppins-bold"> - FABRIC - </p>
      <div className="grid grid-cols-5 gap-2 px-2 mt-1 poppins-semibold">
        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6276050/pexels-photo-6276050.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CASUAL</p>
        </div>
        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/6899765/pexels-photo-6899765.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">
            DESIGNER
          </p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/5851808/pexels-photo-5851808.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CASUAL</p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1487703/pexels-photo-1487703.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CASUAL</p>
        </div>

        <div>
          <img
            className="h-56 max-w-full rounded-lg"
            src="https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="text-center text-sm mt-4 dark:text-gray-400">CASUAL</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
