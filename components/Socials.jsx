import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaInstagram, FaBlog } from 'react-icons/fa'

const socials = [
    {
        icon: <FaGithub/>,path:''
    },
    {
        icon: <FaLinkedinIn/>,path:''
    },
    {
        icon: <FaInstagram/>,path:''
    },
    {
        icon: <FaBlog/>,path:''
    }

]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=>(
        <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
        </Link>
    ))}
  </div>
}

export default Socials