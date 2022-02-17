import { createGlobalStyle } from "styled-components";

export const theme = {
  font: "",
  primary: "#1A374D",
  secondary: "#504f4f",
  alert: "#BB6464",
  warning: "#F1E0AC",
  background: "#FBF5ED",
  backgroundLight: "#398AB9",
};

export default createGlobalStyle`    
    :root {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        /* --color: #504f4f;
        --color-medium: #1A374D;
        --color-light: #7f8c8d;
        --background-color: #FBF5ED; */
    }

    body {
        color: ${theme.primary};
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }
`;
