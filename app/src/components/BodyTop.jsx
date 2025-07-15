import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './BodyTop.css'
import {
  Card, CardContent, Typography, Box, Grid, useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop'
import SpeedIcon from '@mui/icons-material/Speed'
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

const quickLinks = [
  { name: 'ERP', icon: <SettingsOutlinedIcon fontSize="small" />, bg: '#e3f2fd' },
  { name: 'Attendance System', icon: <CalendarMonthIcon fontSize="small" />, bg: '#fce4ec' },
  { name: 'HR', icon: <GroupAddIcon fontSize="small" />, bg: '#f3e5f5' },
  { name: 'Training', icon: <ScreenSearchDesktopIcon fontSize="small" />, bg: '#e8f5e9' },
  { name: 'Scheme & Policies', icon: <ReceiptLongIcon fontSize="small" />, bg: '#fff3e0' },
  { name: 'Performance', icon: <SpeedIcon fontSize="small" />, bg: '#ede7f6' },
  { name: 'IT Service Desk', icon: <GradingOutlinedIcon fontSize="small" />, bg: '#fce4ec' },
  { name: 'Travel', icon: <TravelExploreOutlinedIcon fontSize="small" />, bg: '#e0f7fa' },
  { name: 'Finance', icon: <PaymentOutlinedIcon fontSize="small" />, bg: '#e0f2f1' },
  { name: 'Business Card', icon: <CreditCardOutlinedIcon fontSize="small" />, bg: '#fffde7' },
]

const images = [
  "https://assets.mixkit.co/videos/4308/4308-thumb-360-0.jpg",
  "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
  "https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg",
  "https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700"
]

const BodyTop = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        gap: 2,
        p: 0,
        mt: 1,
      }}
    >
      {/* Swiper Section */}
      <Card
        sx={{
          width: isMobile ? '100%' : 600,
          height: 220,
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`slide-${idx}`}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  margin: 0,
                  padding: 0,
                  borderRadius: 0,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>

      {/* Quick Links Section */}
      <Card
        sx={{
          width: isMobile ? '100%' : 530,
          height: 220,
          border: '1px solid #e0e0e0',
          borderRadius: 0,
          padding: 1,
        }}
      >
        <CardContent sx={{ p: 0, m: 0 }}>
          <div className="d-flex mb-2">
            <div className="start"></div>
            <h6 className="card-title mb-0">Quick Links</h6>
          </div>
          <Grid
            container
            columns={10}
            columnSpacing={0}
            rowSpacing={0}
            className="quick-links-grid"
            sx={{ p: 0, m: 0 }}
          >
            {quickLinks.map((item, index) => (
              <Grid
                key={index}
                gridColumn="span 2"
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  className="quick-links-box"
                  sx={{
                    width: '90px',
                    height: '70px',
                    backgroundColor: item.bg,
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
    </Box>
  );
};

export default BodyTop;