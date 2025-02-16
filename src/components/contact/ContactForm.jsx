import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"; // ✅ Import Axios

function ContactForm() {
  const [serverMessage, setServerMessage] = useState(""); // ✅ API Response Message

  // ✅ Define Validation Schema
  const schema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters").max(20),
    email: z.string().email("Invalid email format"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(200),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ Fix: Use `import.meta.env.VITE_API_URL`
  console.log("API URL:", import.meta.env.VITE_API_URL);

  // ✅ Form Submit Function (API Integration)
  const submitForm = async (data) => {
    try {
      setServerMessage(""); // Reset previous messages

      // ✅ API Call using Axios
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        data
      );

      // ✅ If successful, show message & clear form
      setServerMessage("Contact saved successfully!");
      setValue("name", "");
      setValue("email", "");
      setValue("description", ""); // ✅ Clear description field
    } catch (error) {
      console.error("API Error:", error);
      setServerMessage("Failed to send data. Try again later.");
    }
  };

  return (
    <div className="contact__content">
      <h3 className="contact__title">Write me your project</h3>

      {/* ✅ Display API Response Message */}
      {serverMessage && <p style={{ color: "green" }}>{serverMessage}</p>}

      <form onSubmit={handleSubmit(submitForm)} className="contact__form">
        <div className="contact__form-div">
          <label className="contact__form-tag">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className="contact__form-name"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Email</label>
          <input
            {...register("email")}
            type="text"
            placeholder="Your email"
            className="contact__form-email"
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </div>

        <div className="contact__form-text">
          <label className="contact__form-project">Description</label>
          <textarea
            {...register("description")}
            placeholder="Write description"
            className="contact__form-project"
          ></textarea>
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
          )}
        </div>

        <div className="button__div">
          <button
            disabled={isSubmitting}
            className="button button_flex home__button-hi"
          >
            {isSubmitting ? "Submitting..." : "Send Me"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
