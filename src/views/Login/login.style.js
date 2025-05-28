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
.app-logo{
    position: absolute;
    top: 20px;
    left: 20px;
}
.app-logo img{
    width: 30%;
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
