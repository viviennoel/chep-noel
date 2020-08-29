//FUNCTION TO ADD THE RESPONSIVE MENU TO ALL THE PAGES.

User_logged();

function User_logged() {
    let token = JSON.parse(window.localStorage.getItem('token'));
    if (token === null || token === {}) {
        console.log('Signedout');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        Add_Login_responsif();
    } else {
        console.log('loggedin');
        Add_Menu_responsif_logged();
    }
}


function Add_Login_responsif() {
    let menu_responsif = `
<!--Popup Login / Signup or Later -->

<div class="Popup__background-home" id="Popup__background-home" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
    <div class="Popup__background_dark" id="Popup__background_dark" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000"></div>
        <div id="Popup__Auth-home" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                <div id="Explications_general"></div>
                    <div class="d-flex justify-content-around pt-5 pb-1 Menu_Auth">

                        <a href="#Popup__Auth" onclick="Login_content()" id="Popup__Login">Connexion</a>

                        <h3>|</h3>

                        <a href="#Popup__Auth" onclick="Signup_content()" id="Popup__Signup">Inscription</a>

                    </div>
                    <div id="Auth__Form" class="pb-5 pt-4">
                        <h2>Connexion</h2>
                        <p>Bienvenue sur votre compte</p>
                        <form method="post" id="contact" autocomplete="on">
                            <label for="Email">Email</label>
                            <input type="text" name="Email" id="Email" placeholder="Email" required>

                            <label for="Password">nom</label>
                            <input type="text" name="Password" id="Password" placeholder="Mot de passe" required>

                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Login()">Connexion</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
    document.getElementById('home_article').innerHTML = menu_responsif;
        
}





function Add_Menu_responsif_logged() {

    let menu_responsif = `
<!--Popup Explications -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="../../IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2" id="Explications_general">
                    
                </div>
            </div>
        </div>
    </div>


    <div class="absolute3">
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bars">Mon espace </i>
            </button>
            <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Mobile" href="#">Déconnexion</a>
            </div>
    </div>

    <div class="absolute_title-home blanc" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="3000">
        <h1>Bienvenue au CHEP Numérique!</h1>
    </div>
    `

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;

    let Article =
`
    <div class="row pt-4 pb-4 absolute_home">
            <div class="col-10 offset-1">
                <div class="row justify-content-around">
                    <div class="col-md-5 mt-auto mb-auto text-center blanc" data-aos="fade-left" data-aos-easing="ease-out" data-aos-duration="1000">
                        <h2 class="pb-3 pt-3">Bienvenue!</h2>
                        <p class="text-justify">Vous voici maintenant élèves du CHEP Numérique! Naviguez sur la plateforme pour retrouver du contenu interactif exclusif et les supports pédagogiques projetés en cours.</p>
                        <div class="button__wrapp">
                            <a href="../../HTML/DASHBOARD/index.html" class="button">Naviguer</a>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">

                            <div class="carousel-inner home_caroussel">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="../../IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                    <div class="carousel-caption text-center">

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../../IMAGES/HOME/Carroussel-home2.jpg" alt="Second slide">
                                    <div class="carousel-caption">

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../../IMAGES/HOME/Carroussel-home3.jpg" alt="Third slide">
                                    <div class="carousel-caption">

                                    </div>
                                </div>
                            </div>

                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>

                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
`



    document.getElementById('home_article').innerHTML = Article;
 




}