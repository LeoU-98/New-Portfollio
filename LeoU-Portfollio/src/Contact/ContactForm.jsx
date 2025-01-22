import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import propTypes from "prop-types";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function ContactForm({ className }) {
  const form = useRef();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = data;

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || message === "") {
      toast.custom(
        <div className=" bg-white p-4 gap-2 rounded-3xl flex items-center">
          <FaCircleXmark className=" rounded-full  bg-white fill-red-500 size-5" />
          <p className="text-black">
            Please Don&apos;t leave any empty fields 😅
          </p>
        </div>
      );
      return;
    }

    emailjs
      .sendForm("service_g4fcqxk", "template_usetzt9", form.current, {
        publicKey: "C0IOUw1bVwXclcaR8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setData({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    toast.custom(
      <div className=" bg-white p-4 gap-2 rounded-3xl flex items-center">
        <FaCheckCircle className=" rounded-full border-[1px] border-white border-solid bg-white fill-green-500 size-5" />
        <p className="text-black">Your message has been sent , Thank You 😊</p>
      </div>
    );
  };

  return (
    <div className={`px-4 ${className}`}>
      <form
        ref={form}
        className="flex min-h-96 flex-col justify-center gap-3 text-white"
        onSubmit={sendEmail}
      >
        <div className="flex items-center justify-between gap-2">
          <input
            className="w-1/2 rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="active:placeholder:text-gray-950focus:bg-opacity-100 w-1/2 rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          className="rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className="min-h-28 rounded-xl border-[1px] border-white border-opacity-50 bg-white bg-opacity-10 p-2 px-5 py-3 outline-none placeholder:text-white focus:bg-opacity-100 focus:text-gray-900 focus:placeholder:text-gray-950 active:bg-opacity-100 active:placeholder:text-gray-950"
          type="text"
          name="message"
          placeholder="Message"
          value={data.message}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="rounded-lg bg-violet-800 py-3 font-medium uppercase text-white transition-all duration-500 hover:bg-white hover:text-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-500 active:translate-y-3"
        >
          Send
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = { className: propTypes.string };
