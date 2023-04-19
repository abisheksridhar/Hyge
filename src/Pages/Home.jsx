import React from 'react'
import './Home.scss'
import RevenueCycleManagement from '../Organisms/RevenueCycleManagement.jsx/RevenueCycleManagement'
import KnowTheHyge from '../Organisms/KnowTheHyge/KnowTheHyge'

const Home = () => {
  return (
    <div className="hyge_home">
       <RevenueCycleManagement />
       <KnowTheHyge />
    </div>
  )
}

export default Home
