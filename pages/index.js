import { server } from '../config'
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
  const res = await fetch(`${server}/api/staticdata`)
  const staticdata = await res.json()
  
  return {
    props: {
      fallback: {
        '/api/staticdata': staticdata
      }
    },
  }
}

export default Home