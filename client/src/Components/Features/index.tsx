import React from "react";
import "./Features.css";

import Talking from "../../Assets/assets.newatlas.jpeg"
import Writing from "../../Assets/Stocksy_woman-writing-laptop_476082-57ab432d3df78cf459975331.jpg"
import Listening from "../../Assets/istockphoto-1223736201-640x640.jpg"

const Index = () => {
  return (
    <main className='mainGrid'>
      <div className="_features_title">
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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <img src={Talking} alt="" className="_speaking_img"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            impedit perspiciatis facere similique nisi ab.
            <br />
            <br />
            Dolor porro omnis nobis eveniet fugit optio accusantium a sapiente unde ut dolores beatae blanditiis 
            iste tenetur consequatur?
            <br />
            <br />
             Optio fugiat inventore tempora maiores soluta dolores vel ipsa suscipit.
          </p>
        </div>
        <div>
          <h4>Writing</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <img src={Writing} alt="" className="_speaking_img"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            impedit perspiciatis facere similique nisi ab.
            <br />
            <br />
            Dolor porro omnis nobis eveniet fugit optio accusantium a sapiente unde ut dolores beatae blanditiis 
            iste tenetur consequatur? 
            <br />
            <br />
            Optio fugiat inventore tempora maiores soluta dolores vel ipsa suscipit.
          </p>
        </div>
        <div>
          <h4>Listening</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <img src={Listening} alt="" className="_speaking_img"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            impedit perspiciatis facere similique nisi ab.
            <br />
            <br />
            Dolor porro omnis nobis eveniet fugit optio accusantium a sapiente unde ut dolores beatae blanditiis 
            iste tenetur consequatur? 
            <br />
            <br />
            Optio fugiat inventore tempora maiores soluta dolores vel ipsa suscipit.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
