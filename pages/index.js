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
        <p>Hello, I'm <strong>Srishti </strong>. I am a recent graduate of the University of Victoria
         with a major in Computer Science and a minor in Business. I have a passion for UX/UI design, problem solving and systems
         architecture.</p>
        <p> I have worked as a software developer at a foreign exchange company called Global Reach Canada where I worked on an international payments
           software and I have also worked at a SAAS company called LetReach Technologies. </p>
        <p>
        Feel free to contact me for any reason on <a href= "https://www.linkedin.com/in/srishti98/">LinkedIn </a> or
         <a href="mailto:singhalsrishti98@gmail.com"> Email </a>
        </p>
      </section>
    </Layout>
  )
}