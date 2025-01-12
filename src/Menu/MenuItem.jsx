/* eslint-disable react/prop-types */
import { useContext } from "react";
import MenuContext from "./Context";

const MenuItem = ({ children, ...props }) => {
  const { setPosition, setActive } = useContext(MenuContext);

  const handleClick = (e) => {
    setActive([...e.target.parentElement.children].indexOf(e.target));
    const { width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    const top = e.target.offsetTop;
    setPosition({ left, top, width, height });
  };
  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

export default MenuItem;
