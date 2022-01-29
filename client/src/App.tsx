import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import client from './common/apollo-client'
import Header from './components/layout/Header'
import About from './pages/About'
import Blogposts from './pages/Blogposts'
import Home from './pages/Home'



const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogposts' element={<Blogposts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
