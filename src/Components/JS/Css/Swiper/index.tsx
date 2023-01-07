import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './index.less';

const handleInitPage = (slider: HTMLDivElement) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  slider.addEventListener('mousedown', (e: MouseEvent) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
};

const Swiper = () => {
  const container = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    handleInitPage(container.current);
  }, []);

  const childrenRef = useCallback((node: HTMLDivElement) => {
    if (node != null) {
      const OPTIONS = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
      };
      const observer = new IntersectionObserver((entries, observer) => {
        console.log(entries);
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(node);
          }
        });
      }, OPTIONS);
      observer.observe(node);
    }
  }, []);

  return (
    <Fragment>
      <h1>current:</h1>
      <div ref={container} className={styles.container}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        {Array.from({ length: 3 })
          .map((_, i) => i)
          .map((item, i) => (
            <div
              data-key={item}
              key={item}
              className={styles.item}
              ref={childrenRef}
            >
              {item}
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Swiper;
