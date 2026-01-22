import React from 'react';
import { Link } from 'react-router-dom'

const buttonStyle = {
  padding: '0.9rem 1.5rem',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  textAlign: 'center',
  fontWeight: '500',
  transition: 'background-color 0.2s',
}

export function Overview() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>DataWorks</h1>
          <p style={{ fontSize: '1.05rem', color: '#555' }}>
            Your data analysis tool
          </p>
        </div>

        {/* Upload CSV - full width */}
        <Link
          to="/upload"
          style={{
            ...buttonStyle,
            width: '100%',
            fontSize: '1.05rem',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Upload CSV
        </Link>

        {/* Other actions - 2 x X grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          <Link
            to="/analysis"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Analysis
          </Link>

          <Link
            to="/ml-check"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            ML Check
          </Link>

          <Link
            to="/image-tools"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Image Tools
          </Link>

          {/* Yeni component eklersen otomatik aşağı iner */}
        </div>
      </div>
    </div>
  )
}
