import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/pets">List of Pets</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
