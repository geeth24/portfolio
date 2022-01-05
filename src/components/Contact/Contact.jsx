import React, { useState } from "react";
import axios from "axios";

import {
  ContactContainer,
  ContactFormWrapper,
  ContactH1,
} from "./ContactElements";

import { FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const formSparkUrl = "https://submit-form.com/uMokO5XM";
    const toast = useToast();


  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };
  const postSubmission = async () => {
    const payload = {
      "form-email": email,
      "form-name": name,
      "form-message": message,
    };

    try {
      await axios.post(formSparkUrl, payload);
      toast({
        title: "Your message has been sent!",
        description: "I will get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "There was an error sending your message.",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <ContactContainer id="contact">
      <ContactFormWrapper>
        <ContactH1>Contact</ContactH1>

        <FormControl id="name" boxShadow="lg" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            color="#010515"
            background="white"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" boxShadow="lg" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            color="#010515"
            background="white"
            type="email"
            placeholder="info@geethg.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="message" boxShadow="lg" isRequired>
          <FormLabel>Message</FormLabel>
          <Input
            color="#010515"
            background="white"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Button
          isLoading={submitting}
            bgColor="#00aeff"
            borderColor="#00aeff!important"
            color="#010515"
            colorScheme="blue"
            type="submit"
            variant="solid"
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
            onClick={submitForm}
          >
            Submit
          </Button>
        </FormControl>
      </ContactFormWrapper>
    </ContactContainer>
  );
};

export default Contact;
