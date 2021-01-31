import React from 'react'
import packageJson from '/package.json';


export const Version = () => {
  return (
    <div>
      version: {packageJson.version }
    </div>
  )
}
