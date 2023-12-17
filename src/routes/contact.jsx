
import { useState } from 'react';
import { useEffect } from 'react';

import React, { Component } from 'react'
import ClientInfo from "../components/ClientInfo.tsx";
import axios from 'axios';
import {ClientApiAxiosParamCreator, ClientApiFactory } from '../json/api.ts';



var f = ClientApiFactory(); 

function List() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await f.apiClientGet();
            const { data } = response;
            setData(data);
        })();
    }, []);
    const handleGetData = () => {
    }

    

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