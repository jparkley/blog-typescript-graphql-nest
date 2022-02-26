import { createGlobalStyle } from "styled-components";

export const theme = {
  textDark1: "#1A374D",
  textDark2: "#504f4f",
  testLight1: "rgb(247, 247, 247)",
  textAlert: "#BB6464",
  textWarning: "#F1E0AC",
  bgDark1: "#FBF5ED",
  bgDarkBlue: "#398AB9",
  bgMidnightBlue: "#2c3e50",
  bgLightCreme: "#FBF5ED",
  bgLightGray: "#EEEEEE",
  spacingNone: "0px",
  spacingMin: "10px",
  spacingMid: "20px",
  spacingLarge: "30px",
  spacingMax: "40px",
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
        color: ${theme.textDark1};
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }
`;
