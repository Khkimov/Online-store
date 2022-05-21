import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import  Row from "react-bootstrap/Row";
import { Card, ListGroup } from "react-bootstrap";
import { Context } from "..";


const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <ListGroup horizontal>
      {device.brands.map(brand => 
        <ListGroup.Item
        style={{cursor: 'pointer'}}
        key={brand.id}
        className="p-3"
        onClick={() => device.setSelectedBrand(brand)}
        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </ListGroup.Item>
        )}
    </ListGroup>
  );
});

export default BrandBar;
