import React from "react";
import { useNavigate } from "react-router-dom";

import "./bFooter.css";
import "../Hero/Hero.css";

// import Img1 from "../../Assets/pexels-marcela-oliveira-3207694.jpg";
// import Img2 from "../../Assets/pexels-michelle-leman-6774998.jpg";
// import Img3 from "../../Assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";


const Index = () => {
  const navigate = useNavigate();

  return (
    <section className='bFooter'>
      <h3 className='why'>About Wishties</h3>
      <p className='whyText'>
        Wishties is a platform that allows you to create a wishlist and share it
        with your fans. Your fans can then purchase items from your wishlist and
        you get the cash to purchase the item.
      </p>
      <div className='emailDivDown'>
        <button >Get Started For Free</button>
      </div>
      <article className='imagesArticle'>
        <div className='cusImgDiv'>
          {/* <img src={Img1} alt='' className='cusImg' />
          <img src={Img2} alt='' className='cusImg' />
          <img src={Img3} alt='' className='cusImg' /> */}
        </div>
        <div className='arrowAndText'>
          <p>
            Join over <span>+1K</span> creators who are Wishties daily.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Index;
