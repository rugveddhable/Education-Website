import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function ScrollToTop() {
  const { pathname } = useLocation();
 
  useLayoutEffect(() => {
    // Immediately scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Also reset any scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);
 
  return null;
}