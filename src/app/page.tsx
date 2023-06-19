import Link from 'next/link'

export default function HomePage() {
  return (
      <div className="homepage">
          <h1>Lior Ben-David</h1>
          <div className="contact">
              <a href="https://www.linkedin.com/in/lior-ben-david-8772471b6/">LinkedIn</a>
              <a href="mailto:liorbd@outlook.com">liorbd@outlook.com</a>
          </div>
          <p className = "siteDescription">{"I'm current studying Math and Economics at The University of Virginia. Outside of classes, I do freelance software engineering, data analysis, and technical writing for a number of startups."}</p>
          <p className = "siteDescription">{"This website exists for me to improve my writing, highlight things that interest me, and serve as a journal of-sorts. Ideally, the more recent the article is, the higher quality it should be. If that doesn&apost hold true, then some reevaluation is neccesary."}</p>
          <p className = "siteDescription">{"Feel free to email me with writing criticism(Both content and style), freelance requests, or about anything I can serve as a resource for."}</p>

          <div className="articlesSectionContainer">
              <div className="articlesSection">
                  <h2>Math Exposition</h2>
                  <ul>
                      <li>
                          <Link href={"/articles/8dcf23fd3b044fd9ab36d92aada5f88d"}>A Survey of Mathematical Spaces</Link>
                      </li>
                      <li>
                          <Link href={"/articles/d4f0c02cb1f0431aa0ef381c739b830d"}>Simplicial Complexes: Giving Shape to Data</Link>
                      </li>
                  </ul>
              </div>
              <div className="articlesSection">
                  <h2>Projects and Dev Logs</h2>
                  <ul>
                      <li>
                          <Link href={"/articles/22e0d206df6046ddbfa517aab17ed970"}>Teaching Cars to Drive with Neuroevolution</Link>
                      </li>
                      <li>
                          <Link href={"/articles/b587cacaa6684c7daaecf04bddde794b"}>Building VR Websites in Javascript</Link>
                      </li>
                  </ul>
              </div>
          <div className="articlesSection">
                  <h2>{"Things I'm Thinking About"}</h2>
                  <ul>
                  <li>
                    <Link href={"/articles/4abf2949130a4225a5f921d5f318ab3d?"}>In Defense of Hammers In Search of Nails</Link>
                    </li>
                  </ul>
          </div>
          </div>
      </div>
  )
}
