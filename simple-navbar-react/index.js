function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Pricing
            </a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}


/*
    Challenge: 
    1- Create your own custom React component!
    2- Call it "MainContent", and have it return a simple
    3- h1 alement thtaht says "I'm learning React!"

    Afterrward, render it below thee Navbar (wich you do inside the ReactDOM.render below)
*/

function MainContent(){
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(<div><Navbar />
<MainContent/>
</div>, document.getElementById("root"));
