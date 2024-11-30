import React, { useState, useRef, useEffect } from "react";

function Home() {
  const [clicked, setClicked] = useState(false);
  const modalRef = useRef(null); 

  const handleButton = () => {
    setClicked(!clicked);
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const currentDate = new Date();
    const enteredDate = new Date(dob);

    if (enteredDate > currentDate) {
      alert("Invalid date of birth. Please select a valid past date.");
      return;
    }
  };




  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    if (clicked) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [clicked]);

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleButton}>Open Form</button>

      {clicked && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <h2>Enter User Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="username"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="^[^@]+@[^@]+\.[^@]+$"
                  title="Please include an '@' in the email address."
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="dob"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="submit-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;