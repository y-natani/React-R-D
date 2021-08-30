import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const pages = [
  { label: '入力値をカタカナに変換', url: '/research/convKana' },
  { label: 'useSWR', url: '/research/useSWR' },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React R&D</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>React R&D</h1>
        <ul>
          {pages.map(({ label, url }, i) => (
            <li key={i}>
              <Link href={url}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home
