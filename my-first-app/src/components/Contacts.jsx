import SvgEmail from "../svgCode/SvgEmail";
import SvgMessage from "../svgCode/SvgMessage";
import SvgUser from "../svgCode/SvgUser";

import SvgYoutube from "../svgCode/SvgYoutube";
import SvgInstagram from "../svgCode/SvgInstagram";
import SvgGithub from "../svgCode/SvgGithub";
import SvgLinkedin from "../svgCode/SvgLinkedin";

function Contacts() {
  return (
    <section id="5" className="contactContainer">

      <div className="contactImgContainer">
      </div>

      <div className="contactSubContainer">
        <div className="personalInfo">
          <div className="contactText">
              <h3>Contact</h3>
              <p>
                If there is one project that you want me to participate or a
                service would you like to know more about it, let me know!
              </p>
          </div>
          {/* <div className="contactContent">
            <div className="personalIcons">
                <SvgMyPhone />
                <SvgMyEmail />
                <SvgMyLocation /> 
                <span className="phoneData">PONE LOS ICONOS DE SOCIAL MEDIA AQUI</span>
                <span className="emailData">PONERLE TOOLTIPS A ALGUNAS COSAS&#8203;.com</span>
                <span className="locationData">QUITA ESTOS DATOS PERSONALES</span>
            </div>
            <div className="personalData">
            </div>
          </div> */}
          <div className="contactAllLinks">
                    <div className='contactRowLinks'>
                        <a href='#' className='contactLink'>
                    <SvgYoutube />
                        </a>
                        <a href='#' className='contactLink'>
                    <SvgInstagram />
                        </a>
                        <a href='#' className='contactLink'>
                    <SvgGithub />
                        </a>
                        <a href='#' className='contactLink'>
                    <SvgLinkedin />
                        </a>
                    </div>
          </div>
        </div>
      </div>

      <div className="contactSubContainer">
        <form className="myForm">
          <div className="inputGroup">
            <input className="myName" type={"text"} required placeholder=" "/>
            <label className="contactLabel" htmlFor="myName">
              <SvgUser />
              Name
            </label>
          </div>
          <div className="inputGroup">
            <input className="myEmail" type={"email"} required placeholder=" " />
            <label className="contactLabel" htmlFor="myEmail">
              <SvgEmail />
              Email
            </label>
          </div>
          <div className="inputGroup">
            <textarea
              className="myMessage"
              type={"text"}
              rows={10}
              required
              placeholder=" "
            ></textarea>
            <label className="contactLabel" htmlFor="myMessage">
              <SvgMessage /> Message
            </label>
          </div>
          <button type={"submit"} className="contactButton">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;