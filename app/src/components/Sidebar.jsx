import { Link, useLocation } from 'react-router-dom'
import Err from '../page/Err'
import {
  HomeOutlined,
  CalendarToday,
  AccessTime,
  DomainVerification,
  DescriptionOutlined,
  DomainAddOutlined,
  SupportAgent,
  Inventory2,
  MoreHorizOutlined
} from '@mui/icons-material'

const links = [
  { path: '/', name: <>Home</>, icon: HomeOutlined },
  { path: '/Err', name: <>Leave<br />tracker</>, icon: CalendarToday },
  { path: '/time', name: <>Time<br />Tracker</>, icon: AccessTime },
  { path: '/att', name: <>Attendance</>, icon: DomainVerification },
  { path: '/file', name: <>Files</>, icon: DescriptionOutlined },
  { path: '/org', name: <>Organization</>, icon: DomainAddOutlined },
  { path: '/ser', name: <>Service<br />Request</>, icon: SupportAgent },
  { path: '/stat', name: <>Stationary<br />Request</>, icon: Inventory2 },
  { path: '/more', name: <>More</>, icon: MoreHorizOutlined }
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <div
      className="d-flex flex-column text-white"
      style={{ width: 60, minHeight: '100vh', backgroundColor: '#0b0442', margin: 0, padding: 0 , position: 'fixed', left: 0, top: 54,  zIndex: 1040}}
    >
      <ul className="nav flex-column w-100 m-0 p-0">
        {links.map(link => {
          const isActive = location.pathname === link.path
          const Icon = link.icon
          return (
            <li key={link.path} className="nav-item m-0 p-0">
              <Link
                to={link.path}
                className={`nav-link d-flex flex-column justify-content-center align-items-center m-0 p-0 ${isActive ? 'bg-secondary text-white' : 'text-secondary'}`}
                style={{ minHeight: 56, fontSize: 11 }}
              >
                <Icon fontSize="small" className="sidebar-icon" />
                <span className="sidebar-text" style={{ fontSize: 9, lineHeight: 1.1 }}>
                  {link.name}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <style>
        {`
          .nav-link:hover .sidebar-icon,
          .nav-link:hover .sidebar-text {
            color: white !important;
            text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
          }

          .nav, .nav-item, .nav-link {
            margin: 0 !important;
            padding: 0 !important;
          }
        `}
      </style>
    </div>
  )
}
