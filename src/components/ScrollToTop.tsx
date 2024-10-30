import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]); // Run every time the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;