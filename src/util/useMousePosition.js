import { useState, useEffect } from 'react';

function useStaticMousePosition() {
  const [staticMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    animateParticles();

    return () => {
      window.removeEventListener('mousemove', createParticle);
    };
  }, []);

  return staticMousePosition;
}
  export default useStaticMousePosition;
