import { Sidebar, Navbar, About, Resume, Portfolio, Blog, Contact } from '../components'
import { SWRConfig } from 'swr'

const Home = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback, fetcher: (url) => fetch(url).then((res) => res.json()), revalidateOnMount: true }}>
        <Sidebar />

        <div className="main-content">
          <Navbar />
          <About />
          <Resume />
          <Portfolio/>
          <Blog />
          <Contact />
        </div>
    </SWRConfig>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/staticdata')
  const repos = await res.json()
  
  return {
    props: {
      fallback: {
        '/api/staticdata': repos
      }
    },
  }
}

export default Home