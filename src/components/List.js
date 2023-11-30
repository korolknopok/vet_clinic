// import { useState } from 'react';
// import { useEffect } from 'react';
// import React, { Component } from 'react'


// function List() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://localhost:7205/api/Client')
            
//             .then(response => response.json())
//             .then(json => setData(json))
//             .catch(console.error);
//     }, []);

//     return (
//         <div>
//             {data.map(post => <div key={post.id}>{post.name}</div>)}
            
//         </div>
//     );
// }

// export default List