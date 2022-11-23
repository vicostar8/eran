import React from "react";

const ContactInfo = ({ icon, subtitle, info }) => {
  return (
    <div className="pos-c-cc my-3">
      <div className="pos-r-cc my-1">
        <i className={`contact-icon fa-solid ${icon} me-3`}></i>
        <p className="contact-subtitle m-0 p-0">{subtitle}</p>
      </div>
      {info.map((item, idx) => (
        <p key={idx} className="contact-info m-0 p-0">
          {item}
        </p>
      ))}
    </div>
  );
};

export default ContactInfo;
