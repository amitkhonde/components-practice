import React from 'react';

import _includes from 'lodash/includes';

import { FaBeer } from 'react-icons/fa';

import Icon from './components/Icon';

import { useTags, Tag, Tags } from './components/Tags';

function App() {
  const { addTag, removeTag, tags, selectedTagIds, selectTag, deselectTag } =
    useTags();

  function addNewtag() {
    addTag({ label: 'test tag', id: 'test' });
  }

  function deleteTag() {
    removeTag('test');
  }

  function handleTagClick(id) {
    return function returnedtoggleTag() {
      if (_includes(selectedTagIds, id)) {
        deselectTag(id);
        return;
      }

      selectTag(id);
    };
  }

  return (
    <div>
      <h1>Components Practice</h1>
      <Icon>
        <FaBeer />
      </Icon>
      <Icon disabled>
        <FaBeer />
      </Icon>
      <Tags selectedTagIds={selectedTagIds}>
        {tags.map((tag) => (
          <Tag onClick={handleTagClick(tag.id)} key={tag.id} tagId={tag.id}>
            {tag.label}
            <Icon>
              <FaBeer />
            </Icon>
          </Tag>
        ))}
      </Tags>
      <button type="button" onClick={addNewtag}>
        Add Tag
      </button>
      <button type="button" onClick={deleteTag}>
        Remove Tag
      </button>
    </div>
  );
}

export default App;
