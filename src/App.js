import { useState } from "react";

import "./App.css";
import ZeidanFamilyTree from "./components/Tree/tree.component";
import LoginPage from "./components/Login/login.component";
import Header from "./components/Header/header.component";
// import MessageForm from "./components/SendMessage/messageForm.component";

function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <div id="body">
      <Header />

      {!authorized ? (
        <LoginPage setAuthorized={setAuthorized} />
      ) : authorized ? (
        <ZeidanFamilyTree />
      ) : null}
    </div>
  );
}

export default App;
