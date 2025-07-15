import React from 'react';
import { Card, CardContent, Typography, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import SpeedIcon from '@mui/icons-material/Speed';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const quickLinks = [
  { name: 'Property Protection Plan', icon: <SettingsOutlinedIcon fontSize="small" /> },
  { name: 'Premium Home Coverage', icon: <CalendarMonthIcon fontSize="small" /> },
  { name: 'Tenant Assurance Policy', icon: <GroupAddIcon fontSize="small" /> },
  { name: 'Sustainable Living Protection', icon: <ScreenSearchDesktopIcon fontSize="small" /> },
  { name: 'Elite Community Safeguard', icon: <ReceiptLongIcon fontSize="small" /> },
  { name: 'Real Estate Investment Shield', icon: <SpeedIcon fontSize="small" /> },
  { name: 'Homeowner Assurance Program', icon: <GradingOutlinedIcon fontSize="small" /> },
  { name: 'Smart Property Security Policy', icon: <TravelExploreOutlinedIcon fontSize="small" /> },
  { name: 'Luxury Living Coverage', icon: <PaymentOutlinedIcon fontSize="small" /> },
  { name: 'Residential Safety & Assurance Policy', icon: <CreditCardOutlinedIcon fontSize="small" /> },
];

const Footer = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md')); // md = 900px

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1130,
        margin: '0 auto',
        mt: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // stack on small screens
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      {/* Policies Section */}
      <Card
        sx={{
          flex: '1 1 50%',
          height: 220,
          border: '1px solid #e0e0e0',
          borderRadius: 0,
          padding: 1,
        }}
      >
        <CardContent sx={{ p: 0, m: 0 }}>
          <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Policies</h6>
            </div>
          <Grid container columns={10} spacing={0} sx={{ pl: 2, m: 0 }}>
            {quickLinks.map((item, index) => (
              <Grid
                item
                xs={2}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    width: '90px',
                    height: '70px',
                    backgroundColor: '#f2f2f2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    textAlign: 'center',
                    m: '6px',
                  }}
                >
                  {item.icon}
                  <Typography variant="caption" sx={{ fontSize: 9, mt: 0.3 }}>
                    {item.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Follow Us Section */}
      <Card
        sx={{
          flex: '1 1 50%',
          height: 220,
          border: '1px solid #e0e0e0',
          borderRadius: 0,
          padding: 1,
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Follow Us</h6>
            </div>
       
          <Grid container spacing={2} sx={{ pl: 3, m: 0 }}>
            <Grid item xs={6}>
              <img
                src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg"
                alt="img1"
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'contain',
                  borderRadius: '4px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg"
                alt="img2"
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'contain',
                  borderRadius: '4px',
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Footer;
