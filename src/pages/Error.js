import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page not founf</p>
      <Link to="/" className="btn">
        Anasayfaya Git
      </Link>
    </section>
  );
};
export default Error;
