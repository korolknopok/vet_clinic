import { Outlet, Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from 'react';


export default function Root() {
    const [modalActive, setModalActive] = useState(false);
    return (
      <>

          <div>
            <form id="search-form" role="search">
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
          </div>
          <nav>
            <ul>
              <li className='ActiveButton' onClick={() => setModalActive(true)}>
                <Link to={`records`}>Записи</Link>
              </li>
            </ul>
          </nav>
        
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }