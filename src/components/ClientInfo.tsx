import { Form, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import React, { Component } from 'react'
import { TiDelete } from "react-icons/ti";
import { type } from "os";




const ClientInfo = ({handleDeleteData, post}) =>  {

        return (
            <div >
                {post.name}, {post.phone_number} 
                <TiDelete className='styleIcons' onClick={() => {
                    handleDeleteData(post.id);
                    window.location.reload();
                    }}></TiDelete>
            </div>
        );
    
};

export default ClientInfo