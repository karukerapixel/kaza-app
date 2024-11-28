import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Housing from './pages/Housing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='housings/:id' element={<Housing />} />
      </Route>
    </Routes>
  );
}

export default App;
