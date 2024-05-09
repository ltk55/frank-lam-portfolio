export default function Contact() {
  const contactList = [
    {
      platform: "Email",
      value: "frankltk55@gmail.com",
    },
    { platform: "GitHub", value: "https://github.com/ltk55" },
  ];

  return (
    <section
      id="hero"
      className="text-slate-800 flex items-center justify-center h-screen flex-col"
    >
      <h1 className="font-bold text-6xl mb-12 text-center text-slate-300">
        Get in Touch
      </h1>

      <div className="flex gap-20">
        {/* Enhance styling */}
        {contactList.map((contact, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <h3 className="text-xl font-semibold">{contact.platform}</h3>
            <div className="text-sm text-slate-500">
              {contact.platform === "GitHub" ? (
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  {contact.value}
                </a>
              ) : (
                contact.value
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
