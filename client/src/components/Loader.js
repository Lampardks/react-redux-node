import React from 'react';

export const Loader = () => (
  <div className="loader">
    <div className="loader__info">Идет загрузка...</div>
    <div>
      {Array.apply(null, Array(6)).map((span, i) => (
        <span key={`${i}`} />
      ))}
    </div>
  </div>
);
