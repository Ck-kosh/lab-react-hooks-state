import { dark } from '@mui/material/styles/createPalette'
import React from 'react'

const DarkModeToggle = ({darkMode, toggleDarkMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default DarkModeToggle
