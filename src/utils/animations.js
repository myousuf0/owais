import anime from 'animejs';

export const fadeInUp = (element, delay = 0) => {
  return anime({
    targets: element,
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    delay,
    easing: 'cubicBezier(0.5, 0, 0, 1)',
  });
};

export const fadeInLeft = (element, delay = 0) => {
  return anime({
    targets: element,
    opacity: [0, 1],
    translateX: [-50, 0],
    duration: 800,
    delay,
    easing: 'cubicBezier(0.5, 0, 0, 1)',
  });
};

export const fadeInRight = (element, delay = 0) => {
  return anime({
    targets: element,
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 800,
    delay,
    easing: 'cubicBezier(0.5, 0, 0, 1)',
  });
};

export const scaleIn = (element, delay = 0) => {
  return anime({
    targets: element,
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 800,
    delay,
    easing: 'cubicBezier(0.5, 0, 0, 1)',
  });
};

export const staggerFadeInUp = (elements, staggerDelay = 100, baseDelay = 0) => {
  return anime({
    targets: elements,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 600,
    delay: anime.stagger(staggerDelay, { start: baseDelay }),
    easing: 'cubicBezier(0.5, 0, 0, 1)',
  });
};

export const morphingCircle = (element) => {
  return anime({
    targets: element,
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    borderRadius: ['50%', '30%', '50%'],
    duration: 8000,
    loop: true,
    easing: 'easeInOutQuad',
  });
};

export const typingEffect = (element, text, speed = 50) => {
  let index = 0;
  element.textContent = '';
  
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  
  type();
};

export const counterAnimation = (element, target, duration = 2000) => {
  return anime({
    targets: element,
    innerHTML: [0, target],
    duration,
    round: 1,
    easing: 'easeOutExpo',
  });
};

export const magneticEffect = (element, strength = 0.3) => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    anime({
      targets: element,
      translateX: x * strength,
      translateY: y * strength,
      duration: 300,
      easing: 'easeOutQuad',
    });
  });
  
  element.addEventListener('mouseleave', () => {
    anime({
      targets: element,
      translateX: 0,
      translateY: 0,
      duration: 300,
      easing: 'easeOutQuad',
    });
  });
};