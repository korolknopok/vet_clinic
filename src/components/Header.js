import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>REKS</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Услуги</li>
              <li>Отзывы</li>
              <li>Ветеринары</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
