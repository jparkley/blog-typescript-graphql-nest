import { createGlobalStyle } from "styled-components";

export const theme = {
  font: "",
  primary: "#17a2b8",
  secondary: "green",
  alert: "red",
  warning: "yellow",
  background: "",
};

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    #root {
        margin: 0 auto;
    }    

    html {
        /* color: orange; */
    }
`;
