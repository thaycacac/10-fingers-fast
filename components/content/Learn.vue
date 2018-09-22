<template>
  <div id="learn">
    <div class="time-line">
      <div class="__container">
        <div 
          class="__block" 
          v-for="record in records" 
          :key="record.lessonID">
          <div 
            class="__img" 
            :class="{ '--success': record.lessonID % 3 == 0,  
                      '--danger': record.lessonID % 3 == 1,
                      '--warning': record.lessonID % 3 == 2}"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <i class="fas fa-medal __icon"></i>
          </div>
          <div class="__content" data-aos="zoom-out-right">
            <h2>{{ record.lessonTitle }}</h2>
            <p>{{ record.lessonDescription }}</p>
            <button 
              class="__read-more" 
              @click="isShowLesson = true, getListLesson(record.lessonID)">Read more</button>
            <span 
            class="__date">Lesson {{ record.lessonID }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- use buefy for show all lesson -->
    <b-modal 
      :active.sync="isShowLesson" 
      :width="640" 
      scroll="keep">
      <aside class="menu --menu-lesson">
        <p class="menu-label">
          Danh Sách Bài Học
        </p>
        <ul class="menu-list">
            <li 
              v-for="type in listType" 
              :key="type.id"><a>{{ type.name }}</a>
            <ul 
              v-for="(lesson, index) in listLesson" 
              :key="lesson._id">
              <li v-show="lesson.type.toUpperCase() === type.name.toUpperCase()">
                <a :href="'lesson/' + lesson._id">Bài {{ index + 1 }}</a>
              </li>
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
        { name: 'Luyện Phím Mới' },
        { name: 'Luyện Phím' },
        { name: 'Luyện Từ' },
        { name: 'Luyện Không Nhìn' },
        { name: 'Luyện Văn Bản' },
        { name: 'Luyện Thêm' }
      ],
      isShowLesson: false,
      loading: false
    }
  },
  methods: {
    getListLesson(lessonID) {
      axios.get('/api/lesson/listlesson/' + lessonID)
      .then(response => {
        this.listLesson = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
  },
  beforeMount() {
    axios.get('/api/listlesson')
    .then(response => {
      this.records = response.data
    })
    .catch(err => {
      console.log(err)
    })
  },
};
</script>