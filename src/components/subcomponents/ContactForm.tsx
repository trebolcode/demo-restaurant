import React, { useState } from "react";

const ContactForm = () => {
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [optionField, setOptionField] = useState("1");
  const [messageField, setMessageField] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const allData = {
      name: nameField,
      email: emailField,
      option: optionField,
      message: messageField,
    };

    console.log(allData);
  };

  return (
    <section className="w-10/12 my-8" onSubmit={handleSubmit}>
      <h3 className="mb-8 font-Rubik text-bold text-3xl text-center">
        Contact
      </h3>
      <p className="mb-8 font-Rubik text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
      <form className="w-ful flex flex-col justify-center items-center">
        <input
          type="text"
          className="w-full px-2 py-4 mb-8 border border-gray-300 outline-none"
          placeholder="Your Name"
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
        <input
          type="email"
          className="w-full px-2 py-4 mb-8 border border-gray-300 outline-none"
          placeholder="Your Email"
          value={emailField}
          onChange={(e) => setEmailField(e.target.value)}
        />
        <select
          value={optionField}
          onChange={(e) => setOptionField(e.target.value)}
          className="w-full px-2 py-4 mb-8 border border-gray-300 outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          placeholder="your message"
          className="w-full h-32 p-2 mb-8 border border-gray-300 outline-none"
          value={messageField}
          onChange={(e) => setMessageField(e.target.value)}
        />
        <button className="px-6 py-4 mb-8 rounded-md border-2 text-colReser/70 border-colReser/70 uppercase font-bold hover:bg-gray-600 hover:text-white hover:border-transparent transition-all duration-200">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
