<template>
    <div>
        <header class="masthead text-center d-flex">
            <div class="container my-auto">
                <div class="row">
                    <h1>
                        <strong>Your Favorite Source of Free Bootstrap Themes</strong>
                    </h1>
                    <hr class="my-break">
                    <p class="text-description">Start Bootstrap can help you build better websites using the Bootstrap CSS framework ! Just download
                        your template and start going, no strings attached !</p>
                    <a class="button is-white js-scroll-trigger my-button" href="#">Read More</a>
                </div>
            </div>
        </header>
    </div>
</template>
<style lang="scss" scoped>
    @import '../../assets/sass/main.sass';
    h1 strong {
        color: white;
        text-transform: uppercase;
        font-weight: 700
    }

    .text-description {
        color: #e4e4e4;
        font-family: $font-opensan;
    }

    .my-break {
        height: 1px;
    }

    .my-button {
        margin-top: 35px;
        font-family: $font-opensan;
        font-size: 25px
    }
</style>