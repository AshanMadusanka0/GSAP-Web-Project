import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href='#home' className=''>
                <p>Velvet Pour</p>
            </a>

            <ul>
                {[{
                  title: 'About Us',id: "about"
                },
                [{
                  title: 'About Us',id: "about"
                },[{
                  title: 'About Us',id: "about"
                },[{
                  title: 'About Us',id: "about"
                },]}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
