<template>
    <nav class="navbar is-transparent is-fixed-top">
        <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">
                    Typing Study
                </a>
                <a class="navbar-item" href="https://bulma.io/">
                    Play Game
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/documentation/overview/start/">
                        User
                    </a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="/documentation/overview/start/">
                            Profile
                        </a>
                        <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                            Logout
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div></div>
    </nav>
</template>
<style lang="scss" scoped>
</style>