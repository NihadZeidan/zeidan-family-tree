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
        }
      );

    e.target.reset();
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
          رقم الهاتف (إن وجد)
        </label>
        <input type="number" className="input-from-message" name="phoneNumber" />
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
          <button className="button" type="submit">
            أرسال
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setOpenMessageForm(false)}
          >
            أغلاق
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
