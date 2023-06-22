import Swal from "sweetalert2";

export const OrderPlace = data => {
  fetch(`https://car-doctor-server-guljer77.vercel.app/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire("Order Confirm");
      }
    });
};
