import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado'
import { operaciones } from '../helpers/Operaciones';


const NumberInput = () => {
    
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    });
    
    const {handleChange, 
        suma, 
        resta, 
        multi, 
        divi, 
        numero1, 
        numero2,
    } = operaciones(numeros, setNumeros);


    return (
    <>
        <label className="mx-2">
            Número1 : {" "}
            <input 
            name='numero1' 
            onChange={handleChange} 
            value={numero1}
            type="number" 
            />
        </label>
        <label className='mx-2'>
            Número2 : {" "}
            <input 
            name='numero2' 
            value={numero2}s
            onChange={handleChange} 
            type="number" 
            />
        </label>

        <Resultado operacion="Suma" calculo={suma()} />
        <Resultado operacion="Resta" calculo={resta()} />
        <Resultado operacion="Multiplicación" calculo={multi()} />
        <Resultado operacion="División" calculo={divi()} />

    </>
    );
};

NumberInput.propTypes = {
    name: PropTypes.number,
}

export default NumberInput;