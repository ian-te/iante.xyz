import React from 'react'
import packageJson from '/package.json';
import './version.css'


export const Version = () => {
  return (
    <div className="version">
      version: {packageJson.version }
    </div>
  )
}
