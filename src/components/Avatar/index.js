import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _isNil from 'lodash/isNil';
import _values from 'lodash/values';

import { FiUser } from 'react-icons/fi';

import Icon from '../Icon';

import styles from './avatar.module.scss';

function Avatar({ className, size, children, shape, icon, customSize }) {
  const computedStylesForContainer = useMemo(() => {
    if (_isNil(customSize)) {
      return {};
    }

    return {
      width: `${customSize / 10}rem`,
      height: `${customSize / 10}rem`,
    };
  }, [customSize]);

  function getContent() {
    if (!_isNil(children)) {
      return children;
    }

    if (!_isNil(icon)) {
      return icon;
    }

    return (
      <Icon>
        <FiUser />
      </Icon>
    );
  }

  return (
    <div
      className={cx(styles[size], styles[shape], styles.container, className)}
      style={computedStylesForContainer}
    >
      <div className={styles.content}>{getContent()}</div>
    </div>
  );
}

Avatar.SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

Avatar.SHAPES = {
  ROUND: 'round',
  SQUARE: 'square',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(_values(Avatar.SIZES)),
  customSize: PropTypes.oneOfType([PropTypes.number, PropTypes.node]),
  shape: PropTypes.oneOf(_values(Avatar.SHAPES)),
  children: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size: Avatar.SIZES.SMALL,
  shape: Avatar.SHAPES.ROUND,
  children: null,
  icon: null,
  className: '',
  customSize: null,
};

export default Avatar;
