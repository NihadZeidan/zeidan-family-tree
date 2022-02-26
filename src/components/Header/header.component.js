import "./header.styles.css";

function Header({ setOpenMessageForm, openMessageForm }) {
  return (
    <header id="header">
      <div id="title">
        <h1>Zeidan's Family Tree - Beit jala</h1>
        <h1>شجرة عائلة زيدان - بيت جالا</h1>
      </div>
      <h4 id="supervision">اعداد : نهاد عماد فكتور جادالله عبدالله زيدان</h4>

      <button
        id="button"
        type="button"
        onClick={() => setOpenMessageForm(!openMessageForm)}
      >
        للتواصل وارسال المعلومات
      </button>
    </header>
  );
}
export default Header;
