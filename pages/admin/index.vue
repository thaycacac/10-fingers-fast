<template>
  <div class="columns">
    <div class="column is-12">
      <div class="card events-card">
        <header class="card-header">
          <p class="card-header-title">Events</p>
          <a href="#" class="card-header-icon" aria-label="more options"></a>
        </header>
        <div class="card-table">
          <div class="content">
            <table class="table is-fullwidth is-striped">
              <tbody>
                <tr>
                  <td width="5%"><i class="fa fa-bell-o"></i></td>
                  <td>Create lesson</td>
                  <td><a class="button is-small is-primary" href="/admin/createLesson">Action</a></td>
                </tr>
                <tr>
                  <td width="5%"><i class="fa fa-bell-o"></i></td>
                  <td>Create list lesson</td>
                  <td><a class="button is-small is-primary" href="/admin/createListLesson">Action</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">Copyright © 2018 THAYCACAC.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (this.$session.get('username') !== 'admin') {
      this.$router.push('/')
    }
  },
  layout: 'admin',
  middleware: 'authentication'
}
</script>