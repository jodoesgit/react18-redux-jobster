import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      {/* NAV */}
      <nav>
        <img src={logo} alt="jobster log" className="logo" />
      </nav>
      <div className="container page">
        {/* HERO */}
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
    </main>
  );
};

export default Landing;
