import { ReactElement, useEffect, useState } from 'react'
import CardSurah from '../components/Card/CardSurah'
import LayoutMain from '../components/Layouts/LayoutMain'
import { getListSurah } from '../services/Surah'
import { NextPageWithLayout } from './_app'

const Page = () => {
  const [surah, setSurah] = useState([])

  
  const getSurah = () => {
    getListSurah().then(res => {
      setSurah(res.data)
    })
  }
  useEffect(() => {
    getSurah()
  }, [setSurah])

  

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 pb-10 gap-4 min-h-screen'>
      {surah.map((surah:any) => 
      (
        <CardSurah key={surah.nomor} surah={surah} />
      ))}
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutMain>
      {page}
    </LayoutMain>
  )
}

export default Page
