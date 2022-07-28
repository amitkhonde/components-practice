import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _get from 'lodash/get';
import _map from 'lodash/map';
import _includes from 'lodash/includes';

import useTags from './useTags';

import { ACTION_TYPES } from './constants';

import Tag from './Tag';

function Tags({ selectedTagIds, children, className }) {
  const childrenAsArray = React.Children.toArray(children);

  return (
    <div className={cx('flex align-items-center', className)}>
      {_map(childrenAsArray, (child) => {
        const childProps = _get(child, 'props');
        const tagId = _get(childProps, 'tagId');
        return React.cloneElement(child, {
          ...childProps,
          selected: _includes(selectedTagIds, tagId),
        });
      })}
    </div>
  );
}

Tags.propTypes = {
  children: PropTypes.node.isRequired,
  selectedTagIds: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

Tags.defaultProps = {
  selectedTagIds: [],
  className: '',
};


export { Tag, ACTION_TYPES, useTags, Tags };
