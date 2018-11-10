import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

export default ({ item, children }) => (
  <List>
    <ListItem>
      <ListItemText>{item}</ListItemText>
      <ListItemIcon>
        <Button variant="outlined" disabled>
          {children}
        </Button>
      </ListItemIcon>
    </ListItem>
  </List>
);
