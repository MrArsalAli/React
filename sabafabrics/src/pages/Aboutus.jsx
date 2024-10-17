import React from "react";

export default function Aboutus() {
  return (
    <>
      <div className="relative w-full mt-8">
        <div
          className="relative h-56 overflow-hidden md:h-96"
          style={{ height: 480 }}
        >
          <div className="">
            <img
              src="https://img.freepik.com/premium-photo/textile-shop-there-are-fabrics-various-colors-various-materials-such-as-fabric-lace-satin-linen-concept-tailoring-colors-fabrics-clothes-fashion_1203138-60321.jpg?semt=ais_hybrid"
              className="absolute block w-full"
              alt="SabaFab (Pvt) Ltd"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <h3 className="text-xl font-semibold ">Who We Are?</h3>
        <p className="my-2">
          SabaFabrics is dedicated to delivering premium unstitched fabrics that
          combine timeless elegance with contemporary style. Since our
          inception, we have strived to bring the finest quality textiles to our
          customers, ensuring each piece reflects craftsmanship and meticulous
          attention to detail. From luxurious prints to classic solids,
          SabaFabrics offers a diverse collection designed to cater to your
          every fashion need.
          <br />
          <br />
          At SabaFabrics, we redefine modern textiles by offering a blend of
          tradition and innovation in every fabric. With a focus on creating
          superior unstitched fabric collections, we take pride in crafting
          materials that are not only stylish but also durable and comfortable.
          <br />
          <br />
          Our fabrics embody sophistication and comfort, perfect for those who
          appreciate beauty in simplicity and wish to make a lasting impression.
          Discover the essence of refined fabrics at SabaFabrics. Our
          collections are tailored to meet the evolving demands of fashion,
          ensuring that every piece reflects sophistication and timeless beauty.
          Whether for daily wear or special occasions, our fabrics offer
          versatility, quality, and an impeccable finish. Step into a world of
          elegance and discover the art of premium fabrics with us.
        </p>
      </div>
    </>
  );
}
