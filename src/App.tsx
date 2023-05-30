import { useState } from "react";
import { signInwithGoogle } from './Firebase'

function App() {
  return(
    <>
     <button onClick={signInwithGoogle}>Sign up with Google</button>
    </>
  );
}

export default App;
