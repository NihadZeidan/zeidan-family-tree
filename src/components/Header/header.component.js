import "./header.styles.css";

function Header() {
  return (
    <header id="header">
      <div id="title">
        <h1>Zeidan's Family Tree - Beit jala</h1>
        <h1>شجرة عائلة زيدان - بيت جالا</h1>
      </div>
      <h4 id="supervision">اعداد : نهاد عماد فكتور جادالله عبدالله زيدان</h4>

      <a
        id="button"
        type="button"
        href="https://forms.gle/77Bm6oh27tVed2K86"
        target="_blank"
        rel="noreferrer"
      >
        للتواصل وارسال المعلومات
      </a>
    </header>
  );
}
export default Header;
