import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icon from "../images/pdf.svg"

const News = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "news.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <h1>
      <FormattedMessage id="news.heading" />
    </h1>

    <div className="news-item">
      <div className="photo-and-caption">
        <img src="/img/LeilaJanah.jpg" alt="Leila Janah" />
        <span className="caption">
          <a href="https://commons.wikimedia.org/wiki/File:Leila_Janah_(15313650137).jpg">
            Photo by Christopher Michel
          </a>
        </span>
      </div>

      <span className="date">2020.02.02</span>

      <div className="news-text">
        <h2>Leila Janah, IGH Co-Founder, 1982-2020</h2>

        <p>
          We mourn the passing of Leila Janah, one of the co-founders of{" "}
          <a href="/team">Incentives for Global Health</a>. She was brilliant,
          kind and passionate about improving our world. Leila helped to advance
          the Health Impact Fund concept both practically and intellectually. A
          true social entrepreneur, she founded{" "}
          <a href="https://twitter.com/Samasource">Samasource</a>, a company
          designed to enable impoverished people to work remotely on computer
          tasks in Africa and India. The company has provided well-paying jobs
          for over 11,000 people. She also developed a beauty products company
          LXMI which sourced products sustainably from Africa, while paying
          women workers fairly for their work.
          <br />
          <br />A humanitarian, an innovator, and a kind person who brought out
          the best in others, Leila will be deeply missed. Samasource has
          invited those who wish to honor Leila to make a donation to the{" "}
          <a href="https://www.givework.org/">GiveWork Challenge</a>.
        </p>
      </div>
    </div>

    <br />
    <br />

    <div className="news-item">
      <div className="photo-and-caption">
        <img src="/img/berlin_workshop.jpg" alt="Berlin Workshop" />
      </div>

      <span className="date">2019.11.13</span>

      <div className="news-text">
        <h2>Health Impact Fund Workshop Berlin</h2>

        <p>
          The Health Impact Fund was the topic of an important meeting in Berlin
          on November 13. Co-convened by Heidemarie Wieczorek-Zeul (former
          German Federal Minister of Economic Cooperation and Development) and
          Professor Thomas Pogge of Yale University, the workshop gathered
          experts from government, industry, civil society, foundations, and
          academia. Adroitly chaired by Sergius Seebohm, participants explored
          the Health Impact Fund and how to move a pilot forward. There was a
          strong consensus that the Health Impact Fund offered a way to
          reconcile the need to support innovation and the need for new drugs to
          be accessible everywhere.
        </p>
      </div>
    </div>

    <br />

    <div className="news-item">
      <span className="date">2019.09.25</span>

      <div className="news-text">
        <h2>UK Labour Party Medicines Platform calls for Delinkage</h2>

        <p>
          The UK Labour Party is now officially calling for a change to the way
          that we pay for medicines, so that prices are “delinked” from the cost
          of innovation. The Health Impact Fund is a unique, competitive form of
          delinkage that controls the rewards to innovators through a market
          mechanism.
        </p>

        <a
          className="news-download"
          href="/pdf/LabourUK_Medicines-For-The-Many.pdf"
        >
          <Icon />
          <span>
            MEDICINES FOR THE MANY:
            <br />
            Public Health before Private Profit
          </span>
        </a>
      </div>
    </div>

    <br />
    <br />

    <div className="news-item">
      <div className="photo-and-caption">
        <img src="/img/GordonBrown.jpg" alt="Gordon Brown" />
        <span className="caption">
          <a href="https://www.flickr.com/photos/26087974@N05/2794502401/in/photolist-5fWycT-73eyY4-K27DF5-7srBjU-5yrHsu-4pRJQ3-LxKie-6FQgRL-21YNA-7fuBBP-YrMnc-XLitE-4pB7az-22E6bwo-81ukoA-6qCvdA-5A2dWq-81raKp-3pqzmL-4W6Ldz-9e3DLE-7G3t1c-7KVkH-81uk3j-bnoTq-83tNQB-7KVx4-4WaZnb-65D1NB-YrMMT-4W6LHi-6byQ6F-E1Bbz-suznZz-7YLEhZ-7KUVL-7KV4s-4Wb2z9-4Wb5nG-5WEWkq-7GEke-bB7KBf-7KUXP-6Fcrgy-4Wb1ey-7JrU1-7KUFS-5AUF6y-6vuMmB-7KVda">
            Photo by Cory M. Grenier
          </a>
        </span>
      </div>

      <span className="date">2019.06.20</span>

      <div className="news-text">
        <h2>
          London meeting on the Health Impact Fund with the Rt Hon Gordon Brown
        </h2>

        <p>
          On 20 June 2019, a wide variety of stakeholders participated in a
          meeting on the Health Impact Fund proposal, the MVAC proposal, and
          antibiotic market entry rewards. These alternative and complementary
          mechanisms to support innovation showed the importance of new
          financing tools for pharmaceutical innovation in a variety of areas.
          The Rt Hon Gordon Brown offered incisive comments on the challenges of
          attracting political support in the current environment.
        </p>
      </div>
    </div>
  </Layout>
)

export default injectIntl(News)
