import styled from 'styled-components'

const MyDiv = styled.div`
.main_container {
    align-items: center;
    height: 100vh;
    flex-flow: wrap;
}
.left-pannel{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    height: 100vh;
}
.right-panel{
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.app-logo{
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}
.app-logo img{
    width: 60%;
    margin: auto;
}
.form-wrapper{
    padding: 0px 160px;
}
.login_input{
    border-radius: 6px!important;
    border: 0.5px solid #98A2B3!important;
    height: 44px!important;
    background: #F8FAFC!important;
}
.login_input:focus{
    box-shadow: none;
}
`
export default MyDiv
