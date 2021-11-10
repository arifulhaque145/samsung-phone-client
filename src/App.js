import AuthProvider from "./Main/Context/AuthProvider";
import AllRoutes from "./Main/Routes/AllRoutes";

function App() {
  return (
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  );
}

export default App;
