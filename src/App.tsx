import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { AboutPage } from "./components/AboutPage";
import { EnquiryPage } from "./components/EnquiryPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "menu" | "about" | "enquiry"
  >("home");

  // Navigation handler with scroll to top
  const handleNavigate = (page: "home" | "menu" | "about" | "enquiry") => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "menu":
        return <MenuPage />;
      case "about":
        return <AboutPage />;
      case "enquiry":
        return <EnquiryPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
