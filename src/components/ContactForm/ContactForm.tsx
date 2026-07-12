"use client";
import React, { useState } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

import * as z from "zod";
import { contactSchema } from "@/schema/contactSchema";

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateForm();
      }}
      className="m-auto flex w-full flex-col justify-center gap-5 rounded-xl bg-neutral-900 px-4 py-4 md:px-8 md:py-8"
    >
      <div className="grid md:grid-cols-2 items-center gap-5">
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
        <span className="text-sm md:text-lg font-bold">Send</span>
        <i>
          <ArrowUpRight className="size-5 md:size-6" />
        </i>
      </Button>
    </form>
  );
}
