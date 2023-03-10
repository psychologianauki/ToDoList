import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calender from "./Calender";

const AppRouter = () => (
  <Router>
    <Route path="/Calender" element={Calender} />
  </Router>
);

export default AppRouter;
