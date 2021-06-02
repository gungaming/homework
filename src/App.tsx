import StudentBoard from 'Components/StudentBoard';
import StudentInput from 'Components/StudentInput';
import { AppProvider } from 'Context/AppContext';
import './App.css';

function App(){

  return(  
    <AppProvider>
      <StudentInput />
      <StudentBoard />
    </AppProvider>
  );
}

export default App;