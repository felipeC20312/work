import React from "react";
import Layout from "../components/layout";
import Section01 from "../components/about_page/section01/section01";
import Section02 from "../components/about_page/section02/section02";

const About = () => {
  return (
    <>
      <Layout>
        <Section01/>
        <Section02/>
      </Layout>
    </>
  )
}

export default About;
