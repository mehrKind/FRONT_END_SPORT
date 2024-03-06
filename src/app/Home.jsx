import React from 'react'
import Banner from './components/Home/Banner';
import Worklist from './components/Home/Worklist';
import Habits from './components/Home/Habits';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <Worklist/>
      <Habits/>
    </div>
  )
}

export default Home;
