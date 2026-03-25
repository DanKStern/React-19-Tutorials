import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import "./App.css";

<App className="css"></App>;
function App() {
  return (
    <div className="App">
      <CardWrapper title="User Information">
        <p>Bruce Wayne</p>
        <p>batman@gothamcity.com</p>
        <Button>Edit Profile</Button>
      </CardWrapper>
      <Greeting name="Bruce" Greeting="Good Morning" />
      <Greeting message="Welcome!" />
      <Greeting name="Diana" />
      <Greeting />

      <Product
        title="Laptop"
        price={999.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <Welcome name="Bruce" alias="Batman" />
      <Welcome name="Clark" alias="Superman" />
      <Welcome name="Diana" alias="Wonder Woman" />
      <CandidateProfile />
      <StyledForm />
      <UserProfile />
      <ContactForm />
      <Hello />
      <HelloWithoutJSX />
      <Button />
    </div>
  );
}

export default App;
