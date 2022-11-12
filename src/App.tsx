import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ForkMe from './components/ForkMe';
import Footer from './components/Footer';
import Home from './pages/Home';
import Authors from './pages/Authors';
import environment from './environment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <BrowserRouter>
      <>
        <Menu />
        <ForkMe />
        <main role="main" className="flex-shrink-0 main-container" style={{ marginTop: 25, marginBottom: 25 }}>
          <Routes>
            <Route path="/authors" element={<Authors />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </>
      </BrowserRouter>
  </RelayEnvironmentProvider>
);

export default App;
