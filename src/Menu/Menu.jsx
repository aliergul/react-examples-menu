/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import MenuContext from "./Context";
import MenuDivider from "./MenuDivider";

const Menu = ({ children, variant = "horizontal", current = 0 }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(current);
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    [...ref.current.children].forEach((child, index) => {
      child.classList.remove("active");
      if (index === active) {
        child.classList.add("active");
      }
    });
  }, [active]);

  useEffect(() => {
    const activeElement = ref.current.querySelector(".active");
    if (activeElement) {
      const { width, height } = activeElement.getBoundingClientRect();
      const left = activeElement.offsetLeft;
      const top = activeElement.offsetTop;
      setPosition({ left, top, width, height });
    }
  }, []);

  return (
    <MenuContext.Provider value={{ position, setPosition, active, setActive }}>
      <nav className={variant} ref={ref}>
        {children}
        {Object.values(position).length > 0 && <MenuDivider />}
      </nav>
    </MenuContext.Provider>
  );
};

export default Menu;
