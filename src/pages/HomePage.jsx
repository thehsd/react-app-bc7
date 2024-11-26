import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* <a href="/profile"> go to profile</a> */}
      <Link to="/profile"> go to profile</Link>
    </div>
  );
};

export default HomePage;
