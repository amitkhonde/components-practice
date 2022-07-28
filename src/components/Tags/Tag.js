import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _noop from 'lodash/noop';

import styles from './tags.module.scss';

function Tag({ children, selected, className, onClick }) {
  return (
    <button
      type="button"
      className={cx(
        'flex align-items-center padding8',
        styles.tag,
        { [styles.selected]: selected },
        className
      )}
      onClick={onClick}
      tabIndex="0"
    >
      {children}
    </button>
  );
}

Tag.propTypes = {
  selected: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Tag.defaultProps = {
  selected: false,
  className: '',
  onClick: _noop,
};

export default Tag;
