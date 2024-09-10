import "./Login.css";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useNavigate } from "react-router";

// "Database"
const USERS = [
  { username: "Wantsome", password: "wantsome123", id: 1 },
  { username: "React", password: "react123", id: 2 },
];

interface Error {
  id: number;
  message: string;
}

interface FormData {
  username: string;
  password: string;
  country: string;
  city: string;
}

interface Country {
  [key: string]: string[];
}

function isValidUser({ username, password }: FormData) {
  const user = USERS.find(
    (user) => user.username === username && user.password === password
  );

  return user;
}

function Login() {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [countries, setCountries] = useState<Country>({});
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
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

  const [errors, setErrors] = useState<Error[]>([]);

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = isValidUser(formData);

    if (!user) {
      setErrors([
        ...errors,
        {
          id: Math.ceil(Math.random() * 1000),
          message: "Invalid credentials!",
        },
      ]);

      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/albums");
  }

  // const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUsername(event.target.value);
  //   // setPassword("");
  // };

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const inputs = [...document.getElementsByTagName("input")];
  // const usernameInput = inputs.find((input) => input.name === "username");
  // console.log(usernameInput.value);

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        {errors.length > 0 &&
          errors.map((error) => (
            <div className="error" key={error.id}>
              {error.message}
            </div>
          ))}

        <div className="form-field">
          <div>
            <label htmlFor="username">Username</label>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={onChange}
          />
        </div>

        <div className="form-field">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={onChange}
          />
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
        </div>

        {formData.country !== "" && (
          <div className="form-field">
            <div>
              <label htmlFor="city">City</label>
            </div>
            <select name="city" id="city">
              {countries[formData.country]?.map((city, index) => (
                <option key={city + index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
