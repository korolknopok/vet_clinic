import dog from '../img/dogLast.jpeg'
import { useState } from 'react';
import Modal from './Modal';



export default function Content() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className='content row'>
            <div className='presentation'>
            <img  src={dog}/>
            </div>

            <div className='blockright'>
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
                <div className='RecordButton' onClick={() => setModalActive(true)}>
                    <div>
                        Записаться на приём 
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <div class="conteiner">
                        <div class="form">
                        <h1>Запись</h1>
                        <form className='formRecord'>
                            <input
                            type="text"
                            required
                            placeholder="Имя"
                            id="name1"
                            class="input"
                            />
                            <input
                            type="number"
                            required
                            placeholder="Номер телефона"
                            id="tel"
                            class="input"
                            />
                            <button id="btn" >Записаться</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    </div>
  )
}
