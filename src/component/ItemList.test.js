import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemsList from './ItemsList';

describe('#ItemList Component Test', () => {
  it('should display a list of 3 items given an array of 3 items', () => {
    const items = [
      {
        id: 1,
        name: 'item1',
      },
      {
        id: 2,
        name: 'item2',
      },
      {
        id: 3,
        name: 'item3',
      }
    ];
    render(<ItemsList items={items} />)
    const listOfItems = screen.getAllByRole('listitem');
    expect(listOfItems).toHaveLength(3);
  });
});