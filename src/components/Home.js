import './Home.css'
import ContactItems from '../data/contacts.json'


export default function Home() {
    const Contacts = ContactItems.map(ContactItem => {
        return (
            <a href={ContactItem.href}>
                <img className='homepage-icon' src={require(`../media/${ContactItem.image}`)} alt=''></img>
            </a>
        )
    }
    )
    return (
        <div className='container homepage'>
            <img className=' profile-pic drop-shadow-2xl' src={require('../media/Profile-picture.png')} alt=''></img>
            <div>
                <h2 className='homepage-name text-center text-white md:text-8xl' >Gia Bao (Stephen) Tran</h2>
                <p className='homepage-description text-center text-white md:text-4xl mt-5' >SRE Intern at Innovapost</p>
                <div className='move-up homepage-icon-container flex my-20   '>
                    {Contacts}
                </div>
            </div>
        </div>


    )
}