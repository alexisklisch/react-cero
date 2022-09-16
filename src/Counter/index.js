import { useState } from 'react'
import './Counter.css'

export function Counter(){
    const [ value, setValue ] = useState(0)

    return(
        <div className='increment-container'>
            <button onClick={() => setValue(value + 1)}>Me presionaste {value} veces</button>
            {value >= 50 && value < 100
                ? <p>Llegaste a {value}. ¿Qué pasará cuando llegues a 100?</p>
                : null }
            {value === 100
                ? <p>Nada.</p>
                : null}
        </div>
            
    )
}