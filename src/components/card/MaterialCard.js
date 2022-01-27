import React from 'react';
import ReactMarkdown from 'react-markdown';
import clsxm from 'src/lib/clsxm';
const MaterialCard = ({ category }) => {
  return (
    <a
      key={category.name}
      href={category.href}
      className={clsxm('block group', category.isDisabled && 'opacity-50')}
    >
      <div aria-hidden='true' className='rounded-lg group-hover:opacity-75'>
        <img
          src={category.imageSrc}
          alt={category.imageAlt}
          className='h-full object-center object-cover w-full'
        />
      </div>
      <h3 className='font-semibold mt-4 text-center text-gray-900 text-xl'>
        {category.name}
      </h3>
      <ReactMarkdown className='mt-2 mx-auto px-0 text-base text-center text-gray-500 w-auto md:w-80'>
        {category.description}
      </ReactMarkdown>
      <div className='mt-6 text-center'>
        <a className='border border-green-500 mx-auto px-6 py-2 rounded-full text-green-500'>
          {category.isDisabled ? 'Coming Soon' : 'Customize'}
        </a>
      </div>
    </a>
  );
};

export default MaterialCard;
