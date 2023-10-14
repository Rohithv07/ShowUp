

function Contact() {
  return (
    <section id="contact" className="relative">

      <div className="bg-styling font-italic text-white ">
        <div className="container ">
          <div className="row">
            <div className="rounded-lg col allign-right">


              <div class="screen">
                
                <div class="screen-body">
                  <div class="screen-body-item left">
                    <div class="app-title">
                      <span>Reach out </span>
                      <span>to me!</span>
                    </div>
                    <div class="app-contact">CONTACT INFO : priyaganga98@gmail.com</div>
                  </div>
                  <div class="screen-body-item">
                    <form class="app-form" method="POST" action="https://formspree.io/f/mdobzwoo" target="_blank" name="portfolio" >
                      <div class="app-form-group">
                        <input  name="portfolio"  class="app-form-control" placeholder="NAME"  />
                      </div>
                      <div class="app-form-group">
                        <input name="portfolio"  class="app-form-control" placeholder="EMAIL" />
                      </div>
                      <div class="app-form-group">
                        <input name="portfolio"  class="app-form-control" placeholder="CONTACT NO" />
                      </div>
                      <div class="app-form-group message">
                        <input name="portfolio"  class="app-form-control" placeholder="MESSAGE" />
                      </div>
                      <div class="app-form-group buttons">
                        <button class="app-form-button" type="submit" onclick="http://localhost:3000/"> SEND</button>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
export default Contact;