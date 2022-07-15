import { Link } from "react-router-dom";

const Button = ({ label, link }) => {
  return (
    <Link to={link} className="btn btn-main rounded btn-sm-2">
      {label}
    </Link>
  );
};

export default Button;
