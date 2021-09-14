import { useHistory } from "react-router-dom";

function PetsList(props) {
  const { pets } = props;

  console.log("pets", pets);

  const history = useHistory();

  return (
    <ul>
      {pets.map((pet, index) => {
        return (
          <li key={index}>
            <h3>{pet.name}</h3>
            <button onClick={() => history.push(`/pets/${pet.id}`)}>
              View
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PetsList;
