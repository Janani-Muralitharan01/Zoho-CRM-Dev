import { Button } from "primereact/button";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar ">
      <div className="untitle">Untitled</div>
      <div className="standard">
        Standard
        <i className="pi pi-cog mr-2 icon"></i>
      </div>

      <button className="buttonStyle"> Cancel </button>
      <button className="buttonStyle"> Save and Close </button>
      {/* <Button label="Save and Close"/> */}
      <Button label="Save" />
    </div>
  );
};

export default NavBar;
