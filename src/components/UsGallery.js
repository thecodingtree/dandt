import React, { memo } from 'react';

import Masonry from './Masonry';

import { useWindowSize } from './useWindowSize';

const photos = [
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/1.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/2.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/3.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/4.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/5.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/6.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/7.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/9.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/10.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/11.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/12.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/13.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/13.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/14.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/15.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/16.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/17.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/18.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/19.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/20.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/21.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/22.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/23.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/24.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/25.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/26.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/27.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/28.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/29.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/30.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/31.png',
  'https://s3.amazonaws.com/mortimerlovesmitchell.com/images/32.png',
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
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

export const UsGallery = () => {
  const windowSize = useWindowSize();

  //const columnCount = windowSize.width > 1000 ? 10 : 5;

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

  const shuffledPhotos = shuffle(photos);

  const ImageElement = memo(({ value }) => (
    <div style={{ borderRadius: '10px', margin: '5px' }}>
      <img src={value} style={{ width: '100%', borderRadius: '5px' }} />
    </div>
  ));

  return (
    <div className='us-container'>
      <Masonry
        dataArray={shuffledPhotos}
        columnCount={columnCount()}
        ChildsElement={ImageElement}
      />
    </div>
  );
};
