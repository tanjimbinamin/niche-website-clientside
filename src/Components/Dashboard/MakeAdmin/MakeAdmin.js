import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
    fetch("https://floating-retreat-33100.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div style={{textAlign:"center",marginTop:"20px"}}>
      <h1>Admin Maker</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-outline-dark mt-4 p-2"
          type="submit"
          value="make Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;