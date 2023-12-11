
import { useState } from 'react';
import { useEffect } from 'react';
import React, { Component } from 'react'
import ClientInfo from "../components/ClientInfo.tsx";


function List() {
    const [data, setData] = useState([]);
    
    const handleGetData = () => {
        const optionsGet = {
        
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            
        };
    
        fetch('https://localhost:7205/api/Client', optionsGet)
            // .then(response => response.json())
            // .then(json => setData(json))
            // .catch(console.error);
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => {
            // Обработка ошибок
            console.error('Error:', error);
        });

        
    }

    useEffect(() => {
        handleGetData();
    }, []);
    

    const handleDeleteData = (id) => {
        
        
        const optionsDelete = {
        
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            
        };
        console.log(id);
        fetch('https://localhost:7205/api/Client/' + id, optionsDelete)
            .then(response => {
                if (response.ok) {
                // Успешное удаление данных
                console.log('Данные успешно удалены');
                handleGetData();
                } else {
                // Обработка ошибки, если требуется
                console.log('Ошибка при удалении данных');
                }
            })
            .catch(error => {
                // Обработка ошибки, если требуется
                console.log('Ошибка при удалении данных:', error);
            });
    };
    

    return (
        <div>
            {data.map(post => 
                <div key = {post.id}>
                    <ClientInfo post = {post} handleDeleteData={handleDeleteData}/>          
                </div>
            )}
        </div>
    );
}

export default List