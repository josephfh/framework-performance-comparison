'use client'
import { useContext } from 'react'
import { GlobalStateContext } from '../../../packages/providers-react/src'
import { Badge, Button } from 'ui-react'
import { icon, t } from 'utils'

export default function Inner(): JSX.Element {
  const { addToCart, cartCount, cartItems, clearCart, deleteFromCart } =
    useContext(GlobalStateContext)
  return (
    <div>
      <button className='relative text-5xl' type='button'>
        <span dangerouslySetInnerHTML={{ __html: icon('cart') }} />
        <Badge count={cartCount} />
      </button>
      {cartCount > 0 && (
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id} className='flex gap-x-2'>
              <div>
                <strong>{cartItem.title}</strong>
              </div>
              <div>
                <small>{cartItem.inStock ? 'In stock' : 'Out of stock'}</small>
              </div>
              <div>€{cartItem.price}</div>
              <input
                className='inline-flex w-auto border'
                type='number'
                value={cartItem.quantity}
              />
            </li>
          ))}
        </ul>
      )}
      <div className='flex gap-x-2'>
        <Button
          onClick={() => {
            addToCart('test2')
          }}
          text={t('cart.addToCart')}
        />
        <Button
          onClick={() => {
            deleteFromCart('test2')
          }}
          text={t('cart.removeFromCart')}
        />
        <Button
          onClick={() => {
            clearCart()
          }}
          text={t('cart.clearCart')}
        />
      </div>
    </div>
  )
}
