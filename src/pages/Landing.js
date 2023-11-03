import main from '../assets/images/main.svg';
import LandingPage from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <LandingPage>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis
            officiis amet animi aliquam quia neque hic obcaecati impedit
            ducimus.
          </p>
          <button class="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </LandingPage>
  );
};

export default Landing;
