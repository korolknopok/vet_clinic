// 

// function PostRequest() {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   // Создание объекта с данными для отправки
//   const data = {
//     name: name,
//     phone_number: phoneNumber,
//   };

//   // Опции для Fetch API
//   const options = {
    
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
      
//     },
//     body: JSON.stringify(data),
//   };

//   // Отправка запроса
//   fetch('https://localhost:7205/api/Client', options)
//     .then(response => response.json())
//     .then(data => {
//       // Обработка ответа сервера
//       console.log(data);
//     })
//     .catch(error => {
//       // Обработка ошибок
//       console.error('Error:', error);
//     });
// };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </label>
//         <button type="submit" >Submit</button>
//       </form>
//     </div>
//   );
// };


// export default PostRequest;