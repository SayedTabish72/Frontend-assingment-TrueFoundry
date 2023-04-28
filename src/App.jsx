import './App.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Editor from './components/JSONEditor';
import UISchema from './components/PizzaForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function App() {
  return (
    <main>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <div className="App">
            hello
          <JSONEditor />
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          < PizzaForm/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </main>
  )
}
