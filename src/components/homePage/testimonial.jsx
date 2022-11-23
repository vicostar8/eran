import React from "react";

const HomePage_Testimonial = ({ text, signer }) => {
  return (
    <div className="col-lg-4 pos-c-cc">
      <div className="testimonialDiv">
        <div>
          <i className="fa-solid fa-quote-left testimonialDiv-Icon"></i>
        </div>
        <div className="testimonialDiv-Text text-center">{text}</div>
        <div className="testimonialDiv-Signer">
          <i className="fa-solid fa-minus"></i>
          {signer}
        </div>
      </div>
    </div>
  );
};

export default HomePage_Testimonial;
