import { Route, Routes } from 'react-router'
import { Home } from './screens/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
