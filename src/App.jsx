import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import FAQs from "./components/FAQs";
import CaseStudies from "./components/CaseStudies";
import Playbook from "./components/Playbook";
import ArticlePage from "./components/ArticlePage";

const App = () => {
  useEffect(() => {
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6N3KCLW"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.prepend(noscript);
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/playbooks" element={<Playbook />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default App;
