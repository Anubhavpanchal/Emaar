import React, { useState } from 'react'
import './BodyB.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { bottom } from '@popperjs/core';

const rewards = [
  {
    name: "Karan Ahlawat",
    desc: "Achieved Sales Target",
    value: "105cr",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Kiara Blakely",
    desc: "Achieved Sales Target",
    value: "265cr",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Seema Agarwal",
    desc: "Achieved Sales Target",
    value: "89cr",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
]

const faqs = [
  {
    question: "Where Can I Find HR Policy Documents?",
    answer: 'You Can Find HR Policy Documents Under The "Files" Section On The Internet, Within The "HR Policies" Folder.'
  },
  {
    question: "How To Apply For Annual Leave?",
    answer: 'You Can Find HR Policy Documents Under The "Files" Section On The Internet, Within The "HR Policies" Folder.'
  },
  {
    question: "How Do I Submit Expense Reimbursement Requests?",
    answer: 'You Can Find HR Policy Documents Under The "Files" Section On The Internet, Within The "HR Policies" Folder.'
  },
  {
    question: "How Can I Update Personal Employee Details?",
    answer: 'You Can Find HR Policy Documents Under The "Files" Section On The Internet, Within The "HR Policies" Folder.'
  },

];

const BodyB = () => {
  const [active, setActive] = useState(null);
  const [mainIndex, setMainIndex] = useState(1);
  const total = rewards.length;

  const prev = () => setMainIndex((mainIndex - 1 + total) % total);
  const next = () => setMainIndex((mainIndex + 1) % total);

  const getIndex = (offset) => (mainIndex + offset + total) % total;
  return (
    <div className="container">
      <div className="row gy-3">
        {/* New Employees */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bcard p-2">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">New Employees</h6>
            </div>
            {[{ name: "Suresh Kanan", id: "EM348202", date: "27 Sep, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXdUCKRM9ePsnNGrM10RJ7S8MtnvUi9Hh7A&s" }, { name: "Kalash Nema", id: "EM348202", date: "28 Sep, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GxvmsuV4ISdGi3AFsZYi9nmZKTezDyaVEA&s" }, { name: "Soha Kavish Rai", id: "EM348202", date: "29 Sep, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuYYXrkgFchxdH0cPQMwIfr2zj48PI85QfQ&s" }].map((member, i) => (
              <div className="new" key={i} style={{ padding: 0, margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 0, margin: 0, gap: 0 }}>
                  <img src={member.img} alt={member.name} className="team-avatar" style={{ margin: 0, padding: 0 }} />
                  <span style={{ margin: 0, paddingLeft: 18, padding: 4, display: 'inline-block', flex: 1 }}>
                    <small className="e-new">{member.name}</small><br />
                    <small className="text-muted">{member.id}</small><br />
                    <small className="text-muted">{member.date}</small>
                  </span>
                  <ChatBubbleOutlineIcon className="chat-i" style={{ margin: 0, padding: 0 }} />
                </div>
                <hr style={{ margin: 0, padding: 0 }} />
              </div>
            ))}
          </div>
        </div>


        {/* Rewards & Recognition */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bcard p-2 position-relative">
            <div className="d-flex mb-0 align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="start me-2"></div>
                <h6 className="card-title mb-1">Rewards & Recognition</h6>
              </div>
            </div>

            <div className="rewards-wrapper d-flex justify-content-between align-items-center position-relative">
              {/* Left Arrow */}
              <button
                onClick={prev}
                className="arrow-btn left-arrow"
                aria-label="Previous"
              >
                &#8249;
              </button>

              {/* Left Card */}
              <div className="reward-card text-center opacity-50">
                <img
                  src={rewards[getIndex(-1)].img}
                  alt={rewards[getIndex(-1)].name}
                  className="reward-img"
                />
                <div className="reward-name">{rewards[getIndex(-1)].name}</div>
                <div className="reward-desc">{rewards[getIndex(-1)].desc}</div>
                <div className="reward-value">{rewards[getIndex(-1)].value}</div>
              </div>

              {/* Center Card - Main */}
              <div className="reward-card main-card text-center">
                <img
                  src={rewards[getIndex(0)].img}
                  alt={rewards[getIndex(0)].name}
                  className="reward-img"
                />
                <div className="reward-name">{rewards[getIndex(0)].name}</div>
                <div className="reward-desc">{rewards[getIndex(0)].desc}</div>
                <div className="reward-value">{rewards[getIndex(0)].value}</div>
              </div>

              {/* Right Card */}
              <div className="reward-card text-center opacity-50">
                <img
                  src={rewards[getIndex(1)].img}
                  alt={rewards[getIndex(1)].name}
                  className="reward-img"
                />
                <div className="reward-name">{rewards[getIndex(1)].name}</div>
                <div className="reward-desc">{rewards[getIndex(1)].desc}</div>
                <div className="reward-value">{rewards[getIndex(1)].value}</div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={next}
                className="arrow-btn right-arrow"
                aria-label="Next"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>


        {/* FAQs */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bcard p-2">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">FAQs</h6>
            </div>
            {/* <h6 className="card-title mb-2">| FAQs</h6> */}
            {faqs.map((faq, i) => (
              <div className='bfaq' key={i} style={{ padding: 2, margin: 3 }}>
                <div
                  onClick={() => setActive(i === active ? null : i)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                >
                  <p style={{ margin: 0, fontSize: 13, flex: 1, fontWeight: 500 }}>{faq.question}</p>
                  <b style={{ fontSize: 16 }}>
                    {active === i ? '-' : '+'}
                  </b>
                </div>
                {i !== faqs.length - 1 && <hr style={{ margin: '5px 0' }} />}
                {active === i && faq.answer && (
                  <p style={{ margin: '5px 0 0', fontSize: 10, color: '#555' }}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Upcoming Events*/}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bcard p-2">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Upcoming Events</h6>
            </div>
            {[{ data: "Sep 24", name: "Cybersecurity Awareness Training", id: "IT Department", date: "Category" }, { data: "Sep 25", name: "Branding Strategy Workshop", id: "Marketing and Communications", date: "Category" }, { data: "Sep 20", name: "Customer Engagement Forum", id: "Marketing and Communications", date: "Category" }].map((member, i) => (
              <div className="new" key={i} style={{ padding: 0, margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 0, margin: 0, gap: 0 }}>
                  <p className='bdiv' >{member.data}</p>
                  <span style={{ margin: 0, paddingLeft: 10, padding: 4, display: 'inline-block', flex: 1 }}>
                    <small className="e-new">{member.name} </small><br />
                    <small className="text-muted">{member.id}</small><br />
                    <small className="text-muted">{member.date}</small>
                  </span>

                </div>
                <hr style={{ margin: 0, padding: 0 }} />
              </div>
            ))}
          </div>
        </div>


        {/* Upcoming Birthdays & Anniversaries*/}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bcard p-2">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Upcoming Birthdays & Anniversaries</h6>
            </div>
            {[{ name: "Royesh Erdman", id: "EM348202", date: "27 Sep, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXdUCKRM9ePsnNGrM10RJ7S8MtnvUi9Hh7A&s" }, { name: "Kristen Koffman", id: "EM348202", date: "28 Sep, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GxvmsuV4ISdGi3AFsZYi9nmZKTezDyaVEA&s" }, { name: "Aaron Vandervort", id: "EM348202", date: "29 Sep, 2024", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuYYXrkgFchxdH0cPQMwIfr2zj48PI85QfQ&s" }].map((member, i) => (
              <div className="new" key={i} style={{ padding: 0, margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 0, margin: 0, gap: 0 }}>
                  <img src={member.img} alt={member.name} className="team-avatar" style={{ margin: 0, padding: 0 }} />
                  <span style={{ margin: 0, paddingLeft: 18, padding: 4, display: 'inline-block', flex: 1 }}>
                    <small className="e-new">{member.name}  🎂</small><br />
                    <small className="text-muted">{member.id}</small><br />
                    <small className="text-muted">{member.date}</small>
                  </span>
                  <ChatBubbleOutlineIcon className="chat-i" style={{ margin: 0, padding: 0 }} />
                </div>
                <hr style={{ margin: 0, padding: 0 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Holidays*/}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bcard p-2">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Upcoming Holidays</h6>
            </div>
            {[{ data: "Sep 30", name: "National Day for Truth and Reconciliation" }, { data: "Oct 1", name: "Botswana Day Holiday" }, { data: "Oct 2", name: "Mahatma Gandhi Jayanti" }].map((member, i) => (
              <div className="new" key={i} style={{ padding: 0, margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', paddingTop: 3, paddingBottom: 2, margin: 0, gap: 0 }}>
                  <p className='bdiv'>{member.data}</p>
                  <span style={{ margin: 0, paddingLeft: 20, padding: 4, display: 'inline-block', flex: 1 }}>
                    <small className="e-new">{member.name} </small><br />
                  </span>

                </div>
                <hr style={{ margin: 0, padding: 0 }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default BodyB;
