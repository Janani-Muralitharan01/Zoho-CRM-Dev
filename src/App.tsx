import "./App.css";
import Dashboard from "./components/layouts/Dashboard-Main/dashboard";
import Footer from "./components/layouts/Footer/footer";
import NavBar from "./components/layouts/Navbar/navbar";
import SideBar from "./components/layouts/Sidebar/sidebar";
import QuickCreateSidebar from "../src/components/layouts/Sidebar/quickCreateSidebar";
import DetailSidebar from "../src/components/layouts/Sidebar/detailsidebar";

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
