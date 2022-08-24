import { Sildebar, Navbar, About, Resume} from '../components'

export default function Home() {
  return (
    <>
      <Sildebar />

      <div className="main-content">
        <Navbar />
        <About />
        <Resume />
      </div>
    </>
  )
}