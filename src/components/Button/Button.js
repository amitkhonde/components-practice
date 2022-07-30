import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _noop from 'lodash/noop';

import styles from './button.module.scss';

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
}

function Button(props) {
  const { children, className, disabledClassName, isDisabled, onClick, variant } = props;
  return (
    <button type='button' className={cx(styles[variant], className, { 
        [styles.disabledButton]: isDisabled,
        [disabledClassName]: isDisabled
      })} onClick={onClick}>
      {children}
    </button>
  );
}

Button.VARIANTS = VARIANTS;

Button.defaultProps = {
  children: null,
  variant: VARIANTS.PRIMARY,
  className: '',
  disabledClassName: '',
  isDisabled: false,
  onClick: _noop,
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;