import { FC } from "react";
import Button from "../../components/shared/Button";
import "./styles.css";

const Home: FC = () => {
  return (
    <div className="home">
      <Button variant="secondary">base</Button>
      <Button variant="primary">base1</Button>
    </div>
  );
};

export default Home;
