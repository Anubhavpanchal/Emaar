import React from 'react'
import './Body.css'

const launchApps = [
  { name: 'Dropbox', icon: 'https://brandlogos.net/wp-content/uploads/2014/09/dropbox-logo.png' },
  { name: 'Zoom', icon: 'https://img.freepik.com/premium-vector/zoom-video-communications-zoom-logo-application-video-communications-video-audio_944081-183.jpg' },
  { name: 'OneDrive', icon: 'https://edtech.unc.edu/wp-content/uploads/sites/1218/2024/03/onedrive_logo_sq.png' },
  { name: 'Word', icon: 'https://static.vecteezy.com/system/resources/previews/017/396/802/non_2x/microsoft-word-mobile-apps-icon-free-png.png' },
  { name: 'PowerPoint', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Microsoft_PowerPoint_2013-2019_logo.svg' },
  { name: 'Teams', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png' },
  { name: 'Outlook', icon: 'https://softwarehubs.b-cdn.net/media/2024/09/Outlook.webp' },
  { name: 'Drive', icon: 'https://www.computerhope.com/issues/pictures/google-drive-logo.png' }
]

const Body = () => {
  return (
    <div className="container py-3">
      <div className="row gy-3">

        {/* Forum */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="custom-card p-2 fixed-card-height">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <div className="d-flex ">
              <div className="start me-2"></div>
              <h6 className="card-title m-0">Forum</h6>
            </div>
            <button className="add overflow-auto">+ Add Post</button>
          </div>

          {/* Post 1 */}
          <div className="blue d-flex gap-2 align-items-start mb-2">
            <div className="img-box">
              <img
                src="https://akm-img-a-in.tosshub.com/sites/dailyo/story/embed/201807/wink_072018073715.jpg"
                alt="Forum"
                className="img-fluid"
              />
            </div>
            <div className="text-box">
              <p className="small mb-1">
                <b> Real estate trends can be unpredictable, and we must adapt our strategies...</b>
              </p>
              <div className="mb-1">
                <button className="tag-btn">real estate</button>
                <button className="tag-btn">trends</button>
                <button className="tag-btn">strategy</button>
              </div>
              <p className="text-muted small mb-0">
                651K Views • 36K Likes • 56 Comments
              </p>
            </div>
          </div>

          {/* Post 2 */}
          <div className="blue d-flex gap-2 align-items-start">
            <div className="img-box">
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/pm-modi-smiling-064650291-16x9_0.jpeg?VersionId=jB9Lbi.Ok_FF1q5NWLNuMtK9MVa7EfRp"
                alt="Forum"
                className="img-fluid"
              />
            </div>
            <div className="text-box">
              <p className="small mb-1">
                <b>Market fluctuations are a constant; we need innovative approaches to ensure our proje...</b>
              </p>
              <div className="mb-1">
                <button className="tag-btn">market</button>
                <button className="tag-btn">real estate</button>
                <button className="tag-btn">management</button>
              </div>
              <p className="text-muted small mb-0">
                142K Views • 19K Likes • 22 Comments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Video */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="custom-card p-2 fixed-card-height">
          {/* <h6 className="card-title mb-2">| Message from CEO</h6> */}
              <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Message from CEO</h6>
            </div>
          <div className="video-box pl-1 pr-1">
            <iframe
              src="https://youtu.be/2avvWaU-UBw?si=Ej7VFK99MLBcFxxX"
              title="CEO Message"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>


      {/* Launchpad */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="custom-card p-2 fixed-card-height">
            <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Launchpad</h6>
            </div>          
            <div className="row g-3 mb-2">
            {launchApps.slice(0, 4).map((app, idx) => (
              <div className="col-3" key={idx}>
                <div className="launch-wrapper text-center">
                  <img src={app.icon} alt={app.name} className="launch-icon" />
                  <small className="launch-label"><b>{app.name}</b></small>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-2">
            {launchApps.slice(4, 8).map((app, idx) => (
              <div className="col-3" key={idx + 4}>
                <div className="launch-wrapper text-center">
                  <img src={app.icon} alt={app.name} className="launch-icon" />
                  <small className="launch-label"><b>{app.name}</b></small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Polls */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="custom-card p-2">
          <div className="d-flex mb-1 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Polls</h6>
            </div> 
          <form className="poll-form">
            <p className="mb-1"><b>Which project should we take?</b></p>
            {["Orochimaru Base", "Sand Village", "Firamsahu Town"].map((option, i) => (
              <div className="form-check" key={i}>
                <input className="form-check-input" type="radio" name="poll" id={`poll${i}`} />
                <label className="form-check-label" htmlFor={`poll${i}`}>{option}</label>
              </div>
            ))}
            <p className='undo'>Undo</p>
            <small className="text-muted d-block mt-2">3 votes • 24 hrs left</small>
          </form>
        </div>
      </div>

      {/* Know Your Team */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="custom-card p-2">
          <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Know Your Team</h6>
            </div> 
        
          <div className="row g-2 justify-content-center pl-1 pr-1">
            {[
              {
                name: "Rahul Verma",
                role: "Design Lead",
                img: "https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg"
              },
              {
                name: "Pooja Sinha",
                role: "UX Researcher",
                img: "https://i.ytimg.com/vi/8p-hs-5tKmM/sddefault.jpg"
              },
              {
                name: "Dorathy O' Keefe",
                role: "Frontend Dev",
                img: "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png"
              },
              {
                name: "Deepak Singh",
                role: "Backend Dev",
                img: "https://media.istockphoto.com/id/538665020/photo/internet-meme-why-you-no-rage-face-3d-illustration.jpg?s=612x612&w=0&k=20&c=5D_g8Jy8kqg5Op2bb4RvcH8_6y0HGPqt29TKDrEqLyM="
              },
              {
                name: "Sanjay Malhotra",
                role: "Project Manager",
                img: "https://m.media-amazon.com/images/I/813kqvYoRfL.png"
              },
              {
                name: "View All >",
                role: "__",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5T7oqtpUzxXi0j7rVnxziYq_iEeKmyhY5pA&s"
              }
            ].map((member, i) => (
              <div className="col-4 text-center" key={i}>
                <div className="team-box">
                  <img src={member.img} alt={member.name} className="team-avatar mb-1" />
                  <small className="fw-bold d-block">{member.name}</small>
                  <small className="text-muted">{member.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Survey */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="custom-card p-2">
          <div className='survey'>
              <div className="d-flex mb-2 ">
              <div className="start me-2"></div>
              <h6 className="card-title mb-0">Survey</h6>
            </div> 
            <p><b>Have you uploaded the financial documents for year 2023-24 on the portal?</b></p>
            <form>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="survey" id="survey1" />
                <label className="form-check-label" htmlFor="survey1">Yes, I have uploaded the documents</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="survey" id="survey2" />
                <label className="form-check-label" htmlFor="survey2">No,I haven't uploaded yet</label>
              </div>
              <button className="next">Next</button>
            </form>
          </div>
        </div>
      </div>




    </div>
    </div >
  )
}

export default Body
