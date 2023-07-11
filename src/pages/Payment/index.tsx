import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { Container, Form, Inner } from './styles'

export default function Payment() {
  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações Pessoais</h4>

          <div className='field'>
            <label htmlFor='full-name'>Nome e sobrenome</label>
            <input
              type='text'
              name='full-name'
              id='full-name'
              autoComplete='name'
            />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
              />
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <input
                type='tel'
                name='mobile'
                id='mobile'
                autoComplete='phone'
              />
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF / CNPJ</label>
              <input
                type='text'
                name='document'
                id='document'
                autoComplete='name'
              />
            </div>
          </div>
        </Form>
      </Inner>
    </Container>
  )
}
