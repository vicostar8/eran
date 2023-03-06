import React from "react";

const TranslationRow = ({ side, image, content }) => {
  const toDisplay =
    side === "reverse" ? (
      <div className="row m-0 p-0">
        <div className="col-lg-6 pos-c-cc translationPage-image">
          <img src={image} />
        </div>
        {content}
      </div>
    ) : (
      <div className="row m-0 p-0">
        {content}
        <div className="col-lg-6 pos-c-cc translationPage-image">
          <img src={image} />
        </div>
      </div>
    );

  return toDisplay;
};

export default TranslationRow;
