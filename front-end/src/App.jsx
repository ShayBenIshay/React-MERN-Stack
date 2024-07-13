import { getEmployees } from "./api";
import Login from "./components/Login";
import Employee from "./components/Employee";

function App() {
  const exampleEmployeeId = "66913ba786ff94f12c2b2826";

  return (
    <>
      <h1>My App</h1>
      <Login />
      <Employee employeeId={exampleEmployeeId} />
    </>
  );
}

export default App;
