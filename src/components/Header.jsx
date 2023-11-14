import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { AiFillClockCircle, AiFillPhone, AiFillEnvironment} from 'react-icons/ai'



export default function Header() {
  

  return (
    <div className='column'>
      <div className='header row'>  
        <div className='headerleft'>
              <div className='logo'>
                <div>
                  REKS
                </div>
              </div>
              <div className='flex-items item-1'>
                <Link to={`contacts/2`}>Про нас</Link>
              </div>
              <div className='flex-items item-2'> Отзывы </div>
              <div className='flex-items item-3'> Ветеринары </div>
              <div className='ActiveButton' id = 'button-group'>
                <input type='radio' value = '1' name = 'button-group' id = 'btn1'/>
                  <label htmlFor='btn1'>
                    <Link to={`contacts/1`}>Записи</Link>
                  </label>
                 
              </div>
              <div id="detail">
                <Outlet />
              </div>
            
        </div>
        <div className='headerright'>
              <div className='flex-navigation item-4' > <AiFillEnvironment className='styleIcons'/> Г.Томск ул.Елизаровых 74 </div>
              <div className='flex-navigation item-5'> <AiFillClockCircle className='styleIcons'/>Работаем круглосуточно </div>
              <div className='flex-navigation item-6'> <AiFillPhone className='styleIcons' /> +7(950)-585-60-34 </div>  
        </div>
      </div>  
      
    </div>
  )
}


