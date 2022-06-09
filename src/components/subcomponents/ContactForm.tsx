import React, { useRef } from "react";

const ContactForm = () => {
  const form: any = useRef(null);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
		const formData = new FormData(form.current);
		const allData = {
			name: formData.get('name'),
			email: formData.get('email'),
			option: formData.get('option'),
			message: formData.get('message'),
		};
		console.log(allData);;
	};

  return (
    <section className="w-10/12 py-16">
      <h3 className="mb-8 font-Rubik text-bold text-3xl text-center">
        Contact
      </h3>
      <p className="mb-8 font-Rubik text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
      <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <input
          name="name"
          type="text"
          className="w-full px-2 py-4 mb-8 border border-gray-300 outline-none"
          placeholder="Your Name"
          required       
        />
        <input
          name="email"
          type="email"
          className="w-full px-2 py-4 mb-8 border border-gray-300 outline-none"
          placeholder="Your Email"
          required
        />
        <select
          name="option"
          defaultValue={0}
          className="w-full px-2 py-4 mb-8 border border-gray-300 outline-none bg-selectBg bg-no-repeat bg-[length:8px_10px] bg-[right_.75rem_center] appearance-none"
          required
        >
          <option value="0" disabled>Please Select Person*</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          name="message"
          placeholder="your message"
          className="w-full h-32 p-2 mb-8 border border-gray-300 outline-none"
          required
        />
        <button className="px-6 py-4 mb-8 rounded-md border-2 text-colReser/70 border-colReser/70 uppercase font-bold hover:bg-gray-600 hover:text-white hover:border-transparent transition-all duration-200">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
