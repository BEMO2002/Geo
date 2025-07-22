import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FiUpload } from "react-icons/fi";
const initialState = {
  Name: "",
  Email: "",
  Phone: "",
  Message: "",
};

const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [cvError, setCvError] = useState("");

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !allowedTypes.includes(file.type)) {
      setCvError("Only PDF, PNG, JPEG files are allowed.");
      setCvFile(null);
    } else {
      setCvError("");
      setCvFile(file);
    }
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
      if (cvFile) formData.append("AssetFile", cvFile);

      const res = await axios.post(
        "https://geoduke.runasp.net/api/contactmessages",
        formData
      );
      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully!");
        setForm(initialState);
        setCvFile(null);
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
    <div className="max-w-2xl  mx-auto p-6 bg-white rounded-lg shadow-md mt-10  mb-10">
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
        {/* CV Upload */}
                  <div className="mt-2 text-left text-sm text-gray-700">
            If you are applying for a job, please upload your CV.<br />
            If you are contacting us as a client, you can ignore the CV upload and just send your details.
          </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">CV (optional)</label>
          <div
            className="border-2 border-dashed border-primary rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-primary/5 transition"
            onClick={() => document.getElementById("cv-upload").click()}
          >
            <FiUpload className="text-4xl text-primary mb-2" />
            <span className="font-bold text-primary">Upload your CV</span>
            <span className="text-xs text-gray-500 mt-1">
              Allowed formats: PDF, DOCX, PPTX
            </span>
            {cvFile && (
              <span className="mt-2 text-green-700 font-semibold">{cvFile.name}</span>
            )}
            <input
              id="cv-upload"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {cvError && <p className="text-red-500 text-sm mt-1">{cvError}</p>}

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
