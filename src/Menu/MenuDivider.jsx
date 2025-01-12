import { useContext } from "react";
import MenuContext from "./Context";

const MenuDivider = () => {
  const { position } = useContext(MenuContext);
  return (
    <div
      className="divider"
      style={{
        "--left": `${position.left}px`,
        "--top": `${position.top}px`,
        "--width": `${position.width}px`,
        "--height": `${position.height}px`,
      }}
    />
  );
};

export default MenuDivider;
