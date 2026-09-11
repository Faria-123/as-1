import { Suspense, useState } from 'react'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import Technologies from './Technology/Technologies'
import type { Idata } from './TYpe/Type'
import Footer from './Components/Footer'
const dataa = async (): Promise<Idata> => {
  const res = await fetch('/data.json')
  const datas = await res.json()
  return datas;
}

function App() {
  const data = dataa();
  // console.log(data);

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies data={data}></Technologies>
      </Suspense>
      <Footer></Footer>

    </>
  )
}

export default App
