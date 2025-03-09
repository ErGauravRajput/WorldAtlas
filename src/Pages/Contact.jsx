export const Contact=()=>{

    const handleFormSubmit=(formData)=>{
        const formInputData=Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text" required  className="form-control"
                autoComplete="off" placeholder="Enter Your Name"
                name="username"/>

                <input type="email" required
                autoComplete="off" placeholder="Enter Your Email"
                name="email"
                className="form-control"/>

                <textarea
                className="form-control"
                rows="10" placeholder="Enter Your Message"
                required autoComplete="off"
                name="message"/>

                <button type="submit" value="send">Send</button>
            </form>
            </div>
        </section>
    );
}