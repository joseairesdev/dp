import styled from 'styled-components';




export const Container = styled.div`
    display: grid;
    grid-template-rows: 100px auto 50px;
    grid-template-columns: 300px auto;
    height: 100vh;
    background-color: #F7F7F7;

.header{
    grid-row: 1;
    grid-column: 1 / 3;
}    
.menu{
    grid-row: 2;
    grid-column: 1;
}
.content{
    grid-column:2;
    grid-row: 2;
}
.footer{
    grid-row: 3;
    grid-column: 1/3;
}

`