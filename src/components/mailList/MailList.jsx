import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">✨ Save Time, Save Money!</h1>
      <span className="mailDesc">
        Join our mailing list and get exclusive deals delivered straight to your
        inbox.
      </span>

      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your email..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
