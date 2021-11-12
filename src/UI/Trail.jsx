import { useTrail, a } from '@react-spring/web';
import React from 'react'

const Trail = ({ children, name, container }) => {
  const arr = children.split(' ')
  const to = (i) => ({
    x: 0,
    delay: i * 20,
    opacity: 1,
  });
  const from = (_i) => ({
    x: 20, opacity: 0, 
  });

  const [trail, api] = useTrail(arr.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  return (
    <div className={container}>
      {trail.map((style, i) => (
        <a.div key={i} style={style}>
          <a.div className={name}>{arr[i]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail