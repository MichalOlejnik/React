import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

const SIZES = ['btn--login']
//children - returns an HTMLCollection object

export const Button = ({
    children,
    type,
    onClick,
    buttonSize
}) => {
   
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
          <button
            className={`btn ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      );
    };