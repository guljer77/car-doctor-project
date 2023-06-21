import React from "react";
import Container from "../../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/team/1.jpg";
import image2 from "../../../assets/icons/quote.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

function Testimonial() {
  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="text-center">
            <h4 className="text-[#FF3811] text-[20px] font-semibold">
              Testimonial
            </h4>
            <h2 className="text-[36px] font-bold">What Customer Says</h2>
            <p className="text-[15px] font-light text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which don't look even slightly
              believable
            </p>
          </div>
          <div className="my-5">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
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
                <div className="border rounded-md p-5 shadow-lg text-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          className="w-[80px] h-[80px] rounded-full"
                          src={image1}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4>Awlad Hossain</h4>
                        <p>Businessman</p>
                      </div>
                    </div>
                    <div>
                      <img className="w-[40px] h-[40px]" src={image2} alt="" />
                    </div>
                  </div>
                  <p className="text-[#737373] text-[15px] text-left font-inter font-light py-3"> 
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          className="w-[80px] h-[80px] rounded-full"
                          src={image1}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4>Awlad Hossain</h4>
                        <p>Businessman</p>
                      </div>
                    </div>
                    <div>
                      <img className="w-[40px] h-[40px]" src={image2} alt="" />
                    </div>
                  </div>
                  <p className="text-[#737373] text-[15px] text-left font-inter font-light py-3"> 
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          className="w-[80px] h-[80px] rounded-full"
                          src={image1}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4>Awlad Hossain</h4>
                        <p>Businessman</p>
                      </div>
                    </div>
                    <div>
                      <img className="w-[40px] h-[40px]" src={image2} alt="" />
                    </div>
                  </div>
                  <p className="text-[#737373] text-[15px] text-left font-inter font-light py-3"> 
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          className="w-[80px] h-[80px] rounded-full"
                          src={image1}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4>Awlad Hossain</h4>
                        <p>Businessman</p>
                      </div>
                    </div>
                    <div>
                      <img className="w-[40px] h-[40px]" src={image2} alt="" />
                    </div>
                  </div>
                  <p className="text-[#737373] text-[15px] text-left font-inter font-light py-3"> 
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-md p-5 shadow-lg text-center">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          className="w-[80px] h-[80px] rounded-full"
                          src={image1}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4>Awlad Hossain</h4>
                        <p>Businessman</p>
                      </div>
                    </div>
                    <div>
                      <img className="w-[40px] h-[40px]" src={image2} alt="" />
                    </div>
                  </div>
                  <p className="text-[#737373] text-[15px] text-left font-inter font-light py-3"> 
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
