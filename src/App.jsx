import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import ComingSoon from './pages/ComingSoon'

export default function App() {
    return (
        <ThemeProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lesson/:id" element={<Lesson />} />
                <Route path="/coming-soon/:id" element={<ComingSoon />} />
            </Routes>
        </ThemeProvider>
    )
}
