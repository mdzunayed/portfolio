import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll do my best to get back to you!
      </p>
      <p>
        Email:{" "}
        <a href="mailto:md.zunayed02@gmail.com">md.zunayed02@gmail.com</a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/mdzunayed"
          target="_blank"
          rel="noopener noreferrer"
        >
          mdzunayed
        </a>
      </p>
    </section>
  );
};

export default Contact;
