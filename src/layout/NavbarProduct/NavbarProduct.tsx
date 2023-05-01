import React from 'react'
import StackRow from '../../shared/stack/StackRow/StackRow'
import Button from '../../shared/button/Button/Button'

export default function NavbarProduct() {
  return (
    <StackRow padding={2}>
      {productRouters.map((router: { href: string, name: string }, index: number) => <Button href={router.href} key={index}>{router.name}</Button>)}
    </StackRow>
  )
}
const productRouters = [
  {
    href: "keyboard",
    name: "Bàn phím"
  },
  {
    href: "sound",
    name: "Âm thanh"
  },
  {
    href: "laptop",
    name: "Laptop"
  },
  {
    href: "ergonomic-chair",
    name: "Ghế công thái học"
  }
]