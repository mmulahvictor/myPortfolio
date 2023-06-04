import React from 'react'
import Slider from './Slider';

function SliderArray() {
    const slides = [
  {
    image: 'https://dummyimage.com/600x400/000/fff',
    title: 'Slide 1',
    description: 'Description for Slide 1',
  },
  {
    image: 'https://dummyimage.com/600x400/000/fff',
    title: 'Slide 2',
    description: 'Description for Slide 2',
  },
  {
    image: 'https://dummyimage.com/600x400/000/fff',
    title: 'Slide 3',
    description: 'Description for Slide 3',
  }
    ];
    <Slider slides={slides} />
  return (
          <Slider slides={slides} />
  )
}

export default SliderArray