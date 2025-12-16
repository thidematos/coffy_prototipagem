import { Routes, Route, Navigate } from 'react-router-dom';
import FirstScreen from './pages/first_screen';
import Login from './pages/login';
import Signup from './pages/signup';
import MapHomeScreen from './pages/map_home_screen';
import DesignSystem from './pages/design_system';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/first-screen" replace />} />
      <Route path="/first-screen" element={<FirstScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map-home-screen" element={<MapHomeScreen />} />
      <Route path="/design-system" element={<DesignSystem />} />
    </Routes>
  );
}

export default App;
