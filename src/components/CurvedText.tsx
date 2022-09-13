import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import CircleType from 'circletype';

export interface PropsType {
  className?: string;
  style?: CSSProperties;
  text: string;
  value: number;
};

export const CurvedText = (props: PropsType) => {
  const parent = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const width = useRef<number>(0);
  const height = useRef<number>(0);

  useEffect(() => {
    const virtual = document.createElement('div');
    virtual.innerText = props.text;
    virtual.style.position = 'absolute';
    virtual.style.left = '0';
    virtual.style.top = '0';
    virtual.style.opacity = '0';
    parent.current?.appendChild(virtual);
    
    width.current = virtual.getBoundingClientRect().width;
    height.current = virtual.getBoundingClientRect().height;

    virtual.remove();
  }, [
    parent,
    props.text,
  ]);

  useEffect(() => {
    const step = 180 / ((height.current / width.current) * 660);
    const radius = width.current / (Math.PI * props.value * step) * 180;
    const circle = new CircleType(target.current);
    circle.forceWidth(true);
    circle.radius(radius);

    return () => {
      circle.destroy();
    };
  }, [
    parent,
    target,
    width,
    height,
    props.value
  ]);

  return (
    <div
      ref={parent}
      className={props.className}
    >
      <div
        ref={target}
        style={props.style}
      >
        { props.text }
      </div>
    </div>
  );
};