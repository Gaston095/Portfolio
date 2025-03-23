import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Verificar si la ruta es '/project/id'
    if (location.pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);  // Desplazar hacia arriba
    }
  }, [location]);

  return null;
}

export default ScrollToTop;

