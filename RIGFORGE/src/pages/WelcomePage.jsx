import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="page">
      <div className="left-section">
        <div className="hero-content">
          <h1>
             RIG<span className="logo-accent">F</span>ORGE </h1>
           <h2>UNLEASH YOUR INNER BUILDER WITH </h2> 
           
         
          <Link to="/signup" className="btn">SIGN UP</Link>
          <div className="login-link">
            Already registered? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
