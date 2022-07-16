import _noop from 'lodash/noop';
import _get from 'lodash/get';
import _includes from 'lodash/includes';

// eslint-disable-next-line import/prefer-default-export
export function handleKeyPressOrDown(callback = _noop) {
  return function eventValidator(event) {
    const type = _get(event, 'type');
    const code = _get(event, 'charCode') || _get(event, 'keyCode');
    if (_includes(['keypress', 'keydown'], type) && _includes([13, 32], code)) {
      callback();
    }
  }
}
