import React from 'react';
import { useEffect, useState } from 'react';
import { LED } from './LED';

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
  children: React.ReactNode;
}

export function LEDBullet({ title, color, children }: ILEDBulletProps) {
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
      <LED
        color={color}
        brightness={brightness}
        style={{ marginRight: '6px', marginTop: '-4px', minWidth: '32px', alignSelf: 'baseline' }}
      />
      <span>
        <h3 style={{ display: 'inline' }}>{title}.</h3> <span>{children}</span>
      </span>
    </p>
  );
}
