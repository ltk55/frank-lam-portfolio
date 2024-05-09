export default function Contact() {
  const contactList = [
    {
      platform: "Email",
      value: "mailto:frankltk55@gmail.com",
    },
    {
      platform: "LinkedIn",
      value: "https://www.linkedin.com/in/franklamltk55/", // Ensuring the URL is complete
    },
    {
      platform: "GitHub",
      value: "https://github.com/ltk55", // Ensuring the URL is complete
    },
  ];

  return (
    <section
      id="hero"
      className="text-slate-300 flex items-center justify-center h-screen flex-col px-5"
    >
      <div className="pb-10 mb-10 border-b border-slate-100">
        <h1 className="font-bold text-5xl text-center">Get in Touch</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {contactList.map((contact, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold">{contact.platform}</h3>
            <a
              href={contact.value}
              className="text-sm text-slate-500 hover:text-blue-500 transition duration-300"
              aria-label={`Contact via ${contact.platform}`}
              target={contact.platform !== "Email" ? "_blank" : undefined}
              rel={
                contact.platform !== "Email" ? "noopener noreferrer" : undefined
              }
            >
              {contact.platform === "Email"
                ? contact.value.substring(7) // Strip 'mailto:'
                : contact.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
