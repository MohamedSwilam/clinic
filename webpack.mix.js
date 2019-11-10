const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/src'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass')
            }
        },
    })
    .sass('resources/sass/app.scss', 'public/css').options({
        postCss:[require('autoprefixer')]
    })
    .postCss('resources/assets/css/main.css', 'public/css', [
        tailwindcss('tailwind.js'),
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css') // Vuesax framework css
    .copy('resources/assets/css/iconfont.css', 'public/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/assets/fonts', 'public/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/css/prism-tomorrow.css') // Prism Tomorrow theme css

    .copy('resources/assets/css/website/bootstrap.min.css', 'public/css/website/bootstrap.min.css') // website bootstrap css
    .copy('resources/assets/css/website/jquery-ui.css', 'public/css/website/jquery-ui.css') // website jquery ui css
    .copy('resources/assets/css/website/icofont.min.css', 'public/css/website/icofont.min.css') // website iconfont css
    .copy('resources/assets/css/website/animate.css', 'public/css/website/animate.css') // website animate css
    .copy('resources/assets/css/website/owl.carousel.css', 'public/css/website/owl.carousel.css') // website owl carousel css
    .copy('resources/assets/css/website/magnific-popup.css', 'public/css/website/magnific-popup.css') // website maginific-popup css
    .copy('resources/assets/css/website/owl.theme.default.min.css', 'public/css/website/owl.theme.default.min.css') // website owl theme default css
    .copy('resources/assets/css/website/style.css', 'public/css/website/style.css') // website style css
    .copy('resources/assets/css/website/responsive.css', 'public/css/website/responsive.css') // website responsive css

    .copy('resources/assets/js/website/jquery.min.js', 'public/js/website/jquery.min.js') // website jquery js
    .copy('resources/assets/js/website/jquery-ui.js', 'public/js/website/jquery-ui.js') // website jquery ui js
    .copy('resources/assets/js/website/popper.min.js', 'public/js/website/popper.min.js') // website popper js
    .copy('resources/assets/js/website/bootstrap.min.js', 'public/js/website/bootstrap.min.js') // website bootstrap js
    .copy('resources/assets/js/website/owl.carousel.min.js', 'public/js/website/owl.carousel.min.js') // website owl carousel js
    .copy('resources/assets/js/website/jquery.magnific-popup.min.js', 'public/js/website/jquery.magnific-popup.min.js') // website jquery magnific popup js
    .copy('resources/assets/js/website/jquery.mixitup.min.js', 'public/js/website/jquery.mixitup.min.js') // website jquery mixitup js
    .copy('resources/assets/js/website/waypoints.min.js', 'public/js/website/waypoints.min.js') // website waypoints js
    .copy('resources/assets/js/website/jquery.counterup.min.js', 'public/js/website/jquery.counterup.min.js') // website jquery counterup js
    .copy('resources/assets/js/website/form-validator.min.js', 'public/js/website/form-validator.min.js') // website form validator js
    .copy('resources/assets/js/website/contact-form-script.js', 'public/js/website/contact-form-script.js') // website contact form js
    .copy('resources/assets/js/website/main.js', 'public/js/website/main.js'); // website main js
