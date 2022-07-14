import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _noop from 'lodash/noop';

import styles from './icon.module.scss';
import { handleKeyPressOrDown } from '../../utils/a11y';

export const SIZES = {
  SM: '0.8rem',
  MD: '1.2rem',
  LG: '1.6rem',
};

function Icon(props) {
  const { children, size, className, disabled } = props;

  if (_isEmpty(children)) {
    console.error('Empty children passed to Icon');
    return null;
  }

  const containerClassNames = cx({ [styles.disabled]: disabled }, className);
  const childrenAsArray = React.Children.toArray(children);
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      role="button"
      className={containerClassNames}
      tabIndex="0"
      onKeyDown={handleKeyPressOrDown(onClick)}
    >
      {_map(childrenAsArray, (child, index) => {
        const childProps = _get(child, 'props');
        return React.cloneElement(child, {
          key: index,
          size,
          ...childProps,
        });
      })}
    </div>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: '',
  size: SIZES.SM,
  disabled: false,
  onClick: _noop,
};

export default Icon;
