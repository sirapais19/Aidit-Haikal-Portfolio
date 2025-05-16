
import { useEffect, useRef } from 'react';

const ScrollAnimationObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once the animation has played, we can stop observing this element
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimationObserver;
