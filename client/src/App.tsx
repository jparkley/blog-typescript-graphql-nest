import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import client from './common/apollo-client'
import Header from './components/layout/Header'
import About from './pages/About'
import Home from './pages/Home'
import Posts from './pages/Posts'



const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
