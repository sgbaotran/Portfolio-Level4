import './Contact.css'



export default function Contact() {

    return (

        <>
            <h2 className='contact-title text-center text-white' >Contact</h2>

            <div className='container contacts mx-auto'>
                {/* ON LEFT */}

                <form className="mx-auto block px-3 md:px-10 md:w-8/12 client-contact-form" action="https://formsubmit.co/sttr2130@gmail.com" method="POST">

                    <input className='form-item my-5 form-client-name ' type="text" name="name" placeholder='Name' required />

                    <input className='form-item my-5 form-client-subject' type="text" name="subject" placeholder='Subject' required />

                    <div className='my-5 form-client-information'>
                        <input className='form-item' type="email" name="email" placeholder="Email" required />
                        <input className='form-item' type="phone-number" name="phone-number" placeholder="Phone Number" required />
                    </div>

                    <textarea className='form-item my-5 form-client-content' type="content" name="content" placeholder="Message" required />
                    <button className='form-item mx-auto form-client-submit ' type="submit">Send</button>
                </form>


            </div>
        </>

    )
}