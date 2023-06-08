import { Context } from './AuthContext';
import { signInwithGoogle } from './Firebase'

function App() {
  const context = Context()
  return(
    <>
     <button onClick={signInwithGoogle}>Sign up with Google</button>
    </>
  );
}

export default App;
