import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PetView(props) {
  const { pets } = props;

  const { petId } = useParams();

  console.log("Route params: ", typeof petId);

  const petFound = pets.find((pet) => pet.id === parseInt(petId, 10));

  // useEffect(() => {
  //   fetch(`http://example.com/products/${petId}`);
  // });

  return (
    <main>
      <h2>{petFound.name}</h2>
    </main>
  );
}

export default PetView;
