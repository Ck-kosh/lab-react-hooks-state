import React from 'react'

const DarkModeToggle = ({darkMode, toggleDarkMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Toggle light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
