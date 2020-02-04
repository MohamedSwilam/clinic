<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/bootstrap.min.css'))}}">
    <!-- Jquery UI CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/jquery-ui.css'))}}">
    <!-- IcoFont Min CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/icofont.min.css'))}}">
    <!-- Animate CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/animate.css'))}}">
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/owl.carousel.css'))}}">
    <!-- Magnific Popup CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/magnific-popup.css'))}}">
    <!-- Owl Theme Default CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/owl.theme.default.min.css'))}}">
    <!-- Style CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/style.css'))}}">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="{{ asset(mix('css/website/responsive.css'))}}">

    <title>Dental Clinic</title>
</head>
@php
    $videos = [
        [
            'frame' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/4ryYYhhmk8g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'category' => 'videos'
        ],
        [
            'frame' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/7HMgptSuJHk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'category' => 'videos'
        ],
        [
            'frame' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/wVD5GiTuoiw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'category' => 'videos'
        ],
        [
            'frame' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/dVi4x-Lt0rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'category' => 'videos'
        ],
    ];

    $images = [
        [
            'category' => 'crown',
            'url' => '/images/crown/h.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/n.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/q.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/r.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/v.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/w.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/5.jpg'
        ],
        [
            'category' => 'crown',
            'url' => '/images/crown/6.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/1.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/2.1.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/2.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/3.1.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/3.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/4.jpg'
        ],
        [
            'category' => 'hollywood-smile',
            'url' => '/images/hollywood-smile/renta155.jpg'
        ],
        [
            'category' => 'composite-veners',
            'url' => '/images/composite-veners/IMG_5105.jpg'
        ],
        [
            'category' => 'composite-veners',
            'url' => '/images/composite-veners/IMG_6082.jpg'
        ],
        [
            'category' => 'endodontic-treatment',
            'url' => '/images/endodontic-treatment/1.jpeg'
        ],
        [
            'category' => 'endodontic-treatment',
            'url' => '/images/endodontic-treatment/2.jpeg'
        ],
        [
            'category' => 'endodontic-treatment',
            'url' => '/images/endodontic-treatment/3.jpeg'
        ],
    ];

    $treatments = [
        [
            'url' => '/images/treatments/1.jpg',
            'title' => 'DENTAL CARE',
            'description' => 'Our dental professionals are concerned about keeping your smile healthy. We offer a full range of dental procedures & teeth repair.'
        ],
        [
            'url' => '/images/treatments/2.jpg',
            'title' => 'TOOTH-COLOURED',
            'description' => 'Advances in biomaterial technology have made tooth colored fillings enter an era of absolute confidence as an alternative to amalgam fillings.'
        ],
        [
            'url' => '/images/treatments/3.jpg',
            'title' => 'DENTURES',
            'description' => 'Cosmetic dentures are high quality dentures made so as to achieve an aesthetic result and providing appropriate lip support.'
        ],
        [
            'url' => '/images/treatments/4.jpg',
            'title' => 'TREATMENTS',
            'description' => 'It is the field of dentistry dedicated to the art and science of aesthetics aimed at enhancing a person’s smile and overall appearance.'
        ],
        [
            'url' => '/images/treatments/5.jpg',
            'title' => 'VENEERS',
            'description' => 'Dental veneers are a popular cosmetic treatment option to improve the aesthetic appearance of your teeth.'
        ],
        [
            'url' => '/images/treatments/6.jpg',
            'title' => 'TEETH WHITENING',
            'description' => 'Dental tooth whitening is simple, effective, with few side effects when applied by a qualified dental professional and produces a brighter smile.'
        ],
        [
            'url' => '/images/treatments/7.jpg',
            'title' => 'GUMMY SMILE',
            'description' => 'The gums are lifted to improve not only their appearance, but also the size, shape and emerging appearance of the teeth.'
        ],
    ];
@endphp

<body data-spy="scroll" data-offset="70">
<!-- Start Preloader Area -->
<div class="preloader-area">
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</div>
<!-- End Preloader Area -->

<!-- Start Navbar Area -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-2 col-md-3">
                <a class="navbar-brand" href="{{route('welcome-en')}}"><img style="height: 55px;width: 80px;padding: 0;" src="/images/website/logo.png" alt="logo"></a>
            </div>

            <div class="col-12 col-lg-8 col-md-6">
                <div class="navbar-toggle-btn">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#doctors">Doctors</a></li>
                        <li class="nav-item"><a class="nav-link" href="#appointment">Appointments</a></li>
                        <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
                        <li class="nav-item"><a class="nav-link" href="#feedback">Feedback</a></li>
                        <li class="nav-item"><a class="nav-link" href="#treatment">Treatments</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

{{--            <div class="col-12 col-lg-2 col-md-3 text-right">--}}
{{--                <a href="{{route('welcome-ar')}}" class="appointment-btn white-btn">العربية</a>--}}
{{--            </div>--}}
        </div>
    </div>
</nav>
<!-- End Navbar Area -->

<!-- Start Main Banner Area -->
<div id="home" class="main-banner main-banner-two">
    <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class="hero-slides">
                            <div class="hero-content">
                                <h1>Our mission is to deliver the highest quality care, unprecedented comfort, and service. We are committed to delivering the very best results for you, whether its</h1>
                                <ul>
                                    <li>
                                        Creating the perfect smile
                                    </li>
                                    <li>
                                        Reconstructing your entire mouth
                                    </li>
                                    <li>
                                        Helping you achieve total wellness
                                    </li>
                                    <li>
                                        change your life
                                    </li>
                                </ul>
                            </div>

                            <div class="hero-content">
                                <h1>At British Dental Clinic we have been proud to combine modern techniques and high-tech equipment</h1>
                            </div>

                            <div class="hero-content">
                                <h1>Doctor Kareem Ibraheem and his team deliver a personalized and comfortable dental care experience</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12">
                        <div class="hero-video">
                            <a href="https://www.youtube.com/watch?v=AE8UWj9PxRI" class="video-play-btn popup-video"><i class="icofont-play-alt-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Main Banner Area -->

<!-- Start Boxes Area -->
<section class="boxes-area ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="single-box">
                    <i class="icofont-doctor"></i>
                    <h3>At British Dental Clinic</h3>
                    <p>We strive to always be on the cutting edge and among the first to introduce new technologies that will enhance our abilities.</p>
                    <br>
                    <br>
                    <br>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="single-box">
                    <i class="icofont-ambulance-cross"></i>
                    <h3>Dental Care</h3>
                    <p>A visit to British Dental Clinic will offer you best everlasting experience of dental care, aligned with our comfortable ambiance and our friendly staff, that will ensure that you are in good hands.</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="single-box">
                    <i class="icofont-operation-theater"></i>
                    <h3>Individual Treatment</h3>
                    <p>From diagnosis to planning and treatment, every patient is given special individual attention.
                    </p>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="single-box">
                    <i class="icofont-stretcher"></i>
                    <h3>Our Clinic</h3>
                    <p>Our clinic is open 7 days per week from 8 am to 8 pm. Our Friday timing are 10 am to 8 pm. All patients with emergency needs will be seen on the same day.</p>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Boxes Area -->

<!-- Start Why Choose Us Area -->
<section id="about" class="why-choose-us ptb-100 bg-f9faff">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <div class="row about-image">
                    <div class="col-6 col-lg-6 col-md-6">
                        <div class="image">
                            <img src="/images/website/about-img1.jpg" alt="about">
                        </div>
                    </div>

                    <div class="col-6 col-lg-6 col-md-6">
                        <div class="image">
                            <img src="/images/website/about-img2.jpg" alt="about">
                        </div>
                    </div>

                    <div class="col-6 col-lg-6 col-md-6">
                        <div class="image mt-30">
                            <img src="/images/website/about-img3.jpg" alt="about">
                        </div>
                    </div>

                    <div class="col-6 col-lg-6 col-md-6">
                        <div class="image mt-30">
                            <img src="/images/website/about-img4.jpg" alt="about">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-12">
                <div class="section-title">
                    <h3>Why Choose Us</h3>
                    <span>British Dental Clinic</span>
                </div>

                <div class="why-choose-us-text">
                    <p>Every thing you need under one roof
                        Our comprehensive services allow you to receive all needed dental care right here in our state of art office from dental cleanings and fillings to dental implants and extractions.
                    </p>
                    <p>Our patient focused Approach
                        your treatments plan will perfectly matvh your needs, lifestyle, and goals. Even if its been years since last visited the dentist, we can help.
                        Our comfortable office, compassionate team, and minimally-invasive treatments will help you feel completely at ease
                    </p>

                    <ul>
                        <li>Tight Schedule? no worries!
                            we offer comrehensive dentistry five daus a week, making it easy to find appointments that fit your schedule!</li>
                        <li>Committed to Quality Materials
                            we use only the best master ceramists for our beautiful cosmetic work, you can count on restorations with life-like qualities.</li>
                        <li>Healthy smiles Radiate Confidence
                            you will love your smile and your visit, too! We will make sure you leave our office feeling comfortable, relaxed, and confident.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Why Choose Us Area -->


<!-- Start Testimonials Area -->
<section class="testimonials-area ptb-100" id="doctors">
    <div class="container">
        <div class="section-title">
            <h3>Who We Are</h3>
            <span>Meet Our Doctors</span>
            </div>

        <div class="row">
            @foreach($employees as $employee)
                <div class="col-lg-4 col-md-6">
                    <div class="single-feedback">
                        <div class="client-info">
                            <div class="img">
                                <img src="/storage/user/profile-picture/{{$employee->image}}" alt="doctor">
                            </div>
                            <h4>{{$employee->first_name}} {{$employee->last_name}}</h4>
                            <span>{{$employee->title}}</span>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
<!-- End Testimonials Area -->

<!-- Start Make an Appointment Area -->
<section id="appointment" class="appointment-area ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="section-title">
                    <h3>Make an Appointment</h3>
                    <span>Visit British Dental Care</span>
                </div>
            </div>

            <div class="col-lg-6 col-md-6">
                <div class="appointment-form">
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Phone Number">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select class="form-control">
                                        <option>Department</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select class="form-control">
                                        <option>Doctor</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" id="datepicker" class="form-control" placeholder="Booking Date">
                                    <span><i class="icofont-calendar"></i></span>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea class="form-control" cols="30" rows="4" placeholder="Message"></textarea>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <button type="submit" class="btn">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Make an Appointment Area -->

<!-- Start Gallery Area -->
<section id="gallery" class="gallery-area ptb-100">
    <div class="container">
        <div class="section-title">
            <h3>Photo Gallery</h3>
            <span>Which Services We Provide</span>
        </div>

        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="shorting-menu">
{{--                    <button class="filter" data-filter="all">All</button>--}}
                    <button class="filter active" data-filter=".crown" id="first-bitch">Crown</button>
                    <button class="filter" data-filter=".hollywood-smile">Hollywood Smile</button>
                    <button class="filter" data-filter=".composite-veners">Composite Veneers</button>
                    <button class="filter" data-filter=".endodontic-treatment">Endodontic Treatment</button>
                    <button class="filter" data-filter=".videos">Videos</button>
                </div>
            </div>
        </div>

        <div class="shorting">
            <div class="row">
                @foreach($images as $image)
                <div class="col-lg-4 col-md-6 mix {{$image['category']}}">
                    <div class="single-photo">
                        <img src="{{$image['url']}}" alt="gallery">
                        <div class="gallery-content">
                            <a href="{{$image['url']}}" class="popup-btn"><i class="icofont-expand"></i></a>
                        </div>
                    </div>
                </div>
                @endforeach

                @foreach($videos as $video)
                <div class="col-lg-6 col-md-6 mix {{$video['category']}}">
                    <div class="gallery-content" style="margin: 25px">
                        {!! $video['frame'] !!}
                    </div>
                </div>
                @endforeach

            </div>
        </div>
    </div>
</section>
<!-- End Gallery Area -->

<!-- Start Fun Facts Area -->
<section class="fun-facts-area ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="funFact">
                    <i class="icofont-wink-smile"></i>
                    <h3 class="count">2500</h3>
                    <span>Happy Patients</span>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="funFact">
                    <i class="icofont-doctor-alt"></i>
                    <h3 class="count">18</h3>
                    <span>Experienced Doctors</span>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="funFact">
                    <i class="icofont-patient-bed"></i>
                    <h3 class="count">1200</h3>
                    <span>Successful Operations</span>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="funFact">
                    <i class="icofont-bed"></i>
                    <h3 class="count">7</h3>
                    <span>Number of Beds</span>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Fun Facts Area -->

<!-- Start Testimonials Area -->
<section class="testimonials-area ptb-100" id="feedback">
    <div class="container">
        <div class="section-title">
            <h3>Testimonials</h3>
            <span>Our Patient Feedback</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="single-feedback">
                    <div class="client-info">
                        <div class="img">
                            <img src="/images/website/client-avatar1.jpg" alt="client">
                        </div>
                        <h4>Josh Buttler</h4>
                        <span>Web Developer</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <i class="icofont-quote-right"></i>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single-feedback">
                    <div class="client-info">
                        <div class="img">
                            <img src="/images/website/client-avatar2.jpg" alt="client">
                        </div>
                        <h4>Josh Buttler</h4>
                        <span>Web Developer</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <i class="icofont-quote-right"></i>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single-feedback">
                    <div class="client-info">
                        <div class="img">
                            <img src="/images/website/client-avatar3.jpg" alt="client">
                        </div>
                        <h4>Josh Buttler</h4>
                        <span>Web Developer</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <i class="icofont-quote-right"></i>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single-feedback">
                    <div class="client-info">
                        <div class="img">
                            <img src="/images/website/client-avatar1.jpg" alt="client">
                        </div>
                        <h4>Josh Buttler</h4>
                        <span>Web Developer</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <i class="icofont-quote-right"></i>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single-feedback">
                    <div class="client-info">
                        <div class="img">
                            <img src="/images/website/client-avatar2.jpg" alt="client">
                        </div>
                        <h4>Josh Buttler</h4>
                        <span>Web Developer</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <i class="icofont-quote-right"></i>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="single-feedback">
                    <div class="client-info">
                        <div class="img">
                            <img src="/images/website/client-avatar3.jpg" alt="client">
                        </div>
                        <h4>Josh Buttler</h4>
                        <span>Web Developer</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <i class="icofont-quote-right"></i>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Testimonials Area -->

<!-- Start News Area -->
<section id="treatment" class="news-area ptb-100 bg-f9faff">
    <div class="container">
        <div class="section-title">
            <h3>Our Treatments</h3>
        </div>

        <div class="row">
            @foreach($treatments as $treatment)
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <img src="{{$treatment['url']}}" alt="blog">
                        <div class="post-content">
                            <h4>{{$treatment['title']}}</h4>
                            <p>{{$treatment['description']}}</p>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
<!-- End News Area -->

<!-- Start Contact Area -->
<section id="contact" class="contact-area ptb-100">
    <div class="container">
        <div class="section-title">
            <h3>Contact Us</h3>
            <span>Which Services We Provide</span>
            <p>Repairing teeth defects & form in less than a week using porcelain , zircon & laminate veneers. Closing spaces between teeth in just one hour. Bleaching teeth 7 to10 degrees lighter than natural color in 30 minutes using the latest British technology. Special ivory & anesthesia without pain for children.</p>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="contact-box">
                    <h3><i class="icofont-google-map"></i> Address</h3>
                    <p><a href="https://wego.here.com/directions/mix//British-Dental-Clinic-Dr.Kareem-Ibrahem,-14-El-Nasr-Street,-El-Nozha,-Cairo:e-eyJuYW1lIjoiQnJpdGlzaCBEZW50YWwgQ2xpbmljIC0gRHIuS2FyZWVtIElicmFoZW0iLCJhZGRyZXNzIjoiMTQgXHUwNjM0XHUwNjI3XHUwNjMxXHUwNjM5IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2NDVcdTA2MzlcdTA2MjdcdTA2MmZcdTA2NGEgLVx1MDY0MVx1MDY0OFx1MDY0MiBcdTA2NDNcdTA2MzRcdTA2MzFcdTA2NGEgXHUwNjI3XHUwNjQ0XHUwNjJhXHUwNjJkXHUwNjMxXHUwNjRhXHUwNjMxLCBDYWlybywgRWd5cHQiLCJsYXRpdHVkZSI6MzAuMTA2MzUsImxvbmdpdHVkZSI6MzEuMzc0NDcsInByb3ZpZGVyTmFtZSI6ImZhY2Vib29rIiwicHJvdmlkZXJJZCI6Nzg2MTQ1NDAxNDAxMzc4fQ==?map=30.10635,31.37447,15,normal&fb_locale=en_US" target="_blank">14 El-Nasr Street - El-Maadi Cairo, Egypt</a></p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="contact-box">
                    <h3><i class="icofont-envelope"></i> Email</h3>
                    <p><a href="#">info@doctor.com</a></p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="contact-box">
                    <h3><i class="icofont-phone"></i> Phone</h3>
                    <p><a>+201021385707</a></p>
                    <p><a>+201062070700</a></p>
                    <p><a>+201099664548</a></p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="contact-box">
                    <h3><i class="icofont-clock-time"></i> Opening Hours</h3>
                    <ul>
                        <li>Saturday-Thursday <span>12PM - 12AM</span></li>
                        <li>Friday <span>CLOSED</span></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-12">
                <div class="get-in-touch">
                    <h3>Get in Touch</h3>
                    <P>Repairing teeth defects & form in less than a week using porcelain , zircon & laminate veneers. Closing spaces between teeth in just one hour. Bleaching teeth 7 to10 degrees lighter than natural color in 30 minutes using the latest British technology. Special ivory & anesthesia without pain for children.</P>
                    <ul>
                        <li><a href="https://www.facebook.com/DrKareemDental/" target="_blank"><i class="icofont-facebook"></i></a></li>
{{--                        <li><a href="#"><i class="icofont-twitter"></i></a></li>--}}
{{--                        <li><a href="#"><i class="icofont-linkedin"></i></a></li>--}}
{{--                        <li><a href="#"><i class="icofont-instagram"></i></a></li>--}}
                    </ul>
                </div>
            </div>

            <div class="col-lg-8 col-md-12">
                <form id="contactForm">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" required data-error="Please enter your name" placeholder="Name">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" required data-error="Please enter your email" placeholder="Email">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <textarea name="message" class="form-control" id="message" cols="30" rows="4" required data-error="Write your message" placeholder="Message"></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <button type="submit" class="btn">Send Message</button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!-- End Contact Area -->

<!-- Start Footer Area -->
<footer class="footer-area bg-f9faff">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p>Copyright &copy; {{Carbon\Carbon::now()->year}} British Dental Clinic. All Rights Reserved</p>
            </div>

{{--            <div class="col-lg-6 col-md-6">--}}
{{--                <ul>--}}
{{--                    <li><a href="#">Terms & Conditions</a></li>--}}
{{--                    <li><a href="#">Privacy Policy</a></li>--}}
{{--                </ul>--}}
{{--            </div>--}}
        </div>
    </div>
</footer>
<!-- End Footer Area -->

<div class="go-top"><i class="icofont-stylish-up"></i></div>

<!-- jQuery Min JS -->
<script src="{{ asset(mix('js/website/jquery.min.js')) }}"></script>
<!-- jQuery UI JS -->
<script src="{{ asset(mix('js/website/jquery-ui.js')) }}"></script>
<!-- Prpper JS -->
<script src="{{ asset(mix('js/website/popper.min.js')) }}"></script>
<!-- Bootstrap Min JS -->
<script src="{{ asset(mix('js/website/bootstrap.min.js')) }}"></script>
<!-- Owl Carousel Min Js -->
<script src="{{ asset(mix('js/website/owl.carousel.min.js')) }}"></script>
<!-- Jquery Magnific Popup Min Js -->
<script src="{{ asset(mix('js/website/jquery.magnific-popup.min.js')) }}"></script>
<!-- Jquery Mixitup Min Js -->
<script src="{{ asset(mix('js/website/jquery.mixitup.min.js')) }}"></script>
<!-- Waypoints Min Js -->
<script src="{{ asset(mix('js/website/waypoints.min.js')) }}"></script>
<!-- Jquery CounterUp Min JS -->
<script src="{{ asset(mix('js/website/jquery.counterup.min.js')) }}"></script>
<!-- Form Validator Min JS -->
<script src="{{ asset(mix('js/website/form-validator.min.js')) }}"></script>
<!-- Contact Form Min JS -->
<script src="{{ asset(mix('js/website/contact-form-script.js')) }}"></script>
<!-- Main JS -->
<script src="{{ asset(mix('js/website/main.js')) }}"></script>

</body>
</html>
