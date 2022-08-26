import { Sidebar, Navbar, About, Resume, Portfolio, Blog, Contact } from '../components'

const Home = () => {
  return (
    <>
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    </>
  )
}

export default Home