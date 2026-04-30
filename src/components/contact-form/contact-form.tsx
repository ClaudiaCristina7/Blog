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
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [country, setCountry] = useState("");

  const [textMessage, setTextMessage] = useState("");
  const [textMessageError, setTextMessageError] = useState("");

  const [option, setOption] = useState("");
  const [optionsError, setOptionsError] = useState("");

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

  function validateFirstName(value: string) {
    const onlyLetters = /^[a-zA-Z\s]+$/;
    if (value.trim().length < 2) {
      setFirstNameError("Name must have at least 2 characters");
      return false;
    } else if (!onlyLetters.test(firstName)) {
      setFirstNameError("Name must contain only letters");
      return false;
    } else {
      setFirstNameError("");
      return true;
    }
  }

  function validateLastName(value: string) {
    const onlyLetters = /^[a-zA-Z\s]+$/;
    if (value.trim().length < 2) {
      setLastNameError("Name must have at least 2 characters");
      return false;
    } else if (!onlyLetters.test(firstName)) {
      setLastNameError("Name must contain only letters");
      return false;
    } else {
      setFirstNameError("");
      return true;
    }
  }

  function validatePhoneNumber(value: string) {
    if (value.trim() === "") {
      setPhoneNumberError("Please enter a phone number");
      return false;
    } else if (value.length < 10) {
      setPhoneNumberError("Phone number must have at least 10 digits");
      return false;
    } else if (value.length > 15) {
      setPhoneNumberError("Phone number must have at most 15 digits");
      return false;
    } else {
      setPhoneNumberError("");
      return true;
    }
  }

  function validateForm() {
    let isValid = true;

    if (country === "") {
      setCountryError("Please select a country");
      isValid = false;
    } else {
      setCountryError("");
    }
    if (option === "") {
      setOptionsError("Please select a message subject");
      isValid = false;
    } else {
      setOptionsError("");
    }

    if (textMessage.trim() === "") {
      setTextMessageError("Please enter a message");
      isValid = false;
    } else {
      setTextMessageError("");
    }

    return isValid;
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
        const sorted = data
          .map((c: { name: { common: string } }) => c.name.common)
          .sort(); //adaugă tipul si redenumește parametrul

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

          <div>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                validateFirstName(e.target.value);
              }}
              onBlur={() => validateFirstName(firstName)}
            />
            {firstNameError && (
              <span className="error-message">{firstNameError}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validateLastName(e.target.value);
              }}
              onBlur={() => validateLastName(firstName)}
            />
            {firstNameError && (
              <span className="error-message">{lastNameError}</span>
            )}
          </div>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="email">Your Email</label>
          <div>
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
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="e.g.(555) 555-555"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              validatePhoneNumber(e.target.value);
            }}
            onBlur={() => validatePhoneNumber(phoneNumber)}
          />
          {phoneNumberError && (
            <span className="error-message">{phoneNumberError}</span>
          )}
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="country">Country*</label>
          <select
            name="Country"
            className="select-input"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={() => validateForm()}
          >
            {countryError && (
              <span className="error-message">{countryError}</span>
            )}

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
            onChange={(e) => setTextMessage(e.target.value)}
            onBlur={() => validateForm()}
          >
            {optionsError && (
              <span className="error-message">{optionsError}</span>
            )}

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
              onBlur={() => validateForm()}
            >
              {textMessageError && (
                <span className="error-message">{textMessageError}</span>
              )}
            </textarea>
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
