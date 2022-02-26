import emailjs from "@emailjs/browser";
import "./messageForm.styles.css";

function MessageForm({ setOpenMessageForm }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dvgjho2",
        "template_mreubbm",
        e.target,
        "user_3VrimcnFm8a1Gp76Z6JR6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("لم يتم ارسال الرسالة ... حاول مرة اخرى في وقت لاحق");
        }
      );

    e.target.reset();
    alert("تم ارسال الرسالة بنجاح");
  };

  return (
    <div>
      <form className="message-form" onSubmit={sendEmail}>
        <label className="label" htmlFor="name">
          الأسم
        </label>
        <input
          className="input-from-message"
          required
          type="text"
          name="name"
        />
        <br />
        <label className="label" htmlFor="phoneNumber">
          رقم الهاتف (اختياري)
        </label>
        <input
          type="number"
          className="input-from-message"
          name="phoneNumber"
        />
        <br />

        <label className="label" htmlFor="email">
          البريد الألكتروني (اختياري)
        </label>
        <input type="email" className="input-from-message" name="email" />
        <br />
        <label className="label" htmlFor="name">
          الرسالة
        </label>
        <textarea
          rows={10}
          className="area-from-message"
          type="text"
          required
          name="message"
          placeholder="اذكر رسالتك هنا"
        />

        <br />

        <div id="buttons">
          <button
            className="closeButton"
            type="button"
            onClick={() => setOpenMessageForm(false)}
          >
            أغلاق
          </button>
          <button className="button" type="submit">
            أرسال
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
