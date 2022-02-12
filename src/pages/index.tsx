import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '@/components/layout'
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>NextJS Typescript Starter</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div>
          <h1>NextJS Typescript Starter</h1>
          <p>
            <Link href="/posts/">
              <a>/posts</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
