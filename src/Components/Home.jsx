import React, { useState, useRef, useEffect } from "react";

function Home() {
  const [clicked, setClicked] = useState(false);
  // const modalRef = useRef(null); 

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

    // Validation
    // if (!username || !email || !phone || !dob) {
    //   alert("All fields are required.");
    //   return;
    // }

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

    // If all validations pass
    // alert("Form submitted successfully!");
    // //  setModalIsOpen(false);
  };




  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setClicked(false); // Close modal if clicked outside
  //     }
  //   };

  //   // Add event listener when modal is open
  //   if (clicked) {
  //     document.addEventListener("mousedown", handleOutsideClick);
  //   } else {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   }

  //   // Clean up the event listener when the component unmounts or modal is closed
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [clicked]);

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleButton}>Open Form</button>

      {clicked && (
        <div className="modal">
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
                  // onClick={handleSubmit}
                >
                  Submit
                </button>
                {/* <button type="button" onClick={handleButton}>
                  Close
                </button> */}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

// import React, { useState } from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// function Home() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     dob: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, email, phone, dob } = formData;

//     // Validation
//     if (!username || !email || !phone || !dob) {
//       alert("All fields are required.");
//       return;
//     }

//     if (!/^\d{10}$/.test(phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     const currentDate = new Date();
//     const enteredDate = new Date(dob);

//     if (enteredDate > currentDate) {
//       alert("Invalid date of birth. Please select a valid past date.");
//       return;
//     }

//     // If all validations pass
//     alert("Form submitted successfully!");
//     setModalIsOpen(false);
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="modal">
//       <h1 style={{ textAlign: "center" }}>User Details Modal</h1>
//       <div style={{ textAlign: "center", marginTop: "20px" }} className="modal-content">
//         <button
//           style={{
//             padding: "10px 20px",
//             fontSize: "16px",
//             borderRadius: "4px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//           onClick={openModal}
//         >
//           Open Form
//         </button>
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         contentLabel="User Details Form"
//         style={{
//           overlay: {
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           },
//           content: {
//             top: "50%",
//             left: "50%",
//             right: "auto",
//             bottom: "auto",
//             marginRight: "-50%",
//             transform: "translate(-50%, -50%)",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             width: "400px",
//           },
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Fill Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: "10px" }}>
//             <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
//               Username:
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
//               Email Address:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label htmlFor="phone" style={{ display: "block", marginBottom: "5px" }}>
//               Phone Number:
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: "20px" }}>
//             <label htmlFor="dob" style={{ display: "block", marginBottom: "5px" }}>
//               Date of Birth:
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//               required
//             />
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <button
//               type="submit"
//               style={{
//                 padding: "10px 20px",
//                 fontSize: "16px",
//                 borderRadius: "4px",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// export default Home;
