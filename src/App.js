import './App.css';
import Carlist from './components/Carlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//recharts

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">
            My cars
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
