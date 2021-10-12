import { useEffect } from "react";
import React from 'react';


const List = ({
    items
}) => {
  const [allItems, setItems] = React.useState(items || [{ label: 'List Item 1' }]);
  fetch('accounts/listing');
  return (
  <ul>
        {(allItems)
            .map(item => <li key={item.label}>{item.label}</li>)
        }
        <li>Fixed</li>
  </ul>
)};


export default List;