import '../../node_modules/primeflex/primeflex.css'
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const StyledDropdown = styled.div`
.p-inputtext {
    padding: 4px 8px;
    font-size: 0.1em;
}
`

const NumberData = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div class="grid grid-nogutter" >
            <div class="col" style={{textAlign: 'start', alignSelf: 'center'}} >
                title
            </div>
            <StyledDropdown class="col-5" >
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" style={{ width: '100%' }}
                    placeholder="當日"/>
            </StyledDropdown>
            <div class='col-12' style={{textAlign: 'start', fontSize: '2em', fontWeight: '600', marginBottom: '16px'}} >
                11111 people
            </div>
            <div class='col-12' style={{textAlign: 'start'}} >
                <div class='pi pi-arrow-up' style={{fontSize: '0.1em', color: 'green', fontWeight: '550'}} />
                +11111跟昨天相比
            </div>
        </div>
    )
}

export default NumberData