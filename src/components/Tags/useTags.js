import { useReducer } from 'react';

import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _castArray from 'lodash/castArray';

import { ACTION_TYPES } from './constants';

function reducer(state, payload) {
  const { action, value } = payload;
  switch (action) {
    case ACTION_TYPES.ADD: {
      const updatedTags = [...state.tags, ...value];
      return { ...state, tags: updatedTags };
    }

    case ACTION_TYPES.REMOVE: {
      const updatedTags = _filter(
        state.tags,
        ({ id }) => !_includes(value, id)
      );
      const updatedSelectedTags = _filter(
        state.selected,
        (id) => !_includes(value, id)
      );
      return { tags: updatedTags, selected: updatedSelectedTags };
    }

    case ACTION_TYPES.SELECT: {
      const updatedSelectedTags = [...state.selected, ...value];
      return { ...state, selected: updatedSelectedTags };
    }

    case ACTION_TYPES.DESELECT: {
      const updatedSelectedTags = _filter(
        state.selected,
        (id) => !_includes(value, id)
      );
      return { ...state, selected: updatedSelectedTags };
    }

    default: {
      console.error(`${action} action not supported.`);
      return state;
    }
  }
}

function useTags() {
  const [state, dispatch] = useReducer(reducer, { tags: [], selected: [] });

  function addTag(tag) {
    dispatch({ action: ACTION_TYPES.ADD, value: [tag] });
  }

  function removeTag(tagId) {
    dispatch({ action: ACTION_TYPES.REMOVE, value: [tagId] });
  }

  function selectTag(tagId) {
    dispatch({ action: ACTION_TYPES.SELECT, value: [tagId] });
  }

  function selectTagBulk(tagIds) {
    dispatch({ action: ACTION_TYPES.SELECT, value: _castArray(tagIds) });
  }

  function deselectTag(tagId) {
    dispatch({ action: ACTION_TYPES.DESELECT, value: [tagId] });
  }

  function deselectTagBulk(tagIds) {
    dispatch({ action: ACTION_TYPES.DESELECT, value: _castArray(tagIds) });
  }

  return {
    addTag,
    removeTag,
    selectTag,
    selectTagBulk,
    deselectTag,
    deselectTagBulk,
    tags: state.tags,
    selectedTagIds: state.selected,
  };
}

export default useTags;
