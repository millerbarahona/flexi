import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Part1 } from '../components/Part1'
import { Part2 } from '../components/Part2'
import { Part3 } from '../components/Part3'

const Home: NextPage = () => {
  Header
  return (
    <div>
      <div>
        <Header/>
        <Part1/>
        <Part2/>
        <Part3/>
      </div>
    </div>
  )
}

export default Home
