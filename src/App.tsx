import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Layouts from "./layouts";
import store from "./redux/stores/stores";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layouts />
        <ToastContainer autoClose={2000} theme="colored" />
      </Provider>
    </>
  );
}

export default App;
