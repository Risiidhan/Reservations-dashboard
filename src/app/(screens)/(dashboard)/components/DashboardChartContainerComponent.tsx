import React from 'react'
import ChartComponent from './ChartComponent'

const DashboardChartContainerComponent = () => {
  return (
    <div className='grid grid-cols-1 laptop:grid-cols-2 gap-4'>
        <ChartComponent />
    </div>
  )
}

export default DashboardChartContainerComponent