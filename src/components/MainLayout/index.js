import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './mainlayout.module.scss'
import Banner from '../Banner/'
import Footer from '../Footer/'
import Navigation from '../Navigation/'

const MainLayout = children => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `}
    render={data => (
      <div className={styles.grid}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <header className={styles.header}>
            <Navigation/>
            <Banner/>
        </header>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur non iure dolorum dignissimos reprehenderit, laudantium tempora nesciunt nisi velit quo repudiandae architecto quibusdam facere quasi numquam molestiae corporis est? Quo, nulla facilis. Beatae numquam quisquam, qui fuga sit, assumenda eum non earum maxime deleniti libero odio molestiae recusandae magni, quia cupiditate consequuntur quis eius. Expedita eius, asperiores amet fugit voluptatum eligendi, dolorum velit voluptas, doloremque nihil quas sint! Excepturi vel exercitationem aliquam cumque corrupti temporibus ab numquam cum quisquam, accusantium dicta enim? Sequi corporis minus alias aut nesciunt quis, quia temporibus ut aspernatur. Doloremque voluptatibus provident corrupti accusamus et vero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus expedita dolores iusto itaque magnam odit vero maiores fuga! Illo dignissimos impedit esse sunt modi ab voluptatum eligendi consectetur a accusantium. At odio exercitationem eius rerum, distinctio doloremque inventore possimus sunt eos vero perspiciatis ipsam laborum delectus, expedita, mollitia quisquam? Tempore eligendi suscipit doloremque itaque dolore porro ratione delectus quis expedita nesciunt ipsa ut quod, dignissimos autem iusto perferendis, iste cupiditate ducimus similique. Explicabo eveniet officia reprehenderit voluptate cumque facilis, commodi cum iusto praesentium voluptatibus laudantium quasi sequi pariatur repudiandae beatae vero. Atque doloribus fuga id dignissimos repudiandae iusto voluptas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore corporis, hic eveniet cupiditate aperiam odit cumque dolorem perferendis unde sequi perspiciatis ad quae exercitationem accusantium accusamus atque totam tempore eaque animi repudiandae provident? Ratione ullam culpa soluta nobis iure saepe quae eligendi earum, labore numquam voluptatem dicta natus officiis, temporibus facere sequi voluptas! Laborum praesentium obcaecati sequi cum ducimus quia cumque, dolor non accusamus magni dolorem consequatur sint voluptatum assumenda, at neque. Voluptatum, asperiores possimus! Enim autem sequi fuga veniam deserunt velit cum temporibus ipsum ducimus optio, iusto natus recusandae sit perferendis nihil harum quam beatae tempore? Fuga, tempore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod dolorum eligendi voluptate voluptatibus dicta, similique optio animi fuga obcaecati numquam, minima aliquam possimus, aliquid iusto accusamus sunt sequi odio nam ipsum! Soluta ex illo et tenetur molestias laboriosam nostrum facilis autem, delectus cum iste fugiat beatae laborum omnis voluptas distinctio eum quae? Maxime sint saepe magni sequi inventore repellat doloremque consectetur molestias necessitatibus ex. Odit vitae dicta rem blanditiis id, quos animi in, repellat tenetur, praesentium corporis amet. Minima corporis repellat eligendi, dolore architecto obcaecati ex, quis delectus error quam dolorum in excepturi eius cum voluptas, fugit saepe voluptates.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel perspiciatis nisi, tempora quaerat perferendis optio veritatis commodi? Nam quis laborum voluptatibus consectetur, sequi tempore aliquam, repellendus facilis voluptatum reprehenderit quo possimus eum ut neque illum vel reiciendis, explicabo consequatur quia ipsa eveniet in. Praesentium sequi sapiente a eos, unde molestias velit! Laboriosam cumque voluptatum dolorem, dolorum nihil eum delectus consectetur minus, rem iste non animi fugiat mollitia blanditiis minima beatae ex iusto officiis, eaque quod sapiente maxime! Labore fugiat esse cum iure veniam repellendus voluptates modi, ducimus omnis explicabo sapiente ipsum quisquam nam eius beatae consectetur ipsam nihil repudiandae optio.</p>
            </div>
        </main>
        <footer className={styles.footer}>
            <Footer/>
        </footer>
      </div>
    )}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
