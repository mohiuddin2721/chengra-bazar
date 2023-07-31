import React, { useContext, useState } from 'react';
import '../../Styles/Dashboard.css'
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
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MdTipsAndUpdates, MdDashboard, MdManageAccounts, MdAdminPanelSettings, MdNotifications } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { TbSlash } from 'react-icons/tb';
import { FcManager } from 'react-icons/fc';
import { AiTwotoneSetting } from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthProvider';

const dashboardLink = [
    { name: 'Manage account', to: '/dashboard/Manage_account', icon: <MdManageAccounts /> },
    { name: 'My order', to: '/dashboard/My_order', icon: <InboxIcon /> },
    { name: 'My cart', to: '/dashboard/My_cart', icon: <FaCartArrowDown /> },
    { name: 'Dashboard', to: '/dashboard', icon: <MdDashboard /> },
    { name: 'Upload & Update', to: '/dashboard/Upload_&_Update', icon: <MdTipsAndUpdates /> },
    { name: 'Administration', to: '/dashboard/Administration', icon: <MdAdminPanelSettings /> },
    { name: 'Management', to: '/dashboard/Management', icon: <FcManager /> },
    { name: 'Send mail', to: '/dashboard/Send_mail', icon: <BiMailSend /> },
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
    const { user } = useContext(AuthContext)
    let location = useLocation();
    const path = (location?.pathname?.split('/')[2])
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [isOpenDashboardSetting, setIsOpenDashboardSetting] = useState(false)
    // console.log(user)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div
            style={{ background: "linear-gradient(180deg, rgba(1,10,79,1) 0%, rgba(11,11,207,1) 45%, rgba(6,1,95,1) 100%)" }}
            className='min-h-[120vh]'
        >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    sx={{ height: '50px', backgroundColor: '#06015f' }}
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
                            <Typography variant='h8' sx={{ display: 'block' }}>{path ? path : 'Dashboard'}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Link to='/' className='underline'> Home </Link>
                            <p className='mx-4'>
                                <AiTwotoneSetting
                                    onClick={() => setIsOpenDashboardSetting(true)}
                                    className='cursor-pointer' />
                            </p>
                            <p>
                                <MdNotifications className='cursor-pointer' />
                            </p>
                        </Box>
                    </Box>
                </AppBar>

                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{
                        '.MuiDrawer-paper': {
                            backgroundColor: '#041389',
                            color: 'white',
                        },
                    }}
                >
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div">
                            Chengra Bazar
                        </Typography>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{ color: 'white' }}
                        >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <Box sx={{ marginTop: '10px' }}>
                        <img
                            alt="Remy Sharp"
                            src={user?.photoURL}
                            // src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1687550957~exp=1687551557~hmac=c9a037492cac003c0d33ce479cf2a7bf740ae39e41af8628f4cefaa1776aad1e"
                            className='w-full'
                            style={{ borderRadius: "159px 159px 0px 0px" }}
                        />
                    </Box>
                    <List>
                        {
                            dashboardLink?.slice(0, 3).map((link, index) => (
                                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                    <Link to={`${link?.to}`}>
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
                                                <i className='text-2xl text-white'>{link?.icon}</i>
                                            </ListItemIcon>
                                            <ListItemText primary={link.name} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </List>
                    <Divider />
                    <List>
                        {
                            dashboardLink?.slice(3).map((link, index) => (
                                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                    <Link to={`${link?.to}`}>
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
                                                <i className='text-2xl text-white'>{link?.icon}</i>
                                            </ListItemIcon>
                                            <ListItemText primary={link?.name} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </List>
                    <div className="pyramid-loader mb-[20px]">
                        <div className="pyramid_wrapper">
                            <span className="pyramid_side pyramid_side1"></span>
                            <span className="pyramid_side pyramid_side2"></span>
                            <span className="pyramid_side pyramid_side3"></span>
                            <span className="pyramid_side pyramid_side4"></span>
                            <span className="pyramid_shadow"></span>
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    anchor='right'
                    open={isOpenDashboardSetting}
                // onClose={toggleDrawer(anchor, false)}
                >
                    <p>setting</p>
                    <p>setting</p>
                    <p>setting</p>
                    <p>setting</p>
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