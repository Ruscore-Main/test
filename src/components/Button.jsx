import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, outline }) => {
    return <button className={classNames('button', className, {'button--outline': outline})} onClick={onClick}>
      {children}
    </button>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  classNames: PropTypes.string,
  outline: PropTypes.bool,

}

export default Button;
