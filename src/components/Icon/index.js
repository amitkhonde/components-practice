import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _map from 'lodash/map';
import _get from 'lodash/get';

import styles from './icon.module.scss';

export const SIZES = {
  SM: '0.8rem',
  MD: '1.2rem',
  LG: '1.6rem',
};

function Icon(props) {
  const { children, size, className, disabled } = props;

  const containerClassNames = cx({ [styles.disabled]: disabled }, className);
  const childrenAsArray = React.Children.toArray(children);
  return (
    <div className={containerClassNames}>
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
};

Icon.defaultProps = {
  className: '',
  size: SIZES.SM,
  disabled: false,  
};

export default Icon;
