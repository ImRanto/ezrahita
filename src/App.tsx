import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import MemberDetail from "./pages/MemberDetail";
import Voices from "./pages/Voices";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MemberDashboard from "./pages/MemberDashboard";
import NotFound from "./pages/NotFound";

const goatCounterUrl = (import.meta as any).env.VITE_GOATCOUNTER_URL?.replace(/\/$/, "");
let goatCounterScript;
let lastTrackedPath;

function trackPageViews(path) {
  if (!goatCounterUrl || lastTrackedPath === path) return;
  lastTrackedPath = path;

  if (!goatCounterScript) {
    (window as any).goatcounter = { no_onload: true };
    goatCounterScript = new Promise((resolve) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `${goatCounterUrl}/count.js`;
      script.setAttribute("data-goatcounter", `${goatCounterUrl}/count`);
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
  }

  goatCounterScript.then((loaded) => {
    if (loaded && (window as any).goatcounter?.count) {
      (window as any).goatcounter.count({ path });
    }
  });
}

function PageViewTracker() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageViews(location);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <PageViewTracker />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/members" component={Members} />
      <Route path="/members/:id" component={MemberDetail} />
      <Route path="/voices" component={Voices} />
      <Route path="/events" component={Events} />
      <Route path="/events/:id" component={EventDetail} />
      <Route path="/news" component={News} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/videos" component={Videos} />
      <Route path="/videos/:id" component={VideoDetail} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/member/dashboard" component={MemberDashboard} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}
