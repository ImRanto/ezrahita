import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import MemberDetail from "./pages/MemberDetail";
import Voices from "./pages/Voices";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MemberDashboard from "./pages/MemberDashboard";
import NotFound from "./pages/NotFound";

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
