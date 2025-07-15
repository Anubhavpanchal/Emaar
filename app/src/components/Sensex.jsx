import React from 'react'

const data = [
  { label: 'NIFTY BANK', value: '227383.31', change: '+1.5%' },
  { label: 'NFTY50', value: '362492.28', change: '-1.5%' },
  { label: 'SENSEX', value: '456394.46', change: '+1.5%' },
  { label: 'NIFTY IT', value: '364872.31', change: '-1.5%' },
  { label: 'BSE SMALL CAP', value: '759847.11', change: '+1.5%' },
  { label: 'NIFTY MID CAP', value: '374859.10', change: '+1.5%' },
  { label: 'NIFTY NEXT 50', value: '579598.01', change: '+1.5%' },
  { label: 'NIFTY 100', value: '374902.81', change: '+1.5%' },
]

const Sensex = () => {
  return (
    <div
      className="bg-light px-2 py-2 mb-3"
      style={{
        // left:20,
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="d-flex flex-wrap flex-sm-nowrap justify-content-start align-items-center overflow-auto px-1 py-1"
        style={{ fontSize: '0.75rem', gap: '12px' }}
      >
        {data.map((item, index) => (
          <div
            key={item.label}
            className="d-flex flex-column justify-content-center px-2"
            style={{
              minWidth: '135px',
              borderRight: index !== data.length - 1 ? '1px solid #e0e0e0' : 'none',
            }}
          >
            <div className="d-flex align-items-center justify-content-between" style={{ fontSize: '0.72rem' }}>
              <span className="text-muted" style={{ fontSize: '0.65rem' }}>
                {item.label}
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="fw-semibold" style={{ fontSize: '0.8rem' }}>
                {item.value}
              </span>
              <span
                className={`badge px-2 py-1 ms-2 ${
                  item.change.startsWith('+')
                    ? 'text-success bg-success-subtle'
                    : 'text-danger bg-danger-subtle'
                }`}
                style={{ fontSize: '0.65rem' }}
              >
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sensex