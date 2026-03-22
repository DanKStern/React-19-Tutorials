import React from "react";
import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import "./App.css";

<App className="css"></App>;
function App() {
  return (
    <div className="App">
      <StyledForm />
      <UserProfile />
      <ContactForm />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
