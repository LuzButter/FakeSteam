import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Meeting from './page/Metting'
import EditableTable from './component/EditableTable'
import TreeEdit from './component/Main'
import LuzTabs from './component/LuzTabs'
import ThemeChanger from './component/ThemeChanger'
import ThemeAndLayout from './page/ThemeAndLayout'
import MutiItem from './component/MutiItem'
import RAS from './component/RestokAndSign'
import PhotoCarousel from './component/PhotoCarousel'
import Galleria from './component/Galleria'
import School from './page/School'
import PhotoCard from './component/PhotoCard'
import PagewideCard from './component/PagewideCard'
import Video from './component/VideoPlaylist'
import ThreeData from './component/ThreeData'
import ProjectResult from './component/ProjectResult'
import HoverReveal from './component/HoverReveal'
import CarouselBanner from './component/CarouselBanner'
import AboutUs from './component/AboutUs'
import HorizentalCard from './component/HorizentalCard'
import ProductCard from './component/ProductCard'
import StatisticCard from './component/StatisticCard'
import DrgreeBlock from './component/DegreeBlock'
import IB from './component/InteractableBanner'
import SugoeatData from './page/SugoeatData'
import TaiwanHover from './component/TaiwanHover'
import PrimeCarousel from './component/PrimeCarousel'
import ReactSlickCarousel from './component/ReactSlickCarousel'
import EmptyPage from './page/EmptyPage'
import LayoutDisplay from './page/LayoutDisplay'
import ComponentCollection from './page/ComponentCollection'
import ThemePicker from './page/ThemePicker'
import AppHome from './page/AppHome'
import LibraryDashbroad from './page/LibraryDashbroad'
import SteamDB from './page/SteamBD'
import GameInfo from './page/GameInfo'


const root = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/SteamDB" />} />
        <Route path='/Meeting' element={<Meeting />} />
        <Route path='/EditableTable' element={<EditableTable />} />
        <Route path='/TreeEdit' element={<TreeEdit />} />
        <Route path='/Tabs' element={<LuzTabs />} />
        <Route path='/ThemeChanger' element={<ThemeChanger />} />
        <Route path='/ThemeAndLayout' element={<ThemeAndLayout />} />
        <Route path='/MutiItem' element={<MutiItem />} />
        <Route path='/RAS' element={<RAS />} />
        <Route path='PhotoCarousel' element={<PhotoCarousel/>}/>
        <Route path='Galleria' element={<Galleria/>}/>
        <Route path='School' element={<School/>}/>
        <Route path='PhotoCard' element={<PhotoCard/>}/>
        <Route path='PagewideCard' element={<PagewideCard/>}/>
        <Route path='Video' element={<Video/>}/>
        <Route path='ThreeData' element={<ThreeData/>}/>
        <Route path='ProjectResult' element={<ProjectResult/>}/>
        <Route path='HoverReveal' element={<HoverReveal/>}/>
        <Route path='CarouselBanner' element={<CarouselBanner/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='HorizentalCard' element={<HorizentalCard/>}/>
        <Route path='ProductCard' element={<ProductCard/>}/>
        <Route path='StatisticCard' element={<StatisticCard/>}/>
        <Route path='degreeBlock' element={<DrgreeBlock/>}/>
        <Route path='IB' element={<IB/>}/>
        <Route path='SugoeatData' element={<SugoeatData/>}/>
        <Route path='TaiwanHover' element={<TaiwanHover/>}/>
        <Route path='PrimeCarousel' element={<PrimeCarousel/>}/>
        <Route path='ReactSlickCarousel' element={<ReactSlickCarousel/>}/>
        <Route path='EmptyPage' element={<EmptyPage/>}/>
        <Route path='LayoutDisplay' element={<LayoutDisplay><ThemePicker /></LayoutDisplay>}/>
        <Route path='ComponentCollection' element={<ComponentCollection/>}/>
        <Route path='AppHome' element={<AppHome/>}/>
        <Route path='LibraryDashbroad' element={<LibraryDashbroad/>}/>
        <Route path='SteamDB' element={<SteamDB/>}/>
        <Route path='GameInfo' element={<GameInfo/>}/>

      </Routes>
    </Router>
  )
}

export default root

