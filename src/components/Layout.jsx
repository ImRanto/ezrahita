import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
