import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    services: "",
    address: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
    console.log(name, value)
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(false);
    const values = Object.values(form);
    for (const value of values) {
      if (!value) {
        alert("please input all values");
        return;
      }
    }
    submitDetails();
  };

  const submitDetails = async () => {
    try {
      await fetch(
        "https://cleaning-company-be-production.up.railway.app/send-booking",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      setShowSuccess(true);
    } catch (error) {
      alert("something went wrong, please try again.");
    }
  };

  return (
    <div
      className="h-[calc(100vh-80px)] flex flex-col bg-[#fdf3ec] text-black px-5 md:px-10 items-center"
      id="contact-form"
    >
      <h3 className="font-bold text-3xl my-4">Contact Us</h3>
      {showSuccess && (
        <div className="flex flex-col items-center justify-center gap-2 my-4 w-[90%]">
          <CheckBadgeIcon className="h-10 w-10 text-green-700" />
          <p>Information submitted successfully. we'll reach you shortly.</p>
        </div>
      )}
      <form
        id="bookingForm"
        className="flex flex-col gap-2 text-sm md:w-[400px] w-[90%] justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          className="p-2 rounded bg-white shadow-md"
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
          className="p-2 rounded bg-white shadow-md"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          required
          onChange={handleChange}
          className="p-2 rounded bg-white shadow-md"
        />

        <label htmlFor="date">Preferred Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          className="p-2 rounded bg-white shadow-md"
          required
        />

        <label htmlFor="services">Select a Service:</label>
        <select
          id="services"
          name="services"
          onChange={handleChange}
          className="p-2 rounded bg-white shadow-md"
          required
        >
          <option value="full_cleaning">Full Cleaning</option>
          <option value="garden_cleaning">Garden Cleaning</option>
          <option value="driveway_cleaning">Driveway Cleaning</option>
        </select>

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          required
          className="p-2 rounded bg-white shadow-md"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="px-6 mt-4 py-4 bg-[#fbd616] justify-center rounded-lg rounded-tl-none text-center font-bold text-xs flex gap-1 hover:opacity-75"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
