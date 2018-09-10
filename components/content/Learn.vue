<template>
  <div id="learn">
    <div class="time-line">
      <div class="__container">
        <div class="__block" v-for="record in records" :key="record.ID">
          <div class="__img" 
            :class="{ '--success': record.ID % 3 == 0,  
                      '--danger': record.ID % 3 == 1,
                      '--warning': record.ID % 3 == 2}">
            <i class="fas fa-medal __icon"></i>
          </div>
          <div class="__content">
            <h2>{{ record.Intro }}</h2>
            <p>{{ record.Tips }}</p>
            <button class="__read-more" @click="isShowLesson = true">Read more</button>
            <span class="__date">Lesson {{ record.ID }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- use buefy for show all lesson -->
    <b-modal :active.sync="isShowLesson" :width="640" scroll="keep">
      <aside class="menu --menu-lesson">
        <p class="menu-label">
          Danh Sách Bài Học
        </p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
          <li>
            <a>Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
        </ul>
      </aside>
    </b-modal>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
@import '../../assets/sass/learn/_lession.scss';
</style>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      records: '',
      isShowLesson: false,
    }
  },
  beforeMount() {
    axios.post('/api/lesson')
    .then(response => {
      this.records = response.data.recordset
    })
    .catch(err => {
      console.log(err)
    })
  },
};
</script>