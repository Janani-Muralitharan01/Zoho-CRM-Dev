import './App.css';
import Dashboard from './components/layouts/Dashboard-Main/dashboard';
import Footer from './components/layouts/Footer/footer';
import NavBar from './components/layouts/Navbar/navbar';
import SideBar from './components/layouts/Sidebar/sidebar';



function App() {
  return (
    <div className="App">
     <div className="container">
          <nav><NavBar/></nav>
          <main><Dashboard/></main>
          <div id="sidebar"><SideBar/></div>
          <footer><Footer/></footer>
      </div>
    </div>
  );
}

export default App;
