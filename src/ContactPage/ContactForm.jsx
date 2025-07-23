import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const initialState = {
  Name: "",
  Email: "",
  Phone: "",
  Message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.Name.trim()) newErrors.Name = "Name is required";
    if (!form.Email.trim()) newErrors.Email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.Email))
      newErrors.Email = "Invalid email address";
    if (!form.Phone.trim()) newErrors.Phone = "Phone is required";
    else if (!/^\d{10,15}$/.test(form.Phone))
      newErrors.Phone = "Phone must be 10-15 digits";
    if (!form.Message.trim()) newErrors.Message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );
      const res = await axios.post(
        "https://api.geoduke.com/contactmessages",
        formData
      );
      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully!");
        setForm(initialState);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl  mx-auto p-6 bg-white rounded-lg shadow-[0px_4px_10px_3px_#0000001A] mt-20  mb-20">
      <ToastContainer position="top-center" />
      <h2 className="text-2xl font-bold uppercase mb-6 text-center text-primary">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="Name"
            value={form.Name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none ${
              errors.Name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Name"
          />
          {errors.Name && (
            <p className="text-red-500 text-sm mt-1">{errors.Name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="Email"
            value={form.Email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none ${
              errors.Email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@email.com"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="tel"
            name="Phone"
            value={form.Phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none ${
              errors.Phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Phone Number"
          />
          {errors.Phone && (
            <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="Message"
            value={form.Message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 border rounded focus:outline-none ${
              errors.Message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Message"
          />
          {errors.Message && (
            <p className="text-red-500 text-sm mt-1">{errors.Message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-primary/90 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
