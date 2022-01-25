import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script src="https://unpkg.com/@croquet/croquet@1.0" />
      </Head>

      <main>  
        <div className="split left">  
            <div className="right-justified">
                <Header title="Welcome to my app!" />
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
            </div>
        </div>

        <div className="split right">
            <div className="left-justified">
                <iframe src="https://croquet.io/avatars/index.html?q=cxk8m2wrhx" width="400" height="400" />
            </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
