import React from "react";
import Layout from "../components/layout";
import Section01 from "../components/section01/section01";
import Section02 from "../components/section02/section02";
import { Toaster } from 'sonner'

const Index = () => {
  return (
    <>
      <Layout>
        <Section01 />
        <Section02 />
      </Layout>
      <Toaster position="top-right" />
    </>
  )
}

export default Index;