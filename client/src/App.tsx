import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import client from "./common/apollo-client";
import Header from "./components/layout/Header";
import { ContainerStyled } from "./components/styles/Container/Container.styled";
import GlobalStyle, { theme } from "./components/styles/globals";
import About from "./pages/About";
import Blogposts from "./pages/Blogposts";
import Home from "./pages/Home";
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <ContainerStyled>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogposts" element={<Blogposts />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ContainerStyled>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
