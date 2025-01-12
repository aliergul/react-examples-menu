import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";

function App() {
  return (
    <>
      <Menu variant="horizontal" current={0}>
        <MenuItem>Anasayfa</MenuItem>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
        <MenuItem>Kaynaklar</MenuItem>
      </Menu>

      <Menu variant="horizontal-filled" current={1}>
        <MenuItem>Anasayfa</MenuItem>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
        <MenuItem>Kaynaklar</MenuItem>
      </Menu>

      <Menu variant="vertical" current={2}>
        <MenuItem>Anasayfa</MenuItem>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
        <MenuItem>Kaynaklar</MenuItem>
      </Menu>
    </>
  );
}

export default App;
