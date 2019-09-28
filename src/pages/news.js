import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "news.title" })} />
    <h1>
      <FormattedMessage id="news.heading" />
    </h1>
    <p>
      <FormattedMessage id="news.info" />
    </p>

    <br />
    <br />
    <br />

    <h1>International Advisory Council</h1>

    <ul>
      <li>
        <strong>Kenneth J. Arrow</strong>
        (21. Februar 2017), Professor of Economics and Operations Research,
        Stanford University; Nobel Prize Winner in Economics.
      </li>
      <li>
        <strong>Noam Chomsky</strong>, former Institute Professor, Department of
        Linguistics & Philosophy, MIT.
      </li>
      <li>
        <strong>John J. DeGioia</strong>, President of Georgetown University.
      </li>
      <li>
        <strong>Ruth Faden</strong>, Professor of Biomedical Ethics and founder
        of the Berman Institute of Bioethics, Johns Hopkins University.
      </li>
      <li>
        <strong>Paul Farmer</strong>, Chair of the Department of Global Health
        and Social Medicine at Harvard Medical School; Co-Founder, Partners in
        Health.
      </li>
      <li>
        <strong>Robert Gallo</strong>, Director of the Institute of Human
        Virology at the University of Maryland School of Medicine, co-discoverer
        of the human immunodeficiency virus.
      </li>
      <li>
        <strong>Professor David Haslam</strong>, former Chair of the National
        Institute for Health and Care Excellence (NICE).
      </li>
      <li>
        <strong>Paul Martin</strong>, twenty-first Prime Minister of Canada.
      </li>
      <li>
        <strong>Christopher Murray</strong>, Institute Director, Institute for
        Health Metrics and Evaluation (IHME).
      </li>
      <li>
        <strong>Gustav Nossal</strong>, Research Biologist; Australian of the
        Year in 2000.
      </li>
      <li>
        <strong>Baroness Onora O’Neill</strong>, Member of the UK House of
        Lords; former President of the British Academy.
      </li>
      <li>
        <strong>James Orbinski</strong>, Professor and inaugural Director of the
        Dahdaleh Institute of Global Health Research at York University; former
        International President of Médecins Sans Frontières; co-founder of the
        Drugs for Neglected Diseases Initiative (DNDi); co-founder of Dignitas
        International.
      </li>
      <li>
        <strong>Sir Michael Rawlins</strong>, former Chair of the UK National
        Institute of Health & Clinical Excellence (NICE).
      </li>
      <li>
        <strong>Jan Rosier</strong>, Professor of Biotech Business at University
        College Dublin; Former Vice President of Janssen Drug Development.
      </li>
      <li>
        <strong>Karin Roth</strong>, former member of the German Parliament and
        former speaker of the SPD-faction in the Subcommittee on Health in
        Developing Countries.
      </li>
      <li>
        <strong>Amartya Sen</strong>, Professor of Economics and Philosophy,
        Harvard University; Nobel Prize Winner in Economics.
      </li>
      <li>
        <strong>Peter Singer</strong>, Ira W. DeCamp Professor of Bioethics,
        Princeton University.
      </li>
      <li>
        <strong>Judith Whitworth</strong>, former Director of the John Curtin
        School of Medical Research at ANU; former Chair of the WHO Global
        Advisory Committee on Health Research.
      </li>
      <li>
        <strong>Heidemarie Wieczorek-Zeul</strong>, former German Federal
        Minister for Economic Cooperation and Development.
      </li>
      <li>
        <strong>Richard Wilder</strong>, General Counsel and Director of
        Business Development at the Coalition for Epidemic Preparedness
        Innovations.
      </li>
    </ul>
  </Layout>
)

export default injectIntl(SecondPage)
