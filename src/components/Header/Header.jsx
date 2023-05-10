import logo from ''
import './Navbar.css'
import React from 'react'

function Header() {
  return (
    <div className='Header'>
      <div className="conatiner">
          <nav className='nav'>
          <div className='nav_left'>
            <img src={logo} alt="" />
            <h2>Behoof</h2>
            <h3>Лучшие цены <br />в интернет-магазинах </h3>
          </div>
          <div className='nav_right'>
            <select>
              <option value="">Каталог товаров</option>
              <option value="">компания</option>
              <option value="">о кампании</option>
            </select>
            <input type="text" placeholder='Поиск товаров'/>
            <button><i class="bi bi-heart"></i></button>
            <button><i class="bi bi-bar-chart"></i></button>
            <button><i class="bi bi-person"></i></button>
          </div>
          </nav>
      </div>
    </div>
  )
}

export default Header