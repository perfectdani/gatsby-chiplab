import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '/src/lib/clsxm';

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    disabled,
    isLoading = false,
    variant = 'primary',
    isDarkBg = false,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      className={clsxm(
        'font-semibold items-center px-4 py-2 rounded',
        'focus:outline-none focus-visible:ring focus-visible:ring-green-500',
        'shadow-sm',
        'duration-75 transition-colors',
        //#region  //*=========== Variants ===========
        [
          variant === 'primary' && [
            'bg-green-600 text-gray-800',
            'border-none',
            'hover:bg-green-800 hover:text-white',
            'active:bg-green-500',
            'disabled:bg-green-400 disabled:hover:bg-green-400',
          ],
          variant === 'outline' && [
            'text-gray-800 font-bold',
            'border border-green-500',
            'rounded-full',
            'hover:bg-green-600 active:bg-green-500 disabled:bg-green-500 hover:text-white',
            isDarkBg &&
              'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
          ],
          variant === 'ghost' && [
            'text-green-500 font-bold',
            'shadow-none rounded-full',
            'hover:bg-green-50 active:bg-green-100 disabled:bg-green-100',
            isDarkBg &&
              'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
          ],
          variant === 'light' && [
            'bg-white text-dark ',
            'border border-gray-300',
            'hover:text-dark hover:bg-gray-100',
            'active:bg-white/80 disabled:bg-gray-200',
          ],
          variant === 'dark' && [
            'bg-gray-900 text-white',
            'border border-gray-600',
            'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
          ],
        ],
        //#endregion  //*======== Variants ===========
        'disabled:cursor-not-allowed',
        isLoading &&
          'relative text-transparent hover:text-transparent disabled:cursor-wait transition-none',
        className
      )}
      {...rest}
    >
      {isLoading && (
        <div
          className={clsxm(
            '-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2',
            {
              'text-white': ['green', 'dark'].includes(variant),
              'text-black': ['light'].includes(variant),
              'text-green-500': ['outline', 'ghost'].includes(variant),
            }
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
});

export default Button;
