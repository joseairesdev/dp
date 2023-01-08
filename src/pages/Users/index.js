import React, { useState } from 'react';
import * as C from './styled';
import Main from '../../components/templates/Main';
import Input from '../../components/Input';
import Card from '../../components/Card';
import ButtonSubmit from '../../components/Buttonsubmit';




const Users = () =>
{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([])


    const handlerUsers = (e) =>
    {
        e.preventDefault()
        const newUsers =
        {
            name: name,
            email: email
        }
        setUsers(prevState => [...prevState, newUsers])
        setName('')
        setEmail('')
    }


    return (
        <Main>
            <C.Container>
                <C.ContainerForm onSubmit={handlerUsers} >

                    <div>
                        <Input name="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <Input name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <ButtonSubmit type="submit" title="Adicionar usuarios " />
                </C.ContainerForm>
                <C.CardArea>
                    {users.map((user, index) => (
                        <Card key={index} name={user.name} email={user.email} />
                    ))}
                </C.CardArea>
            </C.Container>
        </Main>
    )
}

export default Users
