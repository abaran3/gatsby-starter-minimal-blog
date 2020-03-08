import React from 'react';

const imageStyle = (width, height) => {
  return {
    maxHeight: height,
  };
};

const CustomImage = ({ src, title, width, height }) => {
  return <img style={imageStyle(width, height)} src={src} alt={title} />;
};
export { CustomImage };
