import React from "react";

const Contact = () => {
    return (

        <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
          <p className="mb-6 text-gray-300">Have a project or job in mind? Let's talk.</p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600">
            Email Me
          </a>
        </div>
      </section>

    );
};
export default Contact;