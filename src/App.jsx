import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";

function App() {
  return (
    <>
      <Menu variant="horizontal">
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem className="active">Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
      </Menu>

      <Menu variant="vertical">
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem className="active">Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
      </Menu>
    </>
  );
}

export default App;
