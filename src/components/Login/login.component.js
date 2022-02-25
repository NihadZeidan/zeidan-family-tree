import "./login.styles.css";

export default function LoginPage({ setAuthorized }) {
  const hiddenPassword = process.env.REACT_APP_ZEIDAN_ID;
  
  const onsubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    if (password === hiddenPassword) {
      setAuthorized(true);
    } else {
      alert("كلمة السر غير صحيحة");
    }
  };

  return (
    <div className="login-component">
      <form onSubmit={onsubmit} className="login-form">
        <label htmlFor="password" className="label">
          الرجاء ادخال كلمة السر
        </label>
        <input name="password" type="password" required className="input" />
        <button className="button" type="submit">
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}
