import './Header.css'

function Header(){

        return (
            <header>
                <div className='py-2 mx-auto container flex justify-between flex-wrap 	'>
                    <img className=' mb-5 md:mb-0 logo text-stone-950' src={require('../media/logo-transparent.png')} alt='logo' />
                    
                    <nav className='mx-auto'>
                        <ul className='nav-bar' >
                            <li className='nav-item text-sm sm:text-lg text-white'><a href='/'>Home</a></li>
                            <li className='nav-item text-sm sm:text-lg text-white'><a href='/experience'>Experience</a></li>
                            <li className='nav-item text-sm sm:text-lg text-white'><a href='/project'>Project</a></li>
                            <li className='block lg:hidden nav-item text-sm sm:text-lg text-white'><a href='/contact'>Contact</a></li>
                        </ul>
                    </nav>
                    <a href='/contact' className='contact hidden lg:block text-white' >Contact</a>
                </div>
            </header>

            

        )
    }


// function Header(props){
//     return (
//         <header>
//             <div className='container mx-auto'>
//                 <img className='logo text-stone-950 py-2' src={require('../media/logo-transparent.png')} alt='logo' />
//                 <nav className='nav-items'>
//                     <ul>
//                         <li className='text-white'>Services</li>
//                         <li className='text-white'>Project</li>
//                         <li className='text-white'>About</li>
//                     </ul>
//                 </nav>

//                 <a href = 'facebook.com' className='contact hidden md:block text-white'>Contact</a>
//             </div>

//         </header>
//     )
// }

export default Header