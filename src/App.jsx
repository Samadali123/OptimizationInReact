import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import Users from './components/Users'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
             <Route path="/" element={<Layout/>}>
        <Route index element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProduct />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1 className="text-center py-10 text-xl text-red-500">404 - Not Found</h1>} />
      </Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App