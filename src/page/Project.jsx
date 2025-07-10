import React from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>Project id is {id}</h1>
        </div>
    );
}
