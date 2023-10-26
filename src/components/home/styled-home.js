import styled from 'styled-components'

export const HomeStyle = styled.div`
  display: flex;
  color: rgb(41, 56, 69);
  
  .homeAside {
    background-color: rgb(242, 245, 247);
    /* Remova a altura fixa e use flexbox para preencher o espaço vertical */
    flex: 1;
    width: 15%;
    header {
      background-color: rgb(206, 216, 224);
      font-size: 30px;
      text-align: center;
      padding: 50px;
    }
    section {
      border-bottom: 2px solid rgb(209, 218, 226);
      margin-left: 10px;
      width: 90%;
    }
    h3 {
      color: rgb(44, 136, 217);
      text-decoration: underline 2px rgb(171, 206, 236);
      font-size: 23px;
      margin: 30px 10px 10px 10px;
    }
  }

  .homeSection {
    display: flex;
    flex-direction: column;
    flex: 5;
    width: 85%;
    header {
      background-color: rgb(206, 216, 224);
      margin: 70px 10px 10px 10px;
      padding: 10px;
      font-size: 40px;
    }
  }

  .containerCards {
    .movieCards {
      display: flex;
      margin: 10px 10px 100px 10px;
    }
    img {
      width: 350px;
      border: 20px solid rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    div {
      width: 40%;
      margin: 50px;
    }
    .title {
      font-size: 35px;
    }
    .date {
      color: rgb(44, 136, 217);
      font-size: 20px;
      margin-bottom: 30px;
    }
    .titleResume {
      font-size: 25px;
      margin-bottom: 10px;
    }

    .resume {
      line-height: 1.4;
      max-height: 200px; /* Altura máxima desejada antes da rolagem */
      overflow-y: auto; /* Adicionar barra de rolagem vertical quando o conteúdo ultrapassar a altura máxima */
    }
  }
`
