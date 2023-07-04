import { useContext } from 'react'
import { SnackContext } from '../../../App'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import {} from './styles'

export default function Drinks() {
  const { drinks } = useContext(SnackContext)

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}
