import React from "react";
import Container from "../../Shared/Container";
import Image1 from "../../../assets/about_us/person.jpg";
import Image2 from "../../../assets/about_us/parts.jpg";

function About() {
  return (
    <div className="py-20">
      <Container>
        <div className="lg:flex ga-10 font-inter">
          <div className="lg:w-1/2 hidden lg:block w-full relative">
            <img className="w-3/4 rounded-lg" src={Image1} alt="" />
            <img
              className="w-2/4 rounded-lg top-[180px] left-[200px] border-10 border-b-white overflow-hidden absolute"
              src={Image2}
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h4 className="text-[#FF3811] text-[20px] font-semibold">About Us</h4>
            <h2 className="text-[38px] font-semibold py-5">
              We are qualified & of experience in this field
            </h2>
            <p className="text-[15px] font-extralight text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
              <br />
              <br />
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="my-5 bg-[#FF3811] text-white px-5 py-3 rounded-lg">Get More Info</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
