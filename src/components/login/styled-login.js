import styled from 'styled-components'

export const LoginStyle = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .loginFormContainer {
  display: flex; /* Torna os elementos filhos alinhados horizontalmente (row)*/
  justify-content: center;
  align-items: center;
  background-color: rgb( 242, 245, 247);
  border: 2px solid rgb(200, 208, 214);
  height: 365px;
  width: 350px;
  
}

.loginFormChildren{
  display: flex;
  flex-direction: column;

  label {
  font-weight: bold;
  color: rgb(75, 92, 107);
  margin-bottom: -20px;
  }
  .icons{
    font-size: 22px;
    width: 22px;
    color: rgb(66, 79, 91);
    transform: translateY(36px) translateX(10px);
  }
  input{
    height: 50px;
    width: 250px;
    border-radius: 5px;
    border: 2px solid rgb(200, 208, 214);
    font-weight: 900;
    color: rgb(75, 92, 107);
    padding-left: 45px;
    margin-bottom: 20px;
  }
  input:focus{
    outline-color: rgb(101, 88, 245);
  }
  a{
    text-align: center;
    letter-spacing: 0.9px;
    text-decoration: 2px underline rgb(171, 206, 236);
    margin: -5px 0px 30px 0px;
    color: rgb(44, 136, 217);
  }
  button {
    height: 50px;
    width: 250px;
    font-size: large;
    color: rgb(44, 136, 217);
    background-color: white;
    border-radius: 4px;
    border: 2px solid rgb( 171, 206, 236);
    cursor: pointer;
  }
}

`
