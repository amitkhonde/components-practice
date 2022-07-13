import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import _get from "lodash/get";

import styles from "./icon.module.scss";

export const SIZES = {
  SM: "0.8rem",
  MD: "1.2rem",
  LG: "1.6rem",
};

function Icon(props) {
  const { children, size, className, disabled } = props;

  if (_isEmpty(children)) {
    console.error("Empty children passed to Icon");
    return null;
  }

  const containerClassNames = cx({ [styles.disabled]: disabled }, className);
  return (
    <div {...props} className={containerClassNames}>
      {_map([children], (child, index) => {
        const childProps = _get(child, 'props');
        return React.cloneElement(child, {
          key: index,
          size,
          ...childProps
        });
      })}
    </div>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  className: "",
  size: SIZES.SM,
  disabled: false,
};

export default Icon;
