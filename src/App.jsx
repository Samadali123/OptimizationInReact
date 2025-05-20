import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'

const Users = lazy(() => import('./components/Users'));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
             <Route path="/" element={<Layout/>}>
        <Route index element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProduct />} />
        <Route path="users" element=
        // {<Suspense fallback={<h1>Loading...</h1>}>
        //     <Users />
        //   </Suspense>} />
                {<Suspense fallback={
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
            <Users />
          </Suspense>} />
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