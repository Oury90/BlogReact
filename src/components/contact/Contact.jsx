import "./contact.css";


function Contact(){
    return(
        <div className="contact-container">
            <div className="content">
                <div className="contact-box left-box"> 
                    <h2>Contact Me</h2>
                    <p>Amadou Oury Diallo</p>
                    <div className="contact-navigation">
                        <a href="#"> 441 Ferry Road Winnipeg</a>
                        <a href="#">ouryetude@gmail.com</a>
                        <p>Tel: +1 *************</p>
                    </div>
                </div>

                <div className="contact-box"> 
                    <div className="containers">
                        <form>
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label for="lname">Larst Name</label>
                            <input type="text" id="lname" name="larstnae" placeholder="Your Larsname"/>

                            <label for="lname">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email"/>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;