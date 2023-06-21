import React, { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Service() {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  console.log(service);

  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="text-center">
            <h4 className="text-[#FF3811] text-[20px] font-semibold">
              Service
            </h4>
            <h2 className="text-[36px] font-bold">Our Service Area</h2>
            <p className="text-[15px] font-light text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which don't look even slightly
              believable
            </p>
          </div>
          <div className="py-10 lg:grid grid-cols-3 gap-10">
            {service.map(item => (
              <div key={item._id} className="border rounded-md p-5 shadow-lg">
                <img className="w-full h-[180px] rounded-md" src={item.img} alt="" />
                <h4 className="py-3 text-[22px] font-semibold">{item.title}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] text-[#FF3811] font-semibold">Price ${item.price}</p>
                  <Link to={`/bookings/${item._id}`}><BsArrowRight className="text-[#FF3811]" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service;
