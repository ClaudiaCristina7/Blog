import "./contact-form.css";
import { useState, useEffect, type FormEvent, useMemo } from "react";

export default function ContactForm() {
  const [countries, setCountries] = useState([]);
  const [countryError, setCountryError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [option, setOption] = useState("");

  function validateEmail(value: string) {
    if (
      !value.includes("@") ||
      !value.includes(".") ||
      !value.endsWith(".com")
    ) {
      setEmailError("Please include a valid email");
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      country,
    });

    setFirstName("");
    setEmailError("");
    setCountries([]);
    setEmail("");
    setPhoneNumber("");
    setCountry("");
    setTextMessage("");
    setOption("");

    console.log("Form submitted");

    if (firstName.trim().length < 2) {
      alert("Name must have at least 2 characters");
      return;
    }

    if (emailError || email.trim() === "") {
      alert("Please enter a valid email");

      return;
    }
    if (phoneNumber.trim() === "") {
      alert("Please enter a phone number");
      return;
    }

    if (country === "") {
      alert("Please select a country");
      return;
    }

    if (option === "") {
      alert("Please select a message subject");
      return;
    }

    if (textMessage.trim() === "") {
      alert("Please enter a message");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("API response:", data));
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.map((country) => country.name.common).sort();
        setCountries(sorted);
      });
  }, []);

  const isFormInvalid = useMemo(() => {
    return (
      emailError !== "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      country === "" ||
      option === "" ||
      textMessage.trim() === ""
    );
  }, [emailError, email, phoneNumber, country, option, textMessage]);

  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>

      <form method="post" className="contact-form" onSubmit={handleSubmit}>
        <span className="form-message">
          {" "}
          Write us a message and we will get back to you in no time
        </span>

        <fieldset className="name-input">
          <label htmlFor="firstName">Your Name</label>

          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="e.g.hello@contact.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {emailError && emailError.length > 0 && (
            <span className="error-message">{emailError}</span>
          )}
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="country">Country*</label>
          <select
            name="Country"
            className="select-input"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="messageSubject">Message Subject*</label>
          <select
            name="Subject"
            className="select-input"
            id="messageSubject"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option>Info Request</option>
            <option>Technical Issue</option>
            <option>Complaint</option>
            <option>Feedback / Suggestions</option>
            <option>Other</option>
          </select>
        </fieldset>

        <div>
          <fieldset className="message">
            <label htmlFor="message">Your Message*</label>
            <textarea
              placeholder="Mesajul tău"
              className="message-input"
              id="message"
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
            ></textarea>
          </fieldset>
        </div>

        <fieldset className="form-field">
          <button
            type="submit"
            className="submit-button"
            disabled={isFormInvalid}
          >
            Submit Form
          </button>
        </fieldset>
      </form>
    </div>
  );
}
