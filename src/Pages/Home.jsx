import { useState } from 'react'
import AppApiContext from '../ContextApi/AppApiContext'
import Banner from '../Components/Banner'
import ProductCartGroup from '../Components/ProductCartGroup'
import HomePage from '../Components/HomePage'

function Home() {
  const [apiType, setApiType] = useState('')    

  const defaultState = {
    apiType: apiType,
    setApiType: setApiType
  }
  return (
    <AppApiContext.Provider value={defaultState}>
      <Banner />
      <HomePage/>
      <ProductCartGroup />
    </AppApiContext.Provider>
  )
}

export default Home