import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Srishti. </strong> I am a recent graduate of the University of Victoria
         with a major in Computer Science and a minor in Business. I love working on 
         products that improve user experience whether that be a website or an application.</p>
        <p>I have worked as a software developer at a foreign exchange company called <a href = "https://www.globalreachgroup.ca/corporate" >Global Reach</a> where I worked on an international payments
           software. I have also worked at a SAAS company called <a href = "https://www.letreach.com/">LetReach Technologies</a> where I mostly did front-end development. </p>
        <p>I spend a lot of my time programming and reading technical topics,
           but I also have an interest in business, philosophy and climate change.</p>
        <p>
          Feel free to contact me for any reason on <a href= "https://www.linkedin.com/in/srishti98/">LinkedIn </a> or
         <a href="mailto:singhalsrishti98@gmail.com"> Email. </a> I love connecting with people, especially with the fellow women who code.
        </p>
      </section>
    </Layout>
  )
}