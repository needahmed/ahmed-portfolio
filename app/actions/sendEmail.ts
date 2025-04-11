"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData | Record<string, string>) => {
  // Handle both FormData and JSON object format
  let name: string | null = null;
  let email: string | null = null;
  let subject: string | null = null;
  let message: string | null = null;

  // Check if formData is FormData or plain object
  if (formData instanceof FormData) {
    name = formData.get("name") as string;
    email = formData.get("email") as string;
    subject = formData.get("subject") as string;
    message = formData.get("message") as string;
  } else {
    // It's a JSON object from the frontend
    name = formData.name || null;
    email = formData.email || null;
    subject = formData.subject || null;
    message = formData.message || null;
  }

  // simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email address",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(name, 500)) {
    return {
      error: "Invalid name",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "needahmed2@gmail.com",
      subject: subject || "Message from contact form",
      replyTo: email || undefined,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
        name: name as string,
        subject: subject as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    success: true,
    data,
  };
};
