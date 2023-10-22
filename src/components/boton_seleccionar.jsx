import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BotonSeleccionar() {
    const [isSelected, setIsSelected] = useState(false);

    const handleButtonClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className='buttons'>
            <button onClick={handleButtonClick}>
                {isSelected ? 'Seleccionado' : 'Seleccionar'}
            </button>
        </div>
    );
}

export default BotonSeleccionar;