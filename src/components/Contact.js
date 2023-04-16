import './Contact.css'



export default function Contact() {

    return (

        <>
            <h2 className='contact-title text-center text-white' >Contact</h2>

            <div className='container contacts mx-auto'>
                {/* ON LEFT */}

                <form className="mx-auto block px-3 md:px-10 md:w-8/12 client-contact-form" action="https://formsubmit.co/transtephen2402@gmail.com" method="POST">
                    
                    <div className='form-client-name my-5'>
                        <input className='form-item block' type="text" name="first-name" placeholder='First Name' required />
                        <input className='form-item block' type="text" name="last-name" placeholder='Last Name' required />
                    </div>

                    <div className='form-client-information my-5'>
                        <input className='form-item block' type="email" name="email" placeholder="Email" required />
                        <input className='form-item block' type="subject" name="subject" placeholder="Phone Number" required />
                    </div>

                    <textarea className='form-item my-5 block form-client-content' type="content" name="content" placeholder="Message" required />
                    <button className='form-item block form-client-submit mx-auto' type="submit">Send</button>
                </form>


            </div>
        </>

    )
}