import React from 'react'
import {graphql,useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import contactStyle from '../components/modules/contact.module.scss'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'
 const Contact = ()=>{
     const data = useStaticQuery(graphql`
     query{
         site{
             siteMetadata{
                 Email
                 githubUsername
             }
         }
     }
     `)
     const { Email,githubUsername,twitterUsername,linkedInUsername} = data.site.siteMetadata
     return(
         <Layout>
             <Helmet title={`Contact - ${config.userName}`}/>
         <div>
             {/* <h2 className={contactStyle.title}>论坛</h2> */}
             <p>本<a href="/blog">网站</a>主要是搜集<a href="https://bbs.emath.ac.cn/forum.php">数学研发论坛</a>上的精华帖子. </p>
             <p>我们是一群数学,计算机的爱好者.</p>
             <p className={contactStyle.subtitle}>You can contact me via email or find me around the web.</p>
             <ul className={contactStyle.list}>
                 <li>Email: <a target="_blank" rel="noopener noreferrer" className={contactStyle.link} href={`mailto:${data.site.siteMetadata.Email}`}>{Email}</a></li>
                 <li>Github: <a target="_blank" rel="noopener noreferrer" className={contactStyle.link} href={`https://github.com/${githubUsername}`}>{githubUsername}</a></li>
                 {/* <li>QQ: <a target="_blank" rel="noopener noreferrer" className={contactStyle.link} href={`https://twitter.com/${twitterUsername}`}>{twitterUsername}</a></li> */}
                 {/* <li>LinkedIn: <a target="_blank" rel="noopener noreferrer" className={contactStyle.link} href={`https://linkedin.com/in/${linkedInUsername}`}>{linkedInUsername}</a></li> */}
            </ul>
         </div>
         </Layout>
     )
 }
 export default Contact