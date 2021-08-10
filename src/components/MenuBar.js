import React from 'react'; 
import { Menu } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'; 

function MenuBar() {
    return (
        <div>
        <Menu widths={1} inverted size='huge'>
          <Menu.Item
            name='Lytle Movie Theatre'
            // as={Link}
            to="/"
          />
        </Menu>
      </div>
    )
}

export default MenuBar; 