import './index.scss'
import AllComponents from './components/AllComponents.jsx'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <AllComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
