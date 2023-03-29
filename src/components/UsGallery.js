import React, { memo } from 'react';

import Masonry from './Masonry';

import { useWindowSize } from './useWindowSize';

const US_PHOTOS_PATH = 'https://dandt.s3.amazonaws.com/images';

function getShuffledPhotoPaths(
  start,
  end,
  path = US_PHOTOS_PATH,
  extension = 'png'
) {
  const array = Array.from(
    { length: end - start + 1 },
    (_, i) => `${path}/${i + start}.${extension}`
  );

  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffledPhotoPaths = getShuffledPhotoPaths(1, 32);

const ImageElement = memo(({ value }) => (
  <div style={{ borderRadius: '10px', margin: '5px' }}>
    <img src={value} style={{ width: '100%', borderRadius: '5px' }} alt='' />
  </div>
));

export const UsGallery = () => {
  const windowSize = useWindowSize();

  const columnCount = () => {
    if (windowSize.width > 1500) {
      return 10;
    } else if (windowSize.width > 1000) {
      return 7;
    } else if (windowSize.width > 700) {
      return 5;
    } else {
      return 3;
    }
  };

  return (
    <div className='us-container'>
      <Masonry
        dataArray={shuffledPhotoPaths}
        columnCount={columnCount()}
        ChildsElement={ImageElement}
      />
    </div>
  );
};
