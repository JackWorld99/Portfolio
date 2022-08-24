import { Sildebar, Navbar, About, Resume, Portfolio, Blog, Contact } from '../components'

export default function Home() {
  return (
    <>
      <Sildebar />

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