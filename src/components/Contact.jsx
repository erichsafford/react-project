function Contact() {

    return (
        <>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="newsletter_signup">Check to sign up for our newsletter: </label>
                <input type="checkbox" name="newsletter_signup" id="newsletter_signup" />
                <label htmlFor="message">Send us a message!</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Contact