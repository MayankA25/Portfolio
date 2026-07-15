"use client";
import React, { useState } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

import * as z from "zod";
import { contactSchema } from "@/schema/contactSchema";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactError {
  firstName: string[];
  lastName: string[];
  email: string[];
  message: string[];
}

export default function ContactForm() {
  const [contactDetails, setContactDetais] = useState<ContactDetails>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactError>({
    firstName: [],
    lastName: [],
    email: [],
    message: [],
  });

  const validateForm = () => {
    const { success, error } = contactSchema.safeParse(contactDetails);

    if (!success) {
      const errors = z.flattenError(error).fieldErrors;
      // console.log("Errors: ", errors);

      setErrors({
        firstName: errors.firstName || [],
        lastName: errors.lastName || [],
        email: errors.email || [],
        message: errors.message || [],
      });

      return false;
    }

    // console.log("Validated Successfully: ", data);

    return success;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newDetails = {
      ...contactDetails,
      [e.target.name]: e.target.value,
    };
    // console.log("Contact Details: ", newDetails);
    setContactDetais(newDetails);
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateForm();

    if (!validation) return;
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: `${contactDetails.firstName} ${contactDetails.lastName}`,
          email: `${contactDetails.email}`,
          subject: `Contact Form Submitted By ${contactDetails.email}`,
          message: contactDetails.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      // alert("Message Sent!");
      toast.success("Message Sent!", {
        className:
          "!bg-neutral-100 dark:!bg-neutral-800 dark:!text-white !font-bold !shadow-xl",
      });

      setContactDetais({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setErrors({
        firstName: [],
        lastName: [],
        email: [],
        message: [],
      });
    } catch (err) {
      console.log(err);
      // alert("Failed to submit message.");
      toast.error("Error While Sending Message!", {
        className:
          "!bg-neutral-100 dark:!bg-neutral-800 dark:!text-white !font-bold !shadow-xl",
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="m-auto flex w-full flex-col justify-center gap-5 rounded-xl bg-neutral-100 px-4 py-4 md:px-8 md:py-8 dark:bg-neutral-900"
    >
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-1.5">
          <Label
            htmlFor="first-name"
            isError={errors.firstName.length > 0}
            labelName="First Name"
          />
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contactDetails.firstName}
            onChange={handleChange}
            isError={errors.firstName.length > 0}
            error={errors.firstName}
          />
        </div>
        <div className="flex flex-col justify-center gap-1.5">
          <Label
            htmlFor="last-name"
            isError={errors.lastName.length > 0}
            labelName="Last Name"
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contactDetails.lastName}
            onChange={handleChange}
            isError={errors.lastName.length > 0}
            error={errors.lastName}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label
          labelName="Email"
          isError={errors.email.length > 0}
          htmlFor="email"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Here"
          value={contactDetails.email}
          isError={errors.email.length > 0}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <Label
          labelName="Message"
          htmlFor="message"
          isError={errors.message.length > 0}
        />
        <TextArea
          name="message"
          placeholder="Type your message"
          value={contactDetails.message}
          onChange={handleChange}
          isError={errors.message.length > 0}
          error={errors.message}
        />
      </div>
      <Button>
        <span className="text-sm font-bold md:text-lg">Send</span>
        <i>
          <ArrowUpRight className="size-5 md:size-6" />
        </i>
      </Button>
    </form>
  );
}
