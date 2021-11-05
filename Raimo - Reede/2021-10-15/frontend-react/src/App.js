import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import ViewPosts from "./pages/ViewPosts";
import EditPost from "./pages/EditPosts";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header}/>
      <Switch>
        <Route exact path="/" component={ShowMagic} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/viewposts" component={ViewPosts}/>
        <Route exact path="/edit:handle" component={EditPost}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
