/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import MenuContext from "./Context";
import MenuDivider from "./MenuDivider";

const Menu = ({ children, variant = "horizontal" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const activeElement = ref.current.querySelector(".active");
    if (activeElement) {
      const { top, width, height } = activeElement.getBoundingClientRect();
      const left = activeElement.offsetLeft;
      setPosition({ left, top, width, height });
    }
  }, []);

  return (
    <MenuContext.Provider value={{ position, setPosition }}>
      <nav className={variant} ref={ref}>
        {children}
        {Object.values(position).length > 0 && <MenuDivider />}
      </nav>
    </MenuContext.Provider>
  );
};

export default Menu;
