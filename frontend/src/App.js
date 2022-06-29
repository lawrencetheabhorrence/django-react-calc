import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import './App.css';
import axios from "axios";

function App() {
  const [history, setHistory] = useState([])
  const [calc, setCalc] = useState("")

  useEffect(() => {
    axios.get("/api/history").then(res => { setHistory(res.data) })
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    const res = evaluate(calc)
    const data = { content: calc, result: res }
    axios.post("/api/history/", data).then((res) =>
      {
        setHistory(history.concat(res.data))
        setCalc("")
      }
    )
  }


  return (
    <Container maxwidth="sm">
    <TextField id="calculation" label="Enter calculation here" variant="filled" value={calc}
    onChange={(e)=>setCalc(e.target.value)}/>
    <Button id="calc_submit" variant="contained" onClick={handleSubmit}>Submit</Button>
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
    </Container>
  )

}

export default App;
