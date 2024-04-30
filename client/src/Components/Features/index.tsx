import React from "react";
import "./Features.css";

const Index = () => {
  return (
    <main className='mainGrid'>
      <div>
        <h3>
          What <span>Differentiate</span> us.
        </h3>
        <p>
          Our core features that's make all the difference.
        </p>
      </div>
      <div className="_features_divs">
        <div>
          <h4>Speaking</h4>
        </div>
        <div>
        <h4>Writing</h4>
        </div>
        <div>
        <h4>Listening</h4>
        </div>
      </div>
    </main>
  );
};

export default Index;
