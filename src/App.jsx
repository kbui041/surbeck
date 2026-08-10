import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";
import Home from "./pages/Home.jsx";
import WhySurbeck from "./pages/WhySurbeck.jsx";
import Philosophy from "./pages/Philosophy.jsx";
import WhyFaster from "./pages/WhyFaster.jsx";
import TreatmentProcess from "./pages/TreatmentProcess.jsx";
import BracesVsInvisalign from "./pages/BracesVsInvisalign.jsx";
import ComplexCases from "./pages/ComplexCases.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import Resources from "./pages/Resources.jsx";
import Videos from "./pages/Videos.jsx";
import Education from "./pages/Education.jsx";
import EducationArticle from "./pages/EducationArticle.jsx";
import NewPatientForms from "./pages/NewPatientForms.jsx";
import FAQ from "./pages/FAQ.jsx";
import Financial from "./pages/Financial.jsx";
import Referrals from "./pages/Referrals.jsx";
import ReferringDentists from "./pages/ReferringDentists.jsx";
import Appointment from "./pages/Appointment.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/why-surbeck" element={<WhySurbeck />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/why-faster" element={<WhyFaster />} />

          <Route path="/treatment-process" element={<TreatmentProcess />} />
          <Route path="/braces-vs-invisalign" element={<BracesVsInvisalign />} />
          <Route path="/complex-cases" element={<ComplexCases />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/patient-education" element={<Education />} />
          <Route path="/patient-education/:slug" element={<EducationArticle />} />
          <Route path="/resources/videos" element={<Videos />} />
          <Route path="/resources/new-patient-forms" element={<NewPatientForms />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/financial" element={<Financial />} />

          <Route path="/referrals" element={<Referrals />} />
          <Route path="/referring-dentists" element={<ReferringDentists />} />

          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
