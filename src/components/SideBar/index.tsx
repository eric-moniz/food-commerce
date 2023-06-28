import { Container } from './styles'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function SideBar() {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='Abrir e fechar o menu lateral' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#' className='active'>
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </a>
          </li>
          <li>
            <a href='#' className=''>
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a href='#' className=''>
              <SodaPopIcon />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href='#' className=''>
              <IceCreamIcon />
              <span>Sobremesas</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
