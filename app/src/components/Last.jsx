import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const options = ['wahh kya he kaam kar diya', 'good maja aa gaya'];
const images = [
  "https://assets.mixkit.co/videos/4308/4308-thumb-360-0.jpg",
  "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
  "https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg",
  "https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg",
  "https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700"
];

const Last = () => {
  return (
    <div className="container">
      <div className="row gy-3 justify-content-center">
        {/* Share Feedback */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="bcard p-2 w-100 ">
             <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Share Feedback</h6>
            </div>
            <div className="survey">
              <Autocomplete
                disablePortal
                options={options}
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  fontSize: 12,
                  margin: '0 auto'
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Select category" size="small" />
                )}
              />
              <textarea
                placeholder="Write your feedback here..."
                style={{
                  width: '100%',
                  minHeight: 105,
                  marginTop: 8,
                  marginBottom: 8,
                  padding: 10,
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  fontSize: 14,
                }}
              ></textarea>
              <button className="feedback ">Submit Feedback</button>
            </div>
          </div>
        </div>

        {/* Employee Referrals */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="bcard p-2 w-100 ">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Employee Referrals</h6>
            </div>
            <div className="poll-form text-center " style={{ borderRadius:0  }}>
              <p className="mb-0">
                <b>
                  Get your referral link to invite new members to growing family of Emaar. Get employee benefits on
                  successful enrollment.
                </b>
              </p>
              <a href="#" style={{ display: 'block',marginTop:10, marginBottom: 20, color: 'black'  }}>
                Terms & Conditions
              </a>
              <p>Copy your Personal Referral Link</p>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 300,
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <input
                  placeholder="robin.467858@5685dhkj"
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 36px 8px 10px',
                    textAlign: 'left',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    fontSize: 12,
                  }}
                  readOnly
                />
                <ContentCopyIcon
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#6c63ff'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Know Your Team */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="bcard p-2 w-100 ">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Know Your Team</h6>
            </div>
            <div className="row g-2">
              {images.map((img, idx) => (
                <div className="col-4" key={idx}>
                  <img
                    src={img}
                    alt={`team-${idx}`}
                    className="img-last"
                    style={{
                      width: '100%',
                      height: '90px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Last;
