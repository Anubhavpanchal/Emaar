import React from 'react';
import '../style/Slide.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const announcements = [
  {
    title: "Join us for the Annual Team Building Retreat—connect collaborate with colleagues!",
    date: "27 Sep, 2024",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
  },
  {
    title: "Explore wellness workshops! Enhance well-being with mindfulness fitness sessions.",
    date: "27 Sep, 2024",
    img: "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.jpg?s=612x612&w=0&k=20&c=whMTmOCyOUfNqoNBe8GPlmcNUM-aCfqD-0whdFPQpO4=",
  },
  {
    title: "Celebrate our Success! Attend quarterly awards ceremony outstanding employees.",
    date: "25 Sep, 2024",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VEN308CJcAagduojX_0Ysw7HRIhWnEFP9Q&s",
  },
  {
    title: "Engage in a skills development webinar—boost your career with expert insights and tips!",
    date: "22 Sep, 2024",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  },
  {
    title: "Volunteer Day is here! Give back to the community a positive impact together!",
    date: "21 Sep, 2024",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Business Strategies Meeting – Align your team and plan for Q4 growth!",
    date: "20 Sep, 2024",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Join us for the Annual Team Retreat—connect collaborate with your colleagues!",
    date: "27 Sep, 2024",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
  },
  {
    title: "Explore wellness workshops! Enhance your well-being with fitness sessions.",
    date: "27 Sep, 2024",
    img: "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.jpg?s=612x612&w=0&k=20&c=whMTmOCyOUfNqoNBe8GPlmcNUM-aCfqD-0whdFPQpO4=",
  },
  {
    title: "Celebrate our Success! Attend quarterly ceremony honoring outstanding employees.",
    date: "25 Sep, 2024",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VEN308CJcAagduojX_0Ysw7HRIhWnEFP9Q&s",
  },
];

const Slide = () => {
  return (
    <div className="container py-3">
      <div className="bcard ">
        {/* Header */}
        <div className="title d-flex align-items-center mb-2 " >
          <div className="start "></div>
          <h6 className="card-title m-0">Announcements</h6>
        </div>

        {/* Swiper */}
        <Swiper 
          spaceBetween={5}
          slidesPerView={5}
          navigation
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            576: { slidesPerView: 2.3 },
            768: { slidesPerView: 3.3 },
            992: { slidesPerView: 4.2 },
            1200: { slidesPerView: 5 },
          }}
        >
          {announcements.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card slide-card border-1 " style={{ minWidth: 180 }}>
                <img
                  src={item.img}
                  className="card-img-top pt-2 px-2 "
                  alt="announcement"
                  style={{ height: 100, objectFit: 'cover', borderRadius: '4px' }}
                />
                <div className="card-body d-flex flex-column justify-content-between p-2">
                  <p className="card-text mb-2" style={{ fontSize: '0.8rem' }}>{item.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{item.date}</small>
                    <button className="slide-btn  btn-sm  px-2 py-0" style={{ fontSize: '0.7rem' }}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
