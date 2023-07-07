import { Head } from '../../../components/Head'
import { OrderHeader } from '../../../components/OrderHeader'
import { Container } from './styles'

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
    </Container>
  )
}
