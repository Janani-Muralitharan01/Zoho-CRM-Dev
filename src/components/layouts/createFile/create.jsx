import { InputSwitch } from "primereact/inputswitch";
import { Avatar } from "primereact/avatar";
import Footer from "./footer";
import { useState, useRef } from "react";
import noImages from "../../../images/noimage.jpg";
import "./create.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import previewTopSideBar from "./previewTopSideBar";
const UntitleImage = () => {
  const [checked1, setChecked1] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [selectedCity1, setSelectedCity1] = useState(null);
  const op = useRef(null);

  const onCityChange = (e) => {
    setSelectedCity1(e.value);
  };
  const cities = [{ name: "Admistrator", code: "NY" }];
  function handlerClick() {
    setSidebar(!sidebar);
  }
  function handletoggle() {
    setChecked1(!checked1);
  }
  return (
    <div>
      <div className="untitlee">
        <div className="boder">
          <span className="relative">
            Untitle image{" "}
            <InputSwitch checked={checked1} onChange={handletoggle} />
            <br />
            <div visible={checked1} onHide={() => setChecked1(!checked1)}>
              <span className="mr-6">
                <img
                  src={noImages}
                  style={{ width: " 96px", height: "74px" }}
                ></img>
              </span>
            </div>
            <span
              className="ellips absolute  createImagePosition"
              onClick={(e) => op.current.toggle(e)}
            >
              <i className="pi pi-ellipsis-h mr-2"></i>
            </span>
          </span>
        </div>
        <div className="preview" onClick={handlerClick}>
          preview
        </div>
      </div>
      <Sidebar
        visible={sidebar}
        position="top"
        style={{ width: "88vw" }}
        onHide={() => setSidebar(!sidebar)}
      >
        <div>
          <div className="flex  justify-content-center">
            <div className="dropdownBorderStyle">
              <span className="flex">
                Preview layout as
                <Dropdown
                  className="ml-2"
                  value={selectedCity1}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel="name"
                  placeholder="Select a City"
                />
              </span>
            </div>
          </div>
        </div>
      </Sidebar>
      <OverlayPanel ref={op}>
        <div>
          Set Permisson <span></span>
        </div>
      </OverlayPanel>
      <Footer />
    </div>
  );
};

export default UntitleImage;
