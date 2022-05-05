import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box  from '@mui/material/Box';

function FriendList() {
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <ListItemText>友達の人数:8人</ListItemText>
      <List
        dense
        sx={{
          height: '870px',
          'overflowY': 'scroll',
          'overflowX': 'hidden',
        }}
      >
        {[0, 1, 2, 3].map((value) => {
          return (
            <ListItem key={value} disablePadding sx={{margin: '5px'}}>
              <ListItemButton sx={{padding: '0', marginBottom: '10px'}}>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${value + 1}`} />
                </ListItemAvatar>
                <ListItemText primary={`name`} />
                <ListItemText primary={`～～してます`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default FriendList;
