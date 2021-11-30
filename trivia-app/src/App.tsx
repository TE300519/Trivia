

import { Outlet } from 'react-router';
import NavBar from  './components/NavBar';


const App: React.FC = () => {
    return (
    <main>
      <NavBar/>
      <Outlet/>
    </main>
    );
  };

  export default App;