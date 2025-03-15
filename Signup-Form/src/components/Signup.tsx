import "./signup.css";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Country {
  [key: string]: string[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  city: string;
}

function Signup() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<Country>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      );
      const countriesData = await response.json();

      setCountries(countriesData);
    }

    fetchCountries();
  }, []);
  const emailRegex: RegExp =
    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
  const passwordRegex: RegExp = /^[a-zA-Z\!@#\$%\^&\*-]{8,}$/;
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
  });

  const validateValues = () => {
    let foundErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      city: "",
    };
    if (formData.firstName.length == 0) {
      foundErrors.firstName = "First Name is required.";
    } else if (
      formData.firstName.length < 4 ||
      formData.firstName.length > 25
    ) {
      foundErrors.firstName =
        "First Name should be between 4 and 25 characters.";
    }
    if (formData.lastName.length == 0) {
      foundErrors.lastName = "Last Name is required.";
    } else if (formData.lastName.length < 4 || formData.lastName.length > 25) {
      foundErrors.lastName = "Last Name should be between 4 and 25 characters.";
    }

    if (formData.email.length == 0) {
      foundErrors.email = "Email is required.";
    } else if (!formData.email.match(emailRegex)) {
      foundErrors.email = "Email format is invalid.";
    }
    if (formData.password.length == 0) {
      foundErrors.password = "Password is required.";
    } else if (!formData.password.match(passwordRegex)) {
      foundErrors.password =
        "Password must contain minimum 8 characters and at least one special character.";
    }
    if (formData.confirmPassword.length == 0) {
      foundErrors.confirmPassword = "Please confirm password.";
    } else if (formData.confirmPassword !== formData.password) {
      foundErrors.confirmPassword = "Password does't match.";
    }
    if (formData.country.length == 0) {
      foundErrors.country = "Please select a country.";
    }
    if (formData.city.length == 0) {
      foundErrors.city = "Please select a city.";
    }
    setErrors(foundErrors);

    const isValid = (
      Object.keys(foundErrors) as [
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "country",
        "city"
      ]
    ).every((key) => foundErrors[key].length == 0);

    return isValid;
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateValues();
    if (isValid) {
      localStorage.setItem("email", formData.email);
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="signup-field">
          <div>
            <label htmlFor="firstName">First Name</label>
          </div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={onChange}
            value={formData.firstName}
          />
          {errors.firstName.length !== 0 ? (
            <div className="error">{errors.firstName}</div>
          ) : null}
        </div>

        <div className="signup-field">
          <div>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={onChange}
            value={formData.lastName}
          />
          {errors.lastName.length !== 0 && (
            <div className="error">{errors.lastName}</div>
          )}
        </div>

        <div className="signup-field">
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              value={formData.email}
            />
            {errors.email.length !== 0 ? (
              <div className="error">{errors.email}</div>
            ) : null}
          </div>

          <div className="signup-field">
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
                value={formData.password}
              />
              {errors.password.length !== 0 ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={onChange}
                value={formData.confirmPassword}
              />
              {errors.confirmPassword.length !== 0 ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : null}
            </div>

            <div className="form-field">
              <div>
                <label htmlFor="country">Country</label>
              </div>
              <select
                value={formData.country}
                onChange={onChange}
                name="country"
                id="country"
              >
                <option value="">Please select a country</option>
                {Object.keys(countries).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country.length !== 0 ? (
                <div className="error">{errors.country}</div>
              ) : null}
            </div>

            {formData.country !== "" && (
              <div className="form-field">
                <div>
                  <label htmlFor="city">City</label>
                </div>
                <select
                  name="city"
                  id="city"
                  onChange={onChange}
                  value={formData.country}
                >
                  {countries[formData.country]?.map((city, index) => (
                    <option key={city + index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city.length !== 0 ? (
                  <div className="error">{errors.city}</div>
                ) : null}
              </div>
            )}

            <button className="submit">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
