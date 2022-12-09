import "./App.css";
import "primeicons/primeicons.css";
import Dashboard from "./components/layouts/Dashboard-Main/dashboard";
import Footer from "./components/layouts/Footer/footer";
import NavBar from "./components/layouts/Navbar/navbar";
import SideBar from "./components/layouts/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      {/* <DragDropContext onDragEnd={(result, provided) => {
      // TODO: implement onDragEnd
}     }> */}
      <div className="container">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Dashboard />
        </main>
        <div id="sidebar">
          <SideBar />
        </div>
        {/* <footer><Footer/></footer> */}
      </div>
      {/* </DragDropContext> */}
    </div>
  );
}

export default App;
