import Link from "next/link";

export default function HomePage() {
  const SPOTIFYEMBEDLINKS = [
    "https://open.spotify.com/embed/track/1kq9lzEHoY3p8naHWpqNlh?utm_source=generator",
    "https://open.spotify.com/embed/episode/1etIR5eEvpFKsWihW2cax1?utm_source=generator",
    "https://open.spotify.com/embed/track/2S7vZHfK6QTtK30pzAqBLP?utm_source=generator",
  ];

  return (
    <div className="homepage">

      <h1>Lior Ben-David</h1>
      <div className="contact">
        <a href="https://www.linkedin.com/in/lior-ben-david-8772471b6/">
          LinkedIn
        </a>
        <a href="mailto:liorbd@outlook.com">liorbd@outlook.com</a>
      </div>
      <p className="siteDescription">
        {
          "I currently split my time between building Gruvian (a native advertising marketplace) , and working as a SWE at Enki (a data science learning platform). I view the world through the lens of an Economist and Mathematician, which is likely apparent through much of my writing."
        }
      </p>

      <p className="siteDescription">
        {"Don't hesitate to "}
        <a href="mailto:liorbd@outlook.com">email me</a>
        {
          " with questions about Gruvian, blog responses, or about anything I can serve as a resource for."
        }
      </p>

      <h1>Things I&apos;m listening to</h1>
      <div className="articlesSectionContainer">
        {SPOTIFYEMBEDLINKS.map((link) => {
          return (
            <iframe
              key={link}
              style={{ borderRadius: "12px", margin: "5px" }}
              src={link}
              width="450"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen={false}
            />
          );
        })}
      </div>
      <h1>Blog</h1>
      <p className="siteDescription">
        {
          "This blog exists for me to improve my writing, highlight things that interest me, and serve as a journal of-sorts. Ideally, the more recent the article is, the higher quality it should be. If that does not hold true, then some reevaluation is neccesary."
        }
      </p>
      <div className="articlesSectionContainer">
        <div className="articlesSection">
          <h2>Math Exposition</h2>
          <ul>
            <li>
              <Link href={"/articles/05d2cd5883ab445aab4ab84c8700cc7b"}>
                The Cap Set Problem
              </Link>
            </li>
            <li>
              <Link href={"/articles/8dcf23fd3b044fd9ab36d92aada5f88d"}>
                A Survey of Mathematical Spaces
              </Link>
            </li>
            <li>
              <Link href={"/articles/d4f0c02cb1f0431aa0ef381c739b830d"}>
                Simplicial Complexes: Giving Shape to Data
              </Link>
            </li>
          </ul>
        </div>
        <div className="articlesSection">
          <h2>Projects and Dev Logs</h2>
          <ul>
            <li>
              <Link href={"/articles/22e0d206df6046ddbfa517aab17ed970"}>
                Teaching Cars to Drive with Neuroevolution
              </Link>
            </li>
            <li>
              <Link href={"/articles/b587cacaa6684c7daaecf04bddde794b"}>
                Building VR Websites in Javascript
              </Link>
            </li>
          </ul>
        </div>
        <div className="articlesSection">
          <h2>{"Things I'm Thinking About"}</h2>
          <ul>
            <li>
              <Link href={"/articles/4abf2949130a4225a5f921d5f318ab3d?"}>
                In Defense of Hammers In Search of Nails
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h1>Freelancing</h1>
      <p className="siteDescription">
        {
          "I'm currently taking a break from large freelancing projects to work on Gruvian. Most of my work revolves around building MVPs and helping communicate technical concepts. I love meeting new founders, so if you're not sure whether I'm able to help, please"
        }{" "}
        <a href="mailto:liorbd@outlook.com">reach out</a>.
      </p>
      <div className="articlesSectionContainer">
        <div className="articlesSection">
          <h2>Skills and Technologies</h2>
          <ul>
            <li>Web Development with React, Typescript, or Express</li>
            <li>Technical Writing and Developer Marketing</li>
            <li>iOS/MacOS Development with Swift</li>
            <li>Mobile Development with React Native</li>
            <li>Data Pipelining with Python, NodeJS, Express, SQL</li>
          </ul>
        </div>
        <div className="articlesSection">
          <h2>{"Some Happy Clients"}</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/peer-pressur/">
                PeerPressur
              </a>
              ; Swift Development
            </li>
            <li>
              <a href="https://compliantguard.com">Compliant Guard</a>; React,
              Express, Typescript Development
            </li>
            <li>
              <a href="https://www.linkedin.com/company/z-score-sports/">
                Z-Score Sports
              </a>
              ; React Development
            </li>
            <li>
              <a href="https://www.linkedin.com/products/snippyly-superflow/">
                Superflow(YC W22)
              </a>
              ; Developer Marketing
            </li>
            <li>
              <a href="https://www.linkedin.com/company/codesphere-inc/">
                Codesphere
              </a>
              ; Data Analysis and Developer Marketing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
