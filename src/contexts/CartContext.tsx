import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { SnackData } from '../interfaces/SnackData'

import { snackEmoji } from '../helpers/snackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

// interface RemoveSnackFromCart {
//   id: number
//   snack: string
// }

// interface UpdateCartProps {
//   id: number
//   snack: string
//   newQuantity: number
// }

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (id: number, snack: Snack) => void
  snackCartIncrement: (id: number, snack: Snack) => void
  snackCartDecrement: (id: number, snack: Snack) => void
  confirmOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // Procura se já existe um item snack igual
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )

    // Atualizar o carrinho caso exista um item igual
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }
        return item
      })

      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado no carrinho!`)
      setCart(newCart)

      return
    }

    // Adicionar no carrinho, caso seja um item novo
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no carrinho!`)
    setCart(newCart)
  }

  function removeSnackFromCart(id: number, snack: Snack): void {
    //
  }

  function updateSnackQuantity(id: number, snack: Snack, newQuantity: number) {
    //
  }

  function snackCartIncrement(id: number, snack: Snack): void {
    updateSnackQuantity(id, snack, snack.quantity + 1)
  }

  function snackCartDecrement(id: number, snack: Snack): void {
    updateSnackQuantity(id, snack, snack.quantity - 1)
  }

  function confirmOrder(): void {
    //
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
