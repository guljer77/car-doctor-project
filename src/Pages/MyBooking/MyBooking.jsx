import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import image from "../../assets/checkout/checkout.png";
import { AuthContext } from "../../Provider/AuthProvider";

function MyBooking() {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch(`https://car-doctor-server-guljer77.vercel.app/bookings`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);

  const bookingData = booking?.filter(bData => bData.email === user?.email);
  console.log(bookingData);

  return (
    <div>
      <Container>
        <div>
          <div className="my-10">
            <img className="w-full" src={image} alt="" />
            <div className="relative lg:top-[-175px] -top-12 text-center text-[#FF3811]">
              <h2 className="lg:text-[28px] text-[22] font-bold">
                My Bookings
              </h2>
            </div>
          </div>
          <div className="mb-10">
            {bookingData.map(bookingItem => (
              <div key={bookingItem._id} className="flex mb-5 items-center justify-between gap-8">
                <div className="w-1/5">
                  <img className="rounded-lg" src={bookingItem.image} alt="" />
                </div>
                <div className="w-1/5">
                  <h2>{bookingItem.name}</h2>
                  <h2>{bookingItem.title}</h2>
                </div>
                <div className="w-1/5">
                  <p>{bookingItem.price}</p>
                </div>
                <div className="w-1/5">
                  <p>{bookingItem.date}</p>
                </div>
                <div className="w-1/5">
                  <h4 className="px-3 py-2 rounded-md bg-blue-600 text-white text-center">Pending</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MyBooking;
