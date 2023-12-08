// import { Form, Link } from "react-router-dom";
// import { useState } from 'react';
// import { useEffect } from 'react';
// import React, { Component } from 'react'
// import { TiDelete } from "react-icons/ti";


// function List() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://localhost:7205/api/Client')
          
//             .then(response => response.json())
//             .then(json => setData(json))
//             .catch(console.error);
//     }, []);
    

//     const handleDeleteData = (id) => {
        
        
//         const optionsDelete = {
        
//             method: 'DELETE',
//             headers: {
//             'Content-Type': 'application/json',
//             },
            
//         };
//         console.log(id);
//         fetch('https://localhost:7205/api/Client/' + id, optionsDelete)
//             .then(response => {
//                 if (response.ok) {
//                 // Успешное удаление данных
//                 console.log('Данные успешно удалены');
//                 } else {
//                 // Обработка ошибки, если требуется
//                 console.log('Ошибка при удалении данных');
//                 }
//             })
//             .catch(error => {
//                 // Обработка ошибки, если требуется
//                 console.log('Ошибка при удалении данных:', error);
//             });
//     };
    
//     return (
//         <div>
//             {data.map(post => 
//                 <div key = {post.id}>
//                     {post.name}, {post.phone_number} 
//                     <TiDelete className='styleIcons' onClick={() => {handleDeleteData(post.id)}}/>
//                 </div>
//                 )}
//         </div>
//     );
// }

// export default List