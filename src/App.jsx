import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";

function App() {
  return (
    <>
      <Menu variant="horizontal" current={0}>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
      </Menu>

      <Menu variant="horizontal-filled" current={1}>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
      </Menu>

      <Menu variant="vertical" current={2}>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
      </Menu>
    </>
  );
}

export default App;
