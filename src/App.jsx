import './App.css'
import Capsule from './components/Capsule/Index'
import Craft from './components/Craft/Index'
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home/Index'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Para from './components/Paragraph/Index'
import Para2 from './components/Paragraph2/Index'
import Real from './components/Real/Index'
import Team from './components/Team/Index'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer/Index';
import LoginPopup from './components/LoginPopup/Index';
import SignupPopup from './components/SignupPopup/Index';
import Dashboard from './components/Dashboard/Index';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
    setIsSignupPopupOpen(false);
  };

  const handleClosePopups = () => {
    setIsLoginPopupOpen(false);
    setIsSignupPopupOpen(false);
  };

  const handleSwitchToSignup = () => {
    setIsLoginPopupOpen(false);
    setIsSignupPopupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupPopupOpen(false);
    setIsLoginPopupOpen(true);
  };

  const handleLogin = () => {
    // In a real app, you'd have actual authentication logic here
    setIsAuthenticated(true);
    handleClosePopups();
  };

  return (
    <Router>
      <AppContent
        isLoginPopupOpen={isLoginPopupOpen}
        isSignupPopupOpen={isSignupPopupOpen}
        isAuthenticated={isAuthenticated}
        handleLoginClick={handleLoginClick}
        handleClosePopups={handleClosePopups}
        handleSwitchToSignup={handleSwitchToSignup}
        handleSwitchToLogin={handleSwitchToLogin}
        handleLogin={handleLogin}
      />
    </Router>
  );
}

function AppContent({ 
  isLoginPopupOpen,
  isSignupPopupOpen,
  isAuthenticated,
  handleLoginClick,
  handleClosePopups,
  handleSwitchToSignup,
  handleSwitchToLogin,
  handleLogin
}) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const list = document.querySelectorAll('.section')
    list.forEach(function(e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function(){
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function() {
          document.body.setAttribute("theme", e.dataset.color);
        }
      })
    })
  })

  return (
    <div className='section main w-full '>
      <Routes>
        <Route path="/" element={
          <>
            <Home handleLoginClick={handleLoginClick} />
            <Craft />
            <Real />
            <Team  />
            <Para  />
            <Para2 />
            <Capsule />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {isLoginPopupOpen && <LoginPopup onClose={handleClosePopups} onSwitchToSignup={handleSwitchToSignup} onLogin={handleLogin} />}
      {isSignupPopupOpen && <SignupPopup onClose={handleClosePopups} onSwitchToLogin={handleSwitchToLogin} />}
    </div>
  );
}

export default App;
