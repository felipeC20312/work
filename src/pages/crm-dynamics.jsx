import React from 'react';
import Layout from '../components/layout';
import Section01 from '../components/crm_dynamics_lp/section01/section01';
import Section02 from '../components/crm_dynamics_lp/section02/section02';
import Section03 from '../components/crm_dynamics_lp/section03/section03';
import Section04 from '../components/crm_dynamics_lp/section04/section04';

const CRM_Dynamic_LandingPage = () => {
  return (
    <>
      <Layout>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
      </Layout>
    </>
  )
}

export default CRM_Dynamic_LandingPage;