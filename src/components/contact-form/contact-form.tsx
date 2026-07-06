import "./contact-form.css";
import { useState, useEffect, type FormEvent, useMemo } from "react";

export default function ContactForm() {
  // Aici țin toate datele formularului = STATE-URI//

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

  // Validari Date//

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
    } else if (!onlyLetters.test(lastName)) {
      setLastNameError("Name must contain only letters");
      return false;
    } else {
      setLastNameError("");
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

  // Validare Generala a formularului //

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

  // Trimitere date formular catre API //

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //Validare form - opresc daca nu e valid
    const formIsValid = validateForm();
    if (!formIsValid) return;

    console.log({
      firstName,
      lastName,
      email,
      country,
      option,
      textMessage,
    });

    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        option,
        textMessage,
      }),
    })
      .then((res: Response) => res.json())
      .then((data: unknown) => {
        console.log("Saved!", data);
        console.log("Form submitted");

        setFirstName("");
        setLastName("");
        setEmailError("");
        setCountries([]);
        setEmail("");
        setPhoneNumber("");
        setCountry("");
        setTextMessage("");
        setOption("");
      })
      .catch((err: Error) => {
        console.log("Error", err.message);
      });
  }

  //Fetch tari - API call //

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

  //Validare Buton Submit//

  const isFormInvalid = useMemo(() => {
    return (
      firstName.trim().length < 2 ||
      lastName.trim().length < 2 ||
      emailError !== "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      country === "" ||
      option === "" ||
      textMessage.trim() === ""
    );
  }, [
    firstName,
    lastName,
    emailError,
    email,
    phoneNumber,
    country,
    option,
    textMessage,
  ]);

  //Afisare Formular in pagina//

  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>

      <form method="post" className="contact-form" onSubmit={handleSubmit}>
        <span className="form-message">
          {" "}
          Write us a message and we will get back to you in no time
        </span>

        <fieldset className="name-input">
          <label htmlFor="firstName">Your Name*</label>

          <div className="input-wrapper">
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

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validateLastName(e.target.value);
              }}
              onBlur={() => validateLastName(lastName)}
            />
            {lastNameError && (
              <span className="error-message">{lastNameError}</span>
            )}
          </div>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="email">Your Email*</label>
          <div className="input-wrapper">
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
          <div className="input-wrapper">
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
          </div>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="country">Country*</label>
          <div className="input-wrapper">
            <select
              name="Country"
              className="select-input"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onBlur={() => validateForm()}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {countryError && (
              <span className="error-message">{countryError}</span>
            )}
          </div>
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="messageSubject">Message Subject*</label>
          <div className="input-wrapper">
            <select
              name="Subject"
              className="select-input"
              id="messageSubject"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              onBlur={() => validateForm()}
            >
              <option>Info Request</option>
              <option>Technical Issue</option>
              <option>Complaint</option>
              <option>Feedback / Suggestions</option>
              <option>Other</option>
            </select>
            {optionsError && (
              <span className="error-message">{optionsError}</span>
            )}
          </div>
        </fieldset>

        <div>
          <fieldset className="message">
            <label htmlFor="message">Your Message*</label>
            <div className="input-wrapper">
              <textarea
                placeholder="Mesajul tău"
                className="message-input"
                id="message"
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                onBlur={() => validateForm()}
              />
              {textMessageError && (
                <span className="error-message">{textMessageError}</span>
              )}
            </div>
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
