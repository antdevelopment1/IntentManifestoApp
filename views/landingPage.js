// const { header, footer, logoutButton, login_registerButton } = require('./helper')

function page(content) {
    
    return `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
        <link rel="stylesheet" href="stylesheets/styles.css">
    </head>
    <body>
    <section class="hero-section">
        <div class="nav-container">
            <header>
                <div class="header-h2">
                <!-- <h2><a href="#">Intent Manifesto</a></h2> -->
                </div>
                <nav class="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Inspiration</a></li>
                </nav>
            </header>
        </div>
        <div class="hero-title-content">
            <div class="hero-title">
                <h1 class="title">Intent Manifesto</h1>
                <div class="hero-hr">
                    <hr>
                </div>
            </div>
            <div class="hero-message">
                <p>Pour your thoughts out</p>
                <p>and script your dreams into reality.</p>
            </div>
            <div class="button-container">
                <a href="#" class="button button1">Sign Up</a>
                <a href="#" class="button button2">Learn More</a>
            </div>
        </div> 
    </section>

    <section class="about-section">
        <div class="about-title">
            <h1>About Intent Manifesto</h1>
        </div>
        <div class="about-hr">
            <hr>
        </div>
        <div class="about-content">
            <div class="about-image">
               
            </div>
            <div class="about-p">
                <p>
                    Et spoon rich, siphon, strong grounds, single shot a redeye bar shop. Redeye whipped, americano that, decaffeinated robust latte to go rich. 
                    Java aroma milk turkish extra dark galão. Id as, at, mazagran robusta frappuccino grinder cream blue mountain white french press variety. 
                    Frappuccino single shot, flavour spoon turkish dripper pumpkin spice foam. 
                </p>
                <p>Grounds acerbic con panna frappuccino et french press breve beans kopi-luwak decaffeinated. Mocha robust, steamed coffee americano bar crema crema 
                    aroma. Strong as french press mazagran, grinder, carajillo cappuccino mazagran macchiato mazagran. Espresso french press saucer, sweet organic that a 
                    café au lait body caramelization ristretto irish. Aroma at, roast so beans skinny grounds.
                </p>
                <a href="#" class="about-button">Join Now</a>
            </div>
        </div>
    </section>

    <section class="gallery-section">
            <div class="gallery-title">
                <h1>Inspiration Gallery</h1>
            </div>
            <div class="hrgallery">
                <hr>
            </div>
            <div class="gallery-p">
                <p>Words are but pictures of our thoughts...
                    <br>
                   Explore the thoughts of others.
                </p>
            </div>
            <div class="gallery-container">
                <div class="image img1"><img src="/images/journal2.jpg" alt=""></div>
                <div class="image img2"><img src="/images/journal9.jpg" alt=""></div>
                <div class="image img3"><img src="/images/journal11.jpg" alt=""></div>
                <div class="image img4"><img src="/images/journal12.jpg" alt=""></div>
                <div class="image img4"><img src="/images/journal13.jpg" alt=""></div>
                <div class="image img5"><img src="/images/journal14.jpg" alt=""></div>
                <div class="image img6"><img src="/images/journal3.jpg" alt=""></div>
                <div class="image img7"><img src="/images/journal5.jpg" alt=""></div> 
                <div class="image img7"><img src="/images/journal6.jpg" alt=""></div> 
                <div class="image img8"><img src="/images/journal4.jpg" alt=""></div>
                <div class="image img9"><img src="/images/journal17.jpg" alt=""></div>
                <div class="image img9"><img src="/images/journal19.jpg" alt=""></div>
            </div>
    </section>

    <section class="contact-section">
        <div class="contact-container">
            <div class="contact-title">
                <h1>Keep In Touch</h1>
            </div>
            <div class="hrcontact">
                <hr>
            </div>
        </div>
            <div class="contact-form">
                <form class="myform" action="submit">
                    First Name: 
                    <input type="text" width="20" height="20">
                    <br>
                    Last Name:
                    <input type="text">
                    <br>
                    Email:
                    <input type="text">
                    <br>
                    Message:
                    <input type="text">
                    <br>
                </form>
            </div>
            <div class="footer-section">
                <footer>
                    <div class="footer-li">
                        <li>april</li>
                        <li>april</li>
                        <li>lauren</li>
                        <li>lauren</li>
                    </div>
                    <div class="footer-p">
                            <p class="copywrite">
                                Pictures courtesy of Upsplash.
                            </p>
                        </div>
                </footer>
            </div>
    </section>

    </body>
    </html>  
    `;
}

module.exports = page;