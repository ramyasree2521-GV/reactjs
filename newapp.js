import React, { useState } from "react";

// Header Component
function Header() {
  return <h1>My Website</h1>;
}

// Footer Component
function Footer() {
  return <h3>© 2026 My Website</ h3>;
}

// Card Component (Props)
function Card({ title, description }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Button Component (Reusable)
function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick} style={{ padding: "10px", margin: "10px" }}>
      {text}
    </button>
  );
}

// Form Component (State)
function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      />
      <h3>Hello, {name}</h3>
    </div>
  );
}

// Main App Component
function App() {

  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      <Header />

      {/* Dynamic Cards using props */}
      <Card
        title="React"
        description="This is a React Card Component"
      />
      <Card
        title="JavaScript"
        description="This is another Card Component"
      />

      {/* Reusable Button */}
      <Button text="Click Me" handleClick={showMessage} />

      {/* Form with state */}
      <Form />

      <Footer />

    </div>
  );
}

export default App;