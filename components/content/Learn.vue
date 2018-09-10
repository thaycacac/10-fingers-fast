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
            <a href="#" class="__read-more">Read more</a>
            <span class="__date">Lesson {{ record.ID }}</span>
          </div>
        </div>
      </div>
    </div>
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
      records: ''
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