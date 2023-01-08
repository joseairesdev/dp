import React from 'react';
import * as C from './styled';


const Main = (props) =>
{
    return (
        <>

            <C.Container className='content container-fluid'>
                <div className='p-3 mt-3'>
                    {props.children}
                </div>
            </C.Container>
        </>
    )
}

export default Main;
