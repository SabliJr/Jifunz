import "./Hero.css";

import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <section className='hero'>
      <h2>
        Immerse Yourself in A Language and Level Up Your Skills, speaking.
      </h2>
      <p>
      Everything You Need To <span>master</span> A <span>Language</span> In One Place.
      </p>
      <div className='emailDiv'>
        <input type="email" placeholder="Email" />
        <button>Join waitlist</button>
      </div>
    </section>
  );
};

export default Index;
