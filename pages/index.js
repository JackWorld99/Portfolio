import { Sildebar, Navbar, About, Resume, Portfolio, Blog } from '../components'

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
      </div>
    </>
  )
}