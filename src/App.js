import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Layout from './screens/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="main">
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>

    </div>
    
  )
}

export default App
