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
      <p>友達の人数:8人</p>
      <List
        dense
        sx={{
          width: '100%',
          maxWidth: 360,
          height: '300px',
          'overflowY': 'scroll',
        }}
      >
        {[0, 1, 2, 3,].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton sx={{padding: '0', marginBottom: '10px'}}>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${value + 1}`} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`name`} />
                <ListItemText id={labelId} primary={`～～してます`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default FriendList;
