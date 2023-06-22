import React from "react";
import Container from "../../Components/Shared/Container";
import image from "../../assets/checkout/checkout.png";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Details() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="font-inter">
      <Container>
        <div>
          <div className="my-10">
            <img className="w-full" src={image} alt="" />
            <div className="relative lg:top-[-175px] -top-12 text-center text-[#FF3811]">
              <h2 className="lg:text-[28px] text-[22] font-bold">
                Service Details
              </h2>
            </div>
          </div>
          <div className="lg:flex gap-8">
            <div className="w-full lg:w-2/3">
              <img className="rounded-lg w-full mb-8" src={data.img} alt="" />
              <h2 className="text-[26px] font-semibold pb-5">{data.title}</h2>
              <p className="text-[15px] font-light mb-10">{data.description}</p>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-[#F3F3F3] p-5 mb-10">
                <div className="flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#FF3811] hover:text-white py-3 mb-3 px-3 rounded-md shadow-lg">
                  <Link className="">Full Car Repair</Link>
                  <BsArrowRight />
                </div>
                <div className="flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#FF3811] hover:text-white py-3 mb-3 px-3 rounded-md shadow-lg">
                  <Link className="">Engine Repair</Link>
                  <BsArrowRight />
                </div>
                <div className="flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#FF3811] hover:text-white py-3 mb-3 px-3 rounded-md shadow-lg">
                  <Link className="">Automatic Service</Link>
                  <BsArrowRight />
                </div>
                <div className="flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#FF3811] hover:text-white py-3 mb-3 px-3 rounded-md shadow-lg">
                  <Link className="">Engine Oil Change</Link>
                  <BsArrowRight />
                </div>
                <div className="flex items-center justify-between bg-white transition-all duration-300 hover:bg-[#FF3811] hover:text-white py-3 mb-3 px-3 rounded-md shadow-lg">
                  <Link className="">Battery Charge</Link>
                  <BsArrowRight />
                </div>
              </div>
              <div>
                <h2 className="text-[24px] font-bold pb-5">Price ${data.price}</h2>
                <Link to={`/bookings/${data._id}`} className="block py-3 bg-[#FF3811] rounded-md text-center text-white font-semibold">Proceed CheckOut</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Details;
