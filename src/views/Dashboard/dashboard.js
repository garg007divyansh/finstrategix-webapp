import React from 'react'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import MyDiv from './dashboard.style'
import { CustomCard, NavBar } from '../../components'
import { PortfolioCard } from './components'

const Dashboard = (props) => {

  const pieChartData = {
    labels: ['Investments', 'Loans', 'Insurance', 'Taxes'],
    datasets: [
      {
        data: [10, 20, 30, 40],
        backgroundColor: ['#F4A79D', '#F68D2B', '#344BFD', '#36B28B'],
        hoverBackgroundColor: ['#F4A79D', '#F68D2B', '#344BFD', '#36B28B'],
        cutout: '70%',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            family: 'Poppins',
            size: 12,
          },
          color: '#000',
        },
        onClick: () => {},
      },
      title: {
        display: true,
        text: 'Doughnut Chart Example',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // return `${tooltipItem.label}: ${tooltipItem.raw} votes`;
            return `${tooltipItem.raw}%`;
          },
        },
        titleFont: {
          family: 'Poppins',
          size: 14,
          weight: '600',
        },
        // titleColor: 'red',
        bodyFont: {
          family: 'Poppins',
          size: 12,
          weight: '600',
        },
        // bodyColor: 'red',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // borderColor: '#ccc',
        // borderWidth: 1,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">Dashboard</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
      <Grid className="grid_container grid_gap_sm" mt={4}>
        <GridItem colSpan={8}>
          <Grid className="grid_container grid_gap_sm" alignItems="center">
            <GridItem colSpan={3}>
              <CustomCard className="cardOne" title="Investments" value="10" />
            </GridItem>
            <GridItem colSpan={3}>
              <CustomCard className="cardTwo" title="Loan Management" value="10" />
            </GridItem>
            <GridItem colSpan={3}>
              <CustomCard className="cardThree" title="Insurance" value="10" />
            </GridItem>
            <GridItem colSpan={3}>
              <CustomCard className="cardFour" title="Tax Optimisation" value="10" />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={4}>
          <PortfolioCard data={pieChartData} options={options} />
        </GridItem>
      </Grid>
    </MyDiv>
  )
}

export default Dashboard
