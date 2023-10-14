function Navbar() {
  return (
    <nav class="fixed-top navbar navbar-expand-lg navbar-dark dark" >
      <a class="navbar-brand" href="#about">Priya Prasad</a>
      

      <div class="collapse navbar-collapse right" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#Experience">Experience</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link active" href="#skills">Skills<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#projects">Projects</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="#contact">Contact Me</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn button my-2 my-sm-0" type="submit">Hire Me</button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;