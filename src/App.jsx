import { db , auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import AppContent from './AppContent';
import './App.css';


function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      {user ? <AppContent/> : <SignIn/>}
    </div>
  );
}

export default App;
