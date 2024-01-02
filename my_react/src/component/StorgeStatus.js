import React, { useState, } from 'react';
import '../../node_modules/primeflex/primeflex.css'
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';

const StorgeStatus = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div class="grid grid-nogutter">
            <div class='col-12 grid grid-nogutter'>
                <div class='col' style={{ alignSelf: 'center' }}>
                    <div>title</div>
                    <div>subtitle</div>
                </div>
                <div class='col-fixed'>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" style={{ width: '100%' }} placeholder="當日" />
                </div>
            </div>
            <div class='col-12' >
                42.4GB
            </div>
            <div class='col-12 grid grid-nogutter' style={{justifyContent: 'center'}} >
                <div class='col-10 grid grid-nogutter' style={{marginTop: '16px'}} >
                    <div class='col-fixed'>
                        <div class='pi pi-video' style={{padding: '0.6em', backgroundColor: 'lightblue', borderRadius: 8}} />
                    </div>
                    <div class='col' style={{justifyContent: 'center', paddingLeft: 8}}  >
                        <div style={{fontSize: '0.8em'}}>
                            影片
                        </div>
                        <div style={{fontSize: '0.6em', color: 'gray'}}>
                            16GB
                        </div>
                    </div>
                    <div class='col' style={{fontSize: '0.8em', alignSelf: 'center'}} >
                        302個文件
                    </div>
                </div>
                <div class='col-10 grid grid-nogutter' style={{marginTop: '16px'}} >
                    <div class='col-fixed'>
                        <div class='pi pi-video' style={{padding: '0.6em', backgroundColor: 'lightblue', borderRadius: 8}} />
                    </div>
                    <div class='col' style={{justifyContent: 'center', paddingLeft: 8}}  >
                        <div style={{fontSize: '0.8em'}}>
                            影片
                        </div>
                        <div style={{fontSize: '0.6em', color: 'gray'}}>
                            16GB
                        </div>
                    </div>
                    <div class='col' style={{fontSize: '0.8em', alignSelf: 'center'}} >
                        302個文件
                    </div>
                </div>
                <div class='col-10 grid grid-nogutter' style={{marginTop: '16px'}} >
                    <div class='col-fixed'>
                        <div class='pi pi-video' style={{padding: '0.6em', backgroundColor: 'lightblue', borderRadius: 8}} />
                    </div>
                    <div class='col' style={{justifyContent: 'center', paddingLeft: 8}}  >
                        <div style={{fontSize: '0.8em'}}>
                            影片
                        </div>
                        <div style={{fontSize: '0.6em', color: 'gray'}}>
                            16GB
                        </div>
                    </div>
                    <div class='col' style={{fontSize: '0.8em', alignSelf: 'center'}} >
                        302個文件
                    </div>
                </div>
                <div class='col-10 grid grid-nogutter' style={{marginTop: '16px'}} >
                    <div class='col-fixed'>
                        <div class='pi pi-video' style={{padding: '0.6em', backgroundColor: 'lightblue', borderRadius: 8}} />
                    </div>
                    <div class='col' style={{justifyContent: 'center', paddingLeft: 8}}  >
                        <div style={{fontSize: '0.8em'}}>
                            影片
                        </div>
                        <div style={{fontSize: '0.6em', color: 'gray'}}>
                            16GB
                        </div>
                    </div>
                    <div class='col' style={{fontSize: '0.8em', alignSelf: 'center'}} >
                        302個文件
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default StorgeStatus