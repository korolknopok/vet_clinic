import { Form, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import React, { Component } from 'react'
import { TiDelete } from "react-icons/ti";
import { type } from "os";

interface IClientInfo {
    handleDeleteData: (id: string) => void;
    
    post: {
        id : string;
        name: string;
        phoneNumber: string;
    };
}

const ClientInfo: React.FC<IClientInfo> = ({handleDeleteData , post}) =>  {
        
        return (
            <div >
                {post.name}, {post.phoneNumber} 
                <TiDelete className='styleIcons' onClick={() => {
                    handleDeleteData(post.id);
                    }}></TiDelete>
            </div>
        );
    
};

export default ClientInfo