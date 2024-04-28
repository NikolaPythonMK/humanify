"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { sections } from '../../utils/DrawerSections';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export default function HomeLayout({
    children,
} : {
    children: React.ReactNode
}) {

    const drawerSections = sections.map((s, index) => (
        <List key={index}>
            <ListItem disablePadding>               
                <ListItemButton>
                    <ListItemIcon>
                        <s.icon></s.icon>
                    </ListItemIcon>
                    <ListItemText primary={s.name}></ListItemText>
                </ListItemButton>            
            </ListItem>
        </List>
    ))


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />

        {drawerSections}
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText primary='Settings'></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>


      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        { children }
      </Box>
    </Box>
  );
}
