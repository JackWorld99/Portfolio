import { Sildebar, Navbar, About, Resume, Portfolio } from '../components'

export default function Home() {
  return (
    <>
      <Sildebar />

      <div className="main-content">
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
      </div>
    </>
  )
}