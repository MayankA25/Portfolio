import React from "react";
import ContactForm from "../ContactForm/ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-10">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <span className="text-lg font-semibold text-neutral-600 dark:text-neutral-400">
          Let&apos;s Connect and Collaborate.
        </span>
      </div>
      <div className="items-center flex">
        <ContactForm />
      </div>
    </div>
  );
}
