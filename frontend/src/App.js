import { useState, useEffect } from 'react';
import { getHistory, addHistory } from './services.js';
import { evaluate } from 'mathjs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import './App.css';

function App() {
  const [history, setHistory] = useState([])
  const [calc, setCalc] = useState("")

  useEffect(() => {
    getHistory().then(res => { setHistory(res.data) })
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    const res = evaluate(calc)
    const data = { content: calc, result: res }
    addHistory(data)
    setCalc("")
  }


  return (
    <div>
    <FormControl onSubmit={handleSubmit}>
      <Input id="calculation" />
    </FormControl>
    <List>
    {history.map(h => { 
      return (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`${h.content} = ${h.result}`} />
          </ListItemButton>
        </ListItem>
      )})}
    </List>
    </div>
  )

}

export default App;
