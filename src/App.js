import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import ItemList from './component/ItemsList';

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  setItems;


  const handleNewItem = (e) => {
    setNewItem(e.target.value);
  }

  const handleAddItem = () => {
    setItems(prev => {
      return [
        ...prev,
        {
          id: new Date().valueOf(),
          name: newItem,
        }
      ]
    });
    setNewItem('');
  }

  return (
    <Main>
      <Typography variant='h3'>Todo app</Typography>
      <TextField onChange={handleNewItem} label='new item' value={newItem} />
      <Button onClick={handleAddItem} variant='outlined'>Add Item</Button>
      <ItemList items={items} />
    </Main>
  );
}

export default App;
