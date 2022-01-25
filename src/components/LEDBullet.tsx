import React from 'react';
import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wokwi-led': any;
    }
  }
}

interface ILEDBulletProps {
  title: string;
  color: string;
  lightColor?: string;
  children: React.ReactNode;
}

export function LEDBullet({ title, color, lightColor, children }: ILEDBulletProps) {
  const [brightness, setBrightness] = useState(0);
  const [targetBrightness, setTargetBrightness] = useState(0);

  useEffect(() => {
    if (brightness == targetBrightness) {
      return;
    }

    const timer = setTimeout(() => {
      if (targetBrightness > brightness) {
        setBrightness(Math.min(brightness + 0.05, targetBrightness));
      } else {
        setBrightness(Math.max(brightness - 0.05, targetBrightness));
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [brightness, targetBrightness]);

  const mouseOver = () => {
    setTargetBrightness(1);
  };
  const mouseOut = () => {
    setTargetBrightness(0);
  };

  return (
    <p style={{ display: 'flex' }} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <wokwi-led
        color={color}
        lightColor={lightColor}
        value={true}
        brightness={brightness}
        style={{ zoom: 0.8, marginRight: '6px', marginTop: '-6px' }}
      />
      <span>
        <h3 style={{ display: 'inline' }}>{title}.</h3> <span>{children}</span>
      </span>
    </p>
  );
}
