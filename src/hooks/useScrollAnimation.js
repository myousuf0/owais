import { useEffect, useRef } from 'react';
import anime from 'animejs';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  
  const {
    animation = 'fadeInUp',
    threshold = 0.1,
    delay = 0,
    duration = 800,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '0';
          
          const animProps = {
            targets: element,
            opacity: [0, 1],
            duration,
            delay,
            easing: 'cubicBezier(0.5, 0, 0, 1)',
          };

          switch (animation) {
            case 'fadeInUp':
              animProps.translateY = [50, 0];
              break;
            case 'fadeInLeft':
              animProps.translateX = [-50, 0];
              break;
            case 'fadeInRight':
              animProps.translateX = [50, 0];
              break;
            case 'scaleIn':
              animProps.scale = [0.8, 1];
              break;
            default:
              animProps.translateY = [50, 0];
          }

          anime(animProps);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, threshold, delay, duration]);

  return ref;
};

export default useScrollAnimation;