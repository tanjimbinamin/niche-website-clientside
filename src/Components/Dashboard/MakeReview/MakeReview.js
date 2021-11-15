import React from "react";
import { useForm } from "react-hook-form";
import "./MakeReview.css";


const  MakeReview=()=> {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://floating-retreat-33100.herokuapp.com/review",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((result)=>console.log(result));
  };
  

  return (
    <div className="bg mt-5 pt-5 mb-5 pb-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <legend style={{color:"coral"}}>Name</legend>
            <input {...register("firstName")}/>
            <legend style={{color:"coral"}}>Review</legend>
            <input {...register("text")}/>
            <legend style={{color:"coral"}}>Ratings</legend>
            <select {...register("ratings")}>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
            </select>
           
        </fieldset>
        
       
        
        <input type="submit" />
        </form>
    </div>
  );
}

export default MakeReview;