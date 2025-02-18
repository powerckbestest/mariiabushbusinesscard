import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-1 px-8 flex flex-col items-center">
      <div className="bg-black h-[1px] w-[95%] mx-auto mb-6 mt-4"></div>
      <div className="flex justify-start w-full">
        <h2 className="text-xl mb-6 mr-8 ml-10">
          <strong>[CONTACTS]</strong>
        </h2>
        <div className="ml-8">
          <h2 className="text-6xl font-bold mb-8">
            EMAIL
            <br />
            TELEGRAM
            <br />
            LINKEDIN
          </h2>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <span>MARIABUSHMAKINA@GMAIL.COM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
