import PropTypes from "prop-types";
import { Container } from "./styles";

export function Button({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Button.propTypes = {
  children: PropTypes.string,
};
