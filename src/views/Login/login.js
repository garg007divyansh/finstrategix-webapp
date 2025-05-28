import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import MyDiv from './login.style'
import { CustomButton, CustomToast } from '../../components'
import { useNavigate } from 'react-router-dom'
import { setItem } from '../../utilities/authUtils'
import * as routesNames from '../../constants/routes'
import AppLogo from '../../assets/images/logo-dark.svg'
import BannerImage from '../../assets/images/banner.jpg'

const Login = (props) => {

  const navigate = useNavigate()
  const { addToast } = CustomToast()
  const [inputValues, setInputValues] = useState({})
  const [timerCount, setTimerCount] = useState(0)
  const [otpSuccess, setOtpSuccess] = useState(false)

  useEffect(() => {
    let timer;
    if (timerCount > 0) {
      timer = setTimeout(() => setTimerCount(timerCount - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [timerCount]);

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'mobile_number') {
      const truncatedNumber = value.slice(0, 10);
      setInputValues({ ...inputValues, [name]: truncatedNumber });
    } else if (name === 'otp') {
      const truncatedOTP = value.slice(0, 6);
      setInputValues({ ...inputValues, [name]: truncatedOTP });
    } else {
      setInputValues({ ...inputValues, [name]: value });
    }
  }

  const handleOTP = () => {
    if (inputValues?.mobile_number?.length !== 10) {
      addToast({ message: 'Please enter a valid mobile number.', status: 'error' })
      return;
    }
    addToast({ message: 'OTP Sent Successfully!', status: 'success' })
    setOtpSuccess(true);
    setTimerCount(90);
  };

  const handleResendOTP = () => {
    addToast({ message: 'OTP Resent Successfully!', status: 'success' })
    setTimerCount(90);
  };

  const handleClick = () => {
    setItem('token', 'token')
    navigate(routesNames.DASHBOARD)
  }

  return (
    <MyDiv>
      <Grid className='grid_container main_container'>
        <GridItem colSpan={6}>
          <Link to={routesNames.LOGIN} className='app-logo'>
            <Image className="" src={AppLogo} />
          </Link>
          <Box className='form-wrapper'>
            <Box className='text-center'>
              <Heading as="h1" className='font_family font_dark text_bold text_5xl'>Just a couple of clicks and we <span className='font_theme'>Start.</span></Heading>
              <Text mt={3} className='font_family font_dark text_medium text_xl'>We will send an OTP to your Mobile number</Text>
            </Box>
            <Box mt={10}>
              <Text mb={1} className="font_family font_dark text_medium text_lg">Mobile Number</Text>
              <Input type="number" size="md" name="mobile_number" placeholder="Mobile Number"
                onChange={handleChange} value={inputValues?.mobile_number ?? ''}
                className="login_input font_dark text_regular font_family text_lg"
              />
            </Box>
            <Box mt={4} mb={4}>
              <Text mb={1} className="font_family font_dark text_medium text_lg">Mobile OTP</Text>
              <Input type="number" size="md" name="otp" placeholder="Mobile OTP"
                onChange={handleChange} value={inputValues?.otp ?? ''} disabled={!otpSuccess}
                className="login_input font_dark text_regular font_family text_lg"
              />
            </Box>
            <Flex mb={6} justifyContent='end'>
              {!otpSuccess ?
                <CustomButton size="md" type="submit" title="Send Otp" className="font_family font_dark text_medium text_lg" onClick={handleOTP} /> :
                <Flex gap={2} alignItems='center'>
                  {timerCount === 0 ? null : <Heading className="font_input text_lg text_regular font_poppins" as="p"> {timerCount} Sec </Heading>}
                  <CustomButton size="md" type="submit" title="Resend OTP" className="font_family font_dark text_medium text_lg" onClick={handleResendOTP}
                    isDisabled={timerCount === 0 ? false : true} />
                </Flex>
              }
            </Flex>
            <CustomButton size="md" type="submit" title="Log In" className="btn_theme text_lg text_medium font_family w-100" onClick={handleClick} />
          </Box>
        </GridItem>
        <GridItem colSpan={6} className='left-pannel' style={{ backgroundImage: `url(${BannerImage})` }} />
      </Grid>
    </MyDiv>
  )
}
export default Login