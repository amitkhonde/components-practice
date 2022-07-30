import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _noop from 'lodash/noop';

import styles from './button.module.scss';

function Button(props) {
  const { children, className = styles.primaryButton, disabledClassName = styles.disabledButton, isDisabled, onClick, } = props;
  return (
    <button type='button' className={cx(className, { [disabledClassName]: isDisabled})} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  className: undefined,
  disabledClassName: undefined,
  isDisabled: false,
  onClick: _noop,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;