import React from "react";
import "./promo.css";

import PromoImg from "../../Assets/assets.newatlas.jpeg";

import OpenAI from "../../Assets/openai-1.webp";
import Youtube from "../../Assets/Youtube.png";
import Gemini from "../../Assets/Gemini-Logo.png";
import ElevenLabs from "../../Assets/Eleven_Labs.png";
import MetaAI from "../../Assets/Meta-Logo-1200x675.png";
import MobileChat from "../../Assets/EOL-website-skills-1040x1072-31-1568x1616.jpg"

const Index = () => {
  return (
    <main className='promo'>
      <div className="_promo_imgs">
        <img src={MobileChat} alt="promImg2" className="promImg"/>
        {/* <img src={PromoImg} alt='promImg' className='promImg2' /> */}
      </div>
      <div className='cumLogos'>
        <h5>
          Bust intergrted with to give you the best experience.
        </h5>
        <div>
          <img src={OpenAI} alt='' />
          <img src={Youtube} alt='' />
          <img src={Gemini} alt='' />
          <img src={ElevenLabs} alt='' />
          <img src={MetaAI} alt='' />
        </div>
      </div>
    </main>
  );
};

export default Index;
