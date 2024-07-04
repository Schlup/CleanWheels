import Router from "./Router";
import axios from "axios"
import { UserAuthContext } from "./context/UserAuthContext";

axios.defaults.withCredentials = true

function App() {
  return (
    <UserAuthContext>
      <Router />
    </UserAuthContext>
  );
}

export default App;