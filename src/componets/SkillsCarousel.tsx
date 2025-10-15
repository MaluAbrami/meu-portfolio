import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CarouselWrap = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Track = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar { display: none; }
`;

const Item = styled.div`
  flex: 0 0 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.03);
  border-radius: 12px;
  scroll-snap-align: center;
  padding: 10px;
`;

const Img = styled.img`
  max-width: 80px;
  max-height: 80px;
  object-fit: contain;
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Btn = styled.button`
  pointer-events: all;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  cursor: pointer;
`;

const assets = [
  { src: '/src/assets/CSharpImage.svg', alt: 'C#' },
  { src: '/src/assets/dotnetImage.png', alt: '.NET' },
  { src: '/src/assets/javaImage.png', alt: 'Java' },
  { src: '/src/assets/react.svg', alt: 'React' },
  { src: '/src/assets/springBootImage.png', alt: 'Spring Boot' },
  { src: '/src/assets/DockerImage.svg', alt: 'Docker' },
  { src: '/src/assets/rabbitMqImage.png', alt: 'RabbitMQ' },
  { src: '/src/assets/Git_icon.svg.png', alt: 'Git' },
  { src: '/src/assets/gitHubImage.png', alt: 'GitHub' },
  { src: '/src/assets/VsCodeImage.png', alt: 'VS Code' },
  { src: '/src/assets/VsStudioImage.png', alt: 'VS Studio' },
  { src: '/src/assets/IntelliJ_IDEA_Icon.svg.png', alt: 'IntelliJ' },
  { src: '/src/assets/JetBrains_Rider_Icon.svg', alt: 'Rider' },
  { src: '/src/assets/awsImage.png', alt: 'AWS' }
];

const SkillsCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const play = () => {
      if (!track) return;
      const itemWidth = (track.querySelector('div') as HTMLElement)?.offsetWidth || 140;
      track.scrollBy({ left: itemWidth + 16, behavior: 'smooth' });

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    autoplayRef.current = window.setInterval(play, 2500);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  const prev = () => {
    const track = trackRef.current;
    if (!track) return;
    const itemWidth = (track.querySelector('div') as HTMLElement)?.offsetWidth || 140;
    track.scrollBy({ left: -(itemWidth + 16), behavior: 'smooth' });
  };

  const next = () => {
    const track = trackRef.current;
    if (!track) return;
    const itemWidth = (track.querySelector('div') as HTMLElement)?.offsetWidth || 140;
    track.scrollBy({ left: itemWidth + 16, behavior: 'smooth' });
  };

  return (
    <CarouselWrap aria-label="Skills carousel">
      <Track ref={trackRef}>
        {assets.map((a, i) => (
          <Item key={i}>
            <Img src={a.src} alt={a.alt} />
          </Item>
        ))}
      </Track>

      <Controls>
        <Btn onClick={prev} aria-label="Previous">‹</Btn>
        <Btn onClick={next} aria-label="Next">›</Btn>
      </Controls>
    </CarouselWrap>
  );
};

export default SkillsCarousel;
