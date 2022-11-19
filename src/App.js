import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Monolith from "./pages/Monolith";
import Allesvinyl from "./pages/Allesvinyl";
import HoduCollection from "./pages/HoduCollection";
import SquidGame from "./pages/SquidGame";
import Wanderer from "./pages/Wanderer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/monolith" element={<Monolith />} />
          <Route path="/allesvinyl" element={<Allesvinyl />} />
          <Route path="/hoduCollection" element={<HoduCollection />} />
          <Route path="/squidGame" element={<SquidGame />} />
          <Route path="/wanderer" element={<Wanderer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
