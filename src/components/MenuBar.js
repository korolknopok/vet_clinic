import React from 'react'
import { AiFillClockCircle, AiFillPhone, AiFillEnvironment} from 'react-icons/ai'


export default function MenuBar() {
  return (
    <div className='flex-container'>
      <div className='column'>  
        <div className='headerleft'>
            
              <div className='logo'>REKS</div>
              <div className='flex-items item-1'> Про нас </div>
              <div className='flex-items item-2'> Отзывы </div>
              <div className='flex-items item-3'> Ветеринары </div>
            
        </div>
        <div className='presentation'></div>
      </div>
        
      <div className='column'>
        <div className='headerright'>
              <div className='flex-navigation item-4' > <AiFillEnvironment className='styleIcons'/> Г.Томск ул.Елизаровых 74 </div>
              <div className='flex-navigation item-5'> <AiFillClockCircle className='styleIcons'/>Работаем круглосуточно </div>
              <div className='flex-navigation item-6'> <AiFillPhone className='styleIcons' /> +7(950)-585-60-34 </div>  
        </div>
        <div>
          <label className='labelmetod'> 
            <ul>
              NEW
            </ul>
            Современные методы обследования
          </label>
          <label className='labelvetclinic'>
            <div>Круглосуточная</div>
            <div>ветеринарная</div>
            <div>клиника</div>
          </label>
          <label className='labeltext'>
            <div>Работаем со всеми видами животных.</div>
            <div>В штабе работают врачи с большим опытом работы с кошками, собаками, </div>
            <div>а также экзотическими животными. </div>
          </label>
          <div className='RecordButton'>
            <div>
              Записаться на приём
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
