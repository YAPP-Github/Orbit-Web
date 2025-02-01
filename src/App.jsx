import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSwitch from '@pages/LandingSwitch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingSwitch />} />
      </Routes>
    </Router>
  );
}

export default App;
