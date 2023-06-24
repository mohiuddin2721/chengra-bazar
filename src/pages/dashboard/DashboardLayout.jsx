import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BackupIcon from '@mui/icons-material/Backup';
import { Link, Outlet } from 'react-router-dom';
import { MdDashboard, MdManageAccounts, MdAdminPanelSettings, MdNotifications } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { TbSlash } from 'react-icons/tb';
import { GrDocumentUpdate, GrUserManager } from 'react-icons/gr';
import { AiTwotoneSetting } from 'react-icons/ai';

const dashboardLink = [
    { name: 'Manage account', to: '/dashboard/Manage_account', icon: <i><MdManageAccounts /></i> },
    { name: 'My order', to: '/dashboard/My_order', icon: <i><InboxIcon /></i> },
    { name: 'My cart', to: '/dashboard/My_cart', icon: <i><FaCartArrowDown /></i> },
    { name: 'Dashboard', to: '/dashboard', icon: <i><MdDashboard /></i> },
    { name: 'Upload & Update', to: '/dashboard/Upload_&_Update', icon: <i><GrDocumentUpdate /></i> },
    { name: 'Administration', to: '/dashboard/Administration', icon: <i><MdAdminPanelSettings /></i> },
    { name: 'Management', to: '/dashboard/Management', icon: <i><GrUserManager /></i> },
    { name: 'Send mail', to: '/dashboard/Send_mail', icon: <i><BiMailSend /></i> },
]

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // left short bar for small devices 
    width: `calc(${theme.spacing(0)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DashboardLayout() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    sx={{ height: '50px' }}
                    position="fixed"
                    open={open}
                >
                    <Box sx={{ display: 'flex', width: '90%', marginX: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1
                            }}
                        >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 1,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Link to='/dashboard'>
                                <BackupIcon /> <TbSlash className='inline text-xl font-bold' />
                            </Link>
                            <Typography variant='h8' sx={{ display: 'block' }}>Dashboard</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Link to='/' className='underline'> Home </Link>
                            <p className='mx-4'>
                                <AiTwotoneSetting className='cursor-pointer' />
                            </p>
                            <p>
                                <MdNotifications className='cursor-pointer' />
                            </p>
                        </Box>
                    </Box>
                </AppBar>

                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div">
                            Chengra Bazar
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <Box sx={{ marginTop: '10px' }}>
                        <img
                            alt="Remy Sharp"
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1687550957~exp=1687551557~hmac=c9a037492cac003c0d33ce479cf2a7bf740ae39e41af8628f4cefaa1776aad1e"
                            className='w-full'
                            style={{ borderRadius: "159px 159px 0px 0px" }}
                        />
                    </Box>
                    <List>
                        {
                            dashboardLink?.slice(0, 3).map((link, index) => (
                                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon

                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                    <Divider />
                    <List>
                        {
                            dashboardLink?.slice(3).map((link, index) => (
                                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {link?.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link?.name} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}