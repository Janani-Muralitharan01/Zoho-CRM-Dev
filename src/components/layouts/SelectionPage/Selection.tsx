import "./Selection.css"
import { useNavigate } from "react-router-dom";
const Selection = () => {
  const navigate = useNavigate();
     return (
     <div>
      <div className="App">
          <div className="container">
            <nav>
             <div>
              <span className="flex ml-3 cursor-pointer" onClick={() => navigate("/login")}><i className="pi pi-arrow-left"  style={{'fontSize': '2em'}}></i></span>
             </div>
            </nav>
            <main>
              main
            </main>
            <div id="sidebar">
              <div>
              <div className="text-50" onClick={() => navigate("/dashboard")}>Form Link</div>
              </div>
              
            </div>
          </div>
        </div>
     </div>
     );
   }
   
   export default Selection;
   