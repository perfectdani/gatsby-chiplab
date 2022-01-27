import React from 'react';

import MaterialCarousel from '../components/carousel/MaterialCarousel';
import StyleCarousel from '../components/carousel/StyleCarousel';
import UseCarousel from '../components/carousel/UseCarousel';

export default function CategoryPreview({ category, type }) {
  return (
    <div className='bg-white'>
      <div className='max-w-xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
        <h2 className='font-extrabold text-4xl text-center text-gray-900 tracking-tight'>
          {category.title}
        </h2>
        <p className='mt-4 text-center text-gray-500 text-xl'>
          {category.description}
        </p>

        {type === 'material' && <MaterialCarousel category={category} />}
        {type === 'style' && <StyleCarousel category={category} />}
        {type === 'use' && <UseCarousel category={category} />}
      </div>
    </div>
  );
}
