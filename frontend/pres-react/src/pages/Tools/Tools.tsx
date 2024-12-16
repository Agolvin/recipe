import { Link } from "react-router-dom";
import { testTools,migrationTools } from "./api";




function ToolsPage() {
    
  
    return (
      <>

        <h1>DEV TOOLS</h1>
        <h3>NE PAS TOUCHER!!!!</h3>

        <ul>
          <li>
            <button onClick={() => testTools()}>Test</button>
          </li>
          <li>
            <button onClick={() => migrationTools()}>/!\ Migration BDD</button>
          </li>
        </ul>

      </>
    );
  }
  
  export default ToolsPage;
  