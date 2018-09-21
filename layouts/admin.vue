<template>
  <div>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="/admin">Admin</a>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a class="is-active" href="/admin">Dashboard</a></li>
            </ul>
            <p class="menu-label">Administration</p>
            <ul class="menu-list">
              <li>
                <a>Event</a>
                <ul>
                  <li><a href="/admin/createLesson">Create Lesson</a></li>
                  <li><a href="/admin/createListLesson">Create List Lesson</a></li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Hello, Admin.</h1>
                <h2 class="subtitle">10 Fingers Fast!</h2>
              </div>
            </div>
          </section>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">436 User</p>
                  <p class="subtitle">Users</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">15</p>
                  <p class="subtitle">List Lessons</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">6</p>
                  <p class="subtitle">Type</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">150</p>
                  <p class="subtitle">Lessons</p>
                </article>
              </div>
            </div>
          </section>
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  margin-top: 1px;
}
</style>

