import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="p-8">
      <h2 className="text-3xl">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="p-2 border-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="p-2 border-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="p-2 border-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="p-2 border-2 w-full"
            required
          ></textarea>
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 w-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
