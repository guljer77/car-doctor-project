import React, { useContext } from "react";
import Container from "../../Components/Shared/Container";
import image from "../../assets/checkout/checkout.png";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { OrderPlace } from "../../Api/order";

function Bookings() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const data = useLoaderData();
  const {user} = useContext(AuthContext);

  const orderHandle = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const order = {
      name,
      date,
      title:data.title,
      email,
      price,
      image: data.img,
      id: data._id
    }
    console.log(order);
    OrderPlace(order);
    navigate(from, {replace: true})
  }

  return (
    <div>
      <Container>
        <div>
          <div className="my-10">
            <img className="w-full" src={image} alt="" />
            <div className="relative lg:top-[-175px] -top-12 text-center text-white">
              <h2 className="lg:text-[28px] text-[22] font-bold">Check Out</h2>
            </div>
          </div>
          <div className="my-10 bg-[#F3F3F3] p-10 rounded-md">
            <form onSubmit={orderHandle} action="">
              <div className="lg:flex gap-10 mb-3">
                <div className="lg:w-1/2 w-full">
                  <label className="block text-[15px] font-light" htmlFor="">
                    Name
                  </label>
                  <input
                    className="w-full pl-3 block py-3 rounded-md outline-0"
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block text-[15px] font-light" htmlFor="">
                    Date
                  </label>
                  <input
                    className="w-full px-3 py-3 block rounded-md outline-0"
                    type="date"
                    name="date"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex gap-10 mb-3">
                <div className="lg:w-1/2 w-full">
                  <label className="block text-[15px] font-light" htmlFor="">
                    Email
                  </label>
                  <input
                    className="w-full pl-3 block py-3 rounded-md outline-0"
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block text-[15px] font-light" htmlFor="">
                    Due Amount
                  </label>
                  <input
                    className="w-full px-3 py-3 block rounded-md outline-0"
                    type="text"
                    name="price"
                    defaultValue={"$"+data.price}
                    placeholder="Due Amount"
                  />
                </div>
              </div>
              <div className="pt-3">
                <input type="submit" value="Order Confirm" className="block w-full py-3 text-center cursor-pointer rounded-md bg-[#FF3811] text-white" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bookings;
