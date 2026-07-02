'use client';

import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: 'bottom' | 'left' | 'right' | 'none';
  threshold?: number;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  from = 'bottom',
  threshold = 0.12,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const hidden: Record<typeof from, string> = {
    bottom: 'opacity-0 translate-y-7',
    left:   'opacity-0 -translate-x-7',
    right:  'opacity-0 translate-x-7',
    none:   'opacity-0',
  };

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden[from]} ${className}`}
    >
      {children}
    </Tag>
  );
}
