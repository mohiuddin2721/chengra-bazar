import React from 'react'
import Notice from './Notice'
import TopNav from './TopNav'
import MiddleNav from './MiddleNav'

function Header() {
  return (
    <div>
      <Notice />
      <TopNav />
      <MiddleNav />
    </div>
  )
}

export default Header