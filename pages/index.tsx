import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import LayoutAuth from '../components/Layouts/LayoutAuth'
import LayoutMain from '../components/Layouts/LayoutMain'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p className='text-red-400'>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth>
      {page}
    </LayoutAuth>
  )
}

export default Page
