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
        box-sizing: border-box;
        outline: 0;
    }

    #root {
        margin: 0 auto;
    }    

    html {
        color: '#1B2631';
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-family: 'Nunito', sans-serif;
        font-weight: 400;        
    }

    a {
        color: teal;
        cursor: pointer;
        &:hover {
            color: '#2E4053';
        }
    }
`;
