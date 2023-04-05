import './Header.css'

function Header(){


        return (
            <header>
                <div className='py-2 mx-auto container flex justify-between'>
                    <img className='logo text-stone-950' src={require('../media/logo-transparent.png')} alt='logo' />
                    
                    <nav className='hidden md:block'>
                        <ul className='nav-bar' >
                            <li className='nav-item text-white'>Services</li>
                            <li className='nav-item text-white'>Project</li>
                            <li className='nav-item text-white'>About</li>
                        </ul>
                    </nav>
                    <button className='contact hidden md:block text-white' >Contact</button>
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