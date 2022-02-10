import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

const ItemsList = ({ items }) => {
  return (
    <>
      <List>
        {items.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array,
};

ItemsList.defaultProps = {
  items: [],
};

export default ItemsList;
