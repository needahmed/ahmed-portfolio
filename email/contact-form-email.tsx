import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
  name?: string;
  subject?: string;
}

export default function ContactFormEmail({
  message,
  senderEmail,
  name = "Not provided",
  subject = "Portfolio Contact Form",
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            {subject}
          </Heading>
          <Text style={{ ...text, marginBottom: "14px" }}>
            From: {name} ({senderEmail})
          </Text>
          <Hr style={hr} />
          <Section style={section}>
            <Text style={text}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent from your portfolio contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const h1 = {
  color: "#333",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: "16px",
  margin: "16px 0",
};

const section = {
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
};

const hr = {
  border: "none",
  borderTop: "1px solid #eaeaea",
  margin: "26px 0",
  width: "100%",
};

const footer = {
  color: "#888888",
  fontSize: "12px",
  marginTop: "12px",
};