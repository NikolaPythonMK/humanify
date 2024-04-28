import { DrawerSection } from '@/interfaces/DrawerSection';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RouteIcon from '@mui/icons-material/Route';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PolicyIcon from '@mui/icons-material/Policy';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HelpIcon from '@mui/icons-material/Help';


export let sections: DrawerSection[] = [
    {
        icon: DashboardIcon,
        name: 'Dashboard',
        url: 'dashboard',
    },
    {
        icon: GroupIcon,
        name: 'Employee Directory',
        url: '/home/team',
    },
    {
        icon: PersonAddIcon,
        name: 'Recruitment',
        url: '/recruitment',
    },
    {
        icon: AccessTimeIcon,
        name: "Time and Attendance",
        url: '/time-and-attendance',
    },
    {
        icon: TrackChangesIcon,
        name: 'Performance Management',
        url: '/performance-management',
    },
    {
        icon: RouteIcon,
        name: 'Training and Development',
        url: '/training-and-development',
    },
    {
        icon: MonetizationOnIcon,
        name: 'Benefits and Compensation',
        url: '/benefits-and-compensation',
    },
    {
        icon: PolicyIcon,
        name: 'Policies and Documents',
        url: '/policies-and-documents',
    },
    {
        icon: HandshakeIcon,
        name: 'Employee Engagement',
        url: '/employee-engagement',
    },
    {
        icon: HelpIcon,
        name: 'Help and Support',
        url: '/help-and-support',
    }
];
