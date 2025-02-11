import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSwitch from '@pages/LandingSwitch';
import PrivacyPolicy from '@pages/privacy/PrivacyPolicy';
import TermsOfService from "@pages/terms/termsOfService.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingSwitch />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
