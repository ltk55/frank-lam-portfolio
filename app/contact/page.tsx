import IconEmail from "@/components/Icons/IconEmail";
import IconGitHub from "@/components/Icons/IconGitHub";
import IconLinkedIn from "@/components/Icons/IconLinkedIn";

export default function Contact() {
  const contactList = [
    {
      platform: "Email",
      value: "mailto:frankltk55@gmail.com",
      icon: IconEmail,
      color: "#cbd5e1",
    },
    {
      platform: "GitHub",
      value: "https://github.com/ltk55",
      icon: IconGitHub,
    },
    {
      platform: "LinkedIn",
      value: "https://www.linkedin.com/in/franklamltk55/",
      icon: IconLinkedIn,
    },
  ];

  return (
    <section
      id="contact"
      className="text-slate-300 px-10 md:px-28 py-28 flex flex-col items-center md:items-start"
    >
      <div className="pb-10 mb-10 border-b border-slate-100 w-full md:text-left text-center">
        <h1 className="font-bold text-5xl">Get in Touch</h1>
      </div>

      <p className="mb-10 text-lg font-light text-center md:text-left">
        I’d love to hear from you 👋 Whether you have a question, want to
        discuss a project, job opportunity, or just want to connect, feel free
        to reach out through any of the platforms below.
      </p>

      <div className="flex gap-6 justify-center md:justify-start">
        {contactList.map(({ platform, value, icon: IconComponent, color }) => (
          <IconComponent
            key={platform}
            href={value}
            className="flex-col hover:brightness-125 transition duration-300"
            color={color}
          >
            <div className="text-sm font-semibold font-mono">{platform}</div>
          </IconComponent>
        ))}
      </div>
    </section>
  );
}
