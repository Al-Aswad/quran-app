import { ReactElement } from 'react'
import LayoutMain from '../components/Layouts/LayoutMain'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p className='text-red-400'>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutMain>
      {page}
    </LayoutMain>
  )
}

export default Page
