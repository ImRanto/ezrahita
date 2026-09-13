import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
