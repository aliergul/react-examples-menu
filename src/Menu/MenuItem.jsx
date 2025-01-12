/* eslint-disable react/prop-types */
import { useContext } from "react";
import MenuContext from "./Context";

const MenuItem = ({ children, ...props }) => {
  const { setPosition } = useContext(MenuContext);

  const handleClick = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({ left, top, width, height });
  };
  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

export default MenuItem;
