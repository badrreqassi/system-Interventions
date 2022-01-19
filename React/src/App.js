import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/Notification/notification.css";
import "../src/components/Calendar/calendar.css";
import "../src/App.css";
import "../src/components/Login/login.css";
import "../src/components/My Acount/account.css";
import "../src/components/Operation/operation.css";
import MyApp from "./pages/MyApp";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: "buttom center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

function App() {
  return (
    <div>
      <AlertProvider template={AlertTemplate} {...options}>
        <MyApp />
      </AlertProvider>
    </div>
  );
}

export default App;
//  <Login/>
