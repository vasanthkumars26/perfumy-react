import React from 'react'

const navv = [
 { name:"Home | Products | About | Contact",href:"#"}
]


const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white p-5 w-auto'>
    <h1 className='text-2xl font-bold'>Perfumy</h1>
    {navv.map((link) => (
      <p className='text-xl text-gray-500 '><a href="{link.href}">{link.name}</a></p>
    ))}
    </nav>
  )
}

export default Navbar