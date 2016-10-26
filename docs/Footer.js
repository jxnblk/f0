
import React from 'react'

const Footer = ({
  colors
}) => {
  const sx = {
    root: {
      color: colors[4],
      backgroundColor: colors[0],
    }
  }

  return (
    <footer
      style={sx.root}
      className='h5 pl3 pr3 pt4 pb4'>
      <a href='https://github.com/jxnblk/f0' className='mr2'>GitHub</a>
      <a href='http://jxnblk.com'>Made by Jxnblk</a>
    </footer>
  )
}

export default Footer

