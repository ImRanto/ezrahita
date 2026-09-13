import { Route, Switch } from "wouter";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Members from "./pages/Members.jsx";
import MemberDetail from "./pages/MemberDetail.jsx";
import Voices from "./pages/Voices.jsx";
import Events from "./pages/Events.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import News from "./pages/News.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
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
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/member/dashboard" component={MemberDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}
