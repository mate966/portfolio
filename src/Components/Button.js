import { HashLink } from "react-router-hash-link";

const Button = ({ value, path }) => {
    return (
        <button className="see-more-button">
            <HashLink smooth to={path}>
                {value}
            </HashLink>
        </button>
    );
};

export default Button;
