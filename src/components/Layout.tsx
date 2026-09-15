import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

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
