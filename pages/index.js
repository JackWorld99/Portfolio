import { Sildebar, Navbar, About } from '../components'

export default function Home() {
  return (
    <>
      <Sildebar />

      <div className="main-content">
        <Navbar />
        <About />
      </div>
    </>
  )
}