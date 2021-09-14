import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import PetsList from "./components/PetsList";
import PetView from "./components/PetView";
import Home from "./pages/Home";
import "./styles.css";

const initialProductsData = [
  {
    id: 1,
    name: "Fish",
    food: 12
  },
  {
    id: 2,
    name: "Dog",
    food: 100
  },
  {
    id: 3,
    name: "Cat",
    food: 60
  }
];

export default function App() {
  const [pets, setPets] = useState(initialProductsData);

  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/pets">
        <PetsList pets={pets} />
      </Route>
      <Route exact path="/pets/:petId">
        <PetView pets={pets} />
      </Route>
      <Route exact path="/contact-us">
        <ContactUs />
      </Route>
      <Route exact path="/404">
        <NotFound />
      </Route>
    </Switch>
  );
}
