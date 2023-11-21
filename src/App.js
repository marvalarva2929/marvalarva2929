import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.js'
import HomePage from './components/HomePage.js'
import { HashRouter, Routes, Route } from "react-router-dom";
import Shell from './components/Shell.js'
import AboutPage from './components/AboutPage.js'
import ProjectPage from './components/ProjectPage.js'
import BlogPage from './components/BlogPage.js'

function App() {
  return (
    <div className="App">
          <HashRouter> 
            <NavigationBar/>
            <Shell/>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path = "/about" element = {<AboutPage/>}/>
                <Route path = '/projects/*' element = {<ProjectPage/>}/>
                <Route path = "/blog/*" element = {<BlogPage/>}/>
            </Routes>
      </HashRouter>
      </div>
  );
}

export default App;
