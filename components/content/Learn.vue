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
            <button 
              class="__read-more" 
              @click="isShowLesson = true, getListLesson(record.ID)">Read more</button>
            <span 
            class="__date">Lesson {{ record.ID }}</span>
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
            <li v-for="type in listType" :key="type.id"><a>{{ type.name }}</a>
            <ul v-for="lesson in listLesson" :key="lesson.ContentID">
              <li v-show="lesson.TypeID === type.id">
                <a :href="'lesson/' + lesson.ContentID">Bài {{ lesson.ContentID }}</a></li>
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
      listLesson: '',
      listType: [
        { id: 1, name: 'Luyện Phím' },
        { id: 2, name: 'Luyện Phím' },
        { id: 3, name: 'Luyện Từ' },
        { id: 4, name: 'Luyện Không Nhìn' },
        { id: 5, name: 'Luyện Văn Bản' },
        { id: 6, name: 'Luyện Thêm' }
      ],
      isShowLesson: false,
    }
  },
  methods: {
    getListLesson(lessonID) {
      axios.post('/api/listlesson', { lessonID: lessonID })
      .then(response => {
        console.log(response.data.recordset)
        this.listLesson = response.data.recordset
      })
      .catch(err => {
        console.log(err)
      })
    },
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