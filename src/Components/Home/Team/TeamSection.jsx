import React from "react";
import Container from "../../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/team/1.jpg";
import image2 from "../../../assets/team/2.jpg";
import image3 from "../../../assets/team/3.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

function TeamSection() {
  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="text-center">
            <h4 className="text-[#FF3811] text-[20px] font-semibold">Team</h4>
            <h2 className="text-[36px] font-bold">Meet Our Team</h2>
            <p className="text-[15px] font-light text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which don't look even slightly
              believable
            </p>
          </div>
          <div className="my-5">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                420: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center my-5">
                  <img src={image1} alt="" />
                  <h4 className="text-[22px] font-inter font-bold pt-2">Car Engine Plug</h4>
                  <span className="text-[16px] inline-block font-inter font-semibold pb-3">Engine Expert</span>
                  <div className="flex items-center justify-center space-x-3">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center my-5">
                  <img src={image2} alt="" />
                  <h4 className="text-[22px] font-inter font-bold pt-2">Car Engine Plug</h4>
                  <span className="text-[16px] inline-block font-inter font-semibold pb-3">Engine Expert</span>
                  <div className="flex items-center justify-center space-x-3">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center my-5">
                  <img src={image3} alt="" />
                  <h4 className="text-[22px] font-inter font-bold pt-2">Car Engine Plug</h4>
                  <span className="text-[16px] inline-block font-inter font-semibold pb-3">Engine Expert</span>
                  <div className="flex items-center justify-center space-x-3">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center my-5">
                  <img src={image1} alt="" />
                  <h4 className="text-[22px] font-inter font-bold pt-2">Car Engine Plug</h4>
                  <span className="text-[16px] inline-block font-inter font-semibold pb-3">Engine Expert</span>
                  <div className="flex items-center justify-center space-x-3">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center my-5">
                  <img src={image2} alt="" />
                  <h4 className="text-[22px] font-inter font-bold pt-2">Car Engine Plug</h4>
                  <span className="text-[16px] inline-block font-inter font-semibold pb-3">Engine Expert</span>
                  <div className="flex items-center justify-center space-x-3">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center my-5">
                  <img src={image3} alt="" />
                  <h4 className="text-[22px] font-inter font-bold pt-2">Car Engine Plug</h4>
                  <span className="text-[16px] inline-block font-inter font-semibold pb-3">Engine Expert</span>
                  <div className="flex items-center justify-center space-x-3">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                    <span>
                      <FaLinkedinIn />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;
