import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { VideoGames } from '../pages/VideoGames'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video-games" element={<VideoGames />} />
        </Routes>
    )
}