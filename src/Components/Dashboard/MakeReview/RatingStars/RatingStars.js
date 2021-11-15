import React from 'react';
import ReactStars from "react-rating-stars-component";
import "./RatingStars.css";

const RatingStars = (props) => {

  const {ratings}=props.review

  
    const secondExample = {
        size: 20,
        count: 5,
        color: "lightgray",
        activeColor: "gold",
        value: ratings,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,

      
        onChange: (newValue) => {
          console.log(`Example 2: new value is ${newValue}  `);
        }
      };
    return (
            <div className="App">
              <ReactStars {...secondExample} />
            </div>
          );
        
    ;
};

export default RatingStars;