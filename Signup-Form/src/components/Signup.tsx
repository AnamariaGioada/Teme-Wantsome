import { useState, ChangeEvent } from "react";

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
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
  });

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
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
        </div>

        <div className="signup-field">
          <label htmlFor="email">e-mail</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              value={formData.email}
            />
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
            </div>

            <button>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
