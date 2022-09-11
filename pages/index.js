import { server } from '../config'
import { Sidebar, Navbar, About, Resume, Portfolio, Blog, Contact } from '../components'
import { SWRConfig } from 'swr'
import path from 'path'
import { promises as fs } from 'fs'

const Home = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback, fetcher: (url) => fetch(url).then((res) => res.json()), revalidateOnMount: true }}>
        <Sidebar />

        <div className="main-content">
          <Navbar />
          <About />
          <Resume />
          <Portfolio/>
          <Contact />
        </div>
    </SWRConfig>
  )
}

export const getStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const staticdata = await fs.readFile(jsonDirectory + '/data.json', 'utf8')

  return {
    props: {
      fallback: {
        '/api/staticdata': staticdata
      }
    },
  }
}

export default Home