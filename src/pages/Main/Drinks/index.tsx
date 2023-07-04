import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interfaces/SnackData'

import { getDrinks } from '../../../services/api'

import {} from './styles'

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const drinksResponse = await getDrinks()

      setDrinks(drinksResponse.data)
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}
