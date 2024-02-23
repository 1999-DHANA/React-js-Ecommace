import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './stores/pages/landingpage'

import "./App.css"
import Mobilepages from './stores/pages/Mobilepages'
import Computerpages from './stores/pages/Computerpages'
import Watchespages from './stores/pages/Watchespages'
import Womenpages from './stores/pages/Womenpages'
import Menpages from './stores/pages/Menpages'
import Acpages from './stores/pages/Acpages'
import Kitchenpages from './stores/pages/Kitchenpages'
import Tvpages from './stores/pages/Tvpages'
import Furniturepages from './stores/pages/Furniturepages'
import Fridgepages from './stores/pages/Fridgepages'
import Speakerpage from './stores/pages/Speakerpage'
import Bookpages from './stores/pages/Bookpages'
import Mobilesingle from './singles/Mobilesingle'
import Computersingle from './singles/Computersingle'
import Watchsingle from './singles/Watchsingle'
import Womenwearsingle from './singles/Womenwearsingle'
import Menwearsingle from './singles/Menwearsingle'
import Acsingles from './singles/Acsingles'
import Kitchensingle from './singles/Kitchensingle'
import Tvsingles from './singles/Tvsingles'
import Fursingle from './singles/Fursingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/mobile' element={<Mobilepages/>}/>
        <Route path='/computer' element={<Computerpages/>}/>
        <Route path='/watch' element={<Watchespages/>}/>
        <Route path='/womenwear' element={<Womenpages/>}/>
        <Route path='/men' element={<Menpages/>}/>
        <Route path='/ac' element={<Acpages/>}/>
        <Route path='/Kitchen' element={<Kitchenpages/>}/>
        <Route path='tv' element={<Tvpages/>}/>
        <Route path='/furniture' element={<Furniturepages/>}/>
        <Route path='/fridge' element={<Fridgepages/>}/>
        <Route path='/speaker' element={<Speakerpage/>}/>
        <Route path='/book' element={<Bookpages/>}/>
            <Route path='/mobile/:id' element={<Mobilesingle/>}/>
            <Route path='/computer/:id' element={<Computersingle/>}/>
            <Route path='/watch/:id' element={<Watchsingle/>}/>
            <Route path='/womenwear/:id' element={<Womenwearsingle/>}/>
            <Route path='/men/:id' element={<Menwearsingle/>}/>
            <Route path='/ac/:id' element={<Acsingles/>}/>
            <Route path='/Kitchen/:id' element={<Kitchensingle/>}/>
            <Route path='/tv/:id' element={<Tvsingles/>}/>
            <Route path='/furniture/:id' element={<Fursingle/>}  />
      </Routes>
    </div>
  )
}

export default App