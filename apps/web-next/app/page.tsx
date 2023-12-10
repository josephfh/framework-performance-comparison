import Cart from './cart'

export default function Page(): JSX.Element {
  return (
    <main>
      <h1 className='bg-red-500 text-3xl font-bold underline'>Next.js</h1>
      <Cart />
    </main>
  )
}
