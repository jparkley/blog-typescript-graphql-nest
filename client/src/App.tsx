import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import client from './common/apollo-client'
import Header from './components/layout/Header'
import Posts from './pages/Posts'
import About from './pages/About'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
