import { useForm, SubmitHandler } from 'react-hook-form'
import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { OrderHeader } from '../../components/OrderHeader'
import { Container, Form, Inner } from './styles'

type FieldValues = {
  fullName: string
  email: string
  mobile: string
}

export default function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações Pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome</label>
            <input
              type='text'
              id='fullName'
              autoComplete='name'
              {...register('fullName', { required: true })}
            />
            {errors.fullName && (
              <p className='error'>
                O nome e sobrenome é um campo obrigatório.
              </p>
            )}
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

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipcode'>CEP</label>
            <input
              type='text'
              name='zipcode'
              id='zipcode'
              autoComplete='postal-code'
              style={{ width: '120px' }}
            />
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type='text' name='street' id='street' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <input type='text' name='number' id='number' />
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <input type='text' name='complement' id='complement' />
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <input type='text' name='neighborhood' id='neighborhood' />
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <input type='text' name='city' id='city' />
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <select name='state' id='state'>
                <option value=''>Selecione</option>
                <option value='AC'>Acre</option>
                <option value='AL'>Alagoas</option>
                <option value='AP'>Amapá</option>
                <option value='AM'>Amazonas</option>
                <option value='BA'>Bahia</option>
                <option value='CE'>Ceará</option>
                <option value='ES'>Espírito Santo</option>
                <option value='GO'>Góias</option>
                <option value='MA'>Maranhão</option>
                <option value='MT'>Mato Grosso</option>
                <option value='MS'>Mato Grosso do Sul</option>
                <option value='MG'>Minas Gerais</option>
                <option value='PA'>Pará</option>
                <option value='PB'>Paraíba</option>
                <option value='PR'>Paraná</option>
                <option value='PE'>Pernambuco</option>
                <option value='PI'>Piauí</option>
                <option value='RJ'>Rio de Janeiro</option>
                <option value='RN'>Rio Grande do Norte</option>
                <option value='RS'>Rio Grande do Sul</option>
                <option value='RO'>Rondônia</option>
                <option value='RR'>Roraima</option>
                <option value='SC'>Santa Catarina</option>
                <option value='SP'>São Paulo</option>
                <option value='SE'>Sergipe</option>
                <option value='TO'>Tocantins</option>
                <option value='DF'>Distrito Federal</option>
              </select>
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <input
              type='text'
              name='credit-card-number'
              id='credit-card-number'
              autoComplete='cc-number'
            />
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>
              Nome impresso no cartão
            </label>
            <input
              type='text'
              name='credit-card-holder-name'
              id='credit-card-holder-name'
              autoComplete='cc-name'
            />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <input
                type='text'
                name='credit-card-expiration'
                id='credit-card-expiration'
                autoComplete='cc-exp'
              />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>
                Código de segurança (CVV)
              </label>
              <input
                type='text'
                name='credit-card-code'
                id='credit-card-code'
                autoComplete='cc-csc'
              />
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
