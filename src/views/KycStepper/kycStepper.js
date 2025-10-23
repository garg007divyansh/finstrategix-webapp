import React, { useState } from 'react'
import { Box, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import { NavBar } from '../../components'
import MyDiv from './kycStepper.style'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { BankDetails, BusinessDetails, PersonalDetails } from './components'

const KycStepper = (props) => {

    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);

    const nextStep = () => {
        setStep(step + 1);
    };

    const goToStep = (stepNumber) => {
        setStep(stepNumber);
    };

    const markStepAsCompleted = (stepNumber) => {
        if (!completedSteps.includes(stepNumber)) {
            setCompletedSteps([...completedSteps, stepNumber]);
        }
    };

    const handleSubmit = () => {
        // Final submission logic here
    }

    return (
        <MyDiv>
            <Grid className="grid_container grid_gap_sm" alignItems="center">
                <GridItem colSpan={9}>
                    <Heading as="h1" className="text_bold font_family text_4xl font_dark">New KYC Registration</Heading>
                </GridItem>
                <GridItem colSpan={3}>
                    <NavBar />
                </GridItem>
            </Grid>
            <Box className='steps_box'>
                <Stack direction="row" className='steps_align'>
                    <StepLabel active={step === 1} completed={completedSteps.includes(1)} onClick={() => goToStep(1)}>
                        {completedSteps.includes(1) ? <CheckCircleIcon className='icon_size' /> : <span>01</span>} Personal Details
                    </StepLabel>
                    <StepLabel active={step === 2} completed={completedSteps.includes(2)} onClick={() => goToStep(2)}>
                        {completedSteps.includes(2) ? <CheckCircleIcon className='icon_size' /> : <span>02</span>} Business Details
                    </StepLabel>
                    <StepLabel active={step === 3} completed={completedSteps.includes(3)} onClick={() => goToStep(3)}>
                        {completedSteps.includes(3) ? <CheckCircleIcon className='icon_size' /> : <span>03</span>} Bank Details
                    </StepLabel>
                </Stack>
                {step === 1 && (
                    <Box>
                        <PersonalDetails onClick={() => { markStepAsCompleted(1); nextStep();}} />
                    </Box>
                    )
                }
                {step === 2 && (
                    <Box>
                        <BusinessDetails onClick={() => { markStepAsCompleted(2); nextStep();}} />
                    </Box>
                    )
                }
                {step === 3 && (
                    <Box>
                        <BankDetails onClick={() => { markStepAsCompleted(2); handleSubmit();}} />
                    </Box>
                    )
                }
            </Box>
        </MyDiv>
    )
}

const StepLabel = ({ children, active, completed, onClick }) => {
    return (
        <Box className='step_label'>
            <Heading as="h3" className={completed ? 'tab_heading font_family completed' :
                (active ? 'tab_heading font_family visited' : 'tab_heading font_family default')} onClick={onClick}>
                {children}
            </Heading>
        </Box>
    );
};

export default KycStepper
