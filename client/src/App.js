import Router from "./Router";
import axios from "axios"
import { UserAuthContext } from "./context/UserAuthContext";
import { CompanyAuthContext } from "./context/CompanyAuthContext";

axios.defaults.withCredentials = true

function App() {
  return (
    <UserAuthContext>
      <CompanyAuthContext>
        <Router />
      </CompanyAuthContext>
    </UserAuthContext>
  );
}

export default App;