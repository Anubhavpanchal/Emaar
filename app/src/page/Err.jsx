import React from 'react'

const Err = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    //   alignItems: 'center',
      height: '90vh', // full screen height
      backgroundColor: '#f8f9fa'
    }}>
      <img
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="404 Not Found"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default Err
