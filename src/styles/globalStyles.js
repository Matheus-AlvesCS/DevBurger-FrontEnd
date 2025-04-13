import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: ${(props) => props.theme.poppinsFont};
    }

    button, a {
        cursor: pointer;
    }
`;

export default globalStyles;
