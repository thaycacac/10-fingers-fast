<template lang="pug">
  div#learn
    div.time-line
      div.__container
        div.__block(v-for='record in records' :key='record.lessonID')
          div.__img(
            alt='start for lesson'
            :class=`{'--success': record.lessonID % 3 == 0, '--danger': record.lessonID % 3 == 1, '--warning': record.lessonID % 3 == 2}`
          )
            i.fas.fa-medal.__icon
          div.__content
            h2 {{ record.lessonTitle }}
            p {{ record.lessonDescription }}
            button.__read-more(@click="isShowLesson = true, getListLesson(record.lessonID)") {{ $t('learn.readmore') }}
            span.__date {{ $t('learn.lesson') }} {{ record.lessonID }}
    b-modal(
      :active.sync='isShowLesson'
      :width='640'
      scroll='keep'
    )
      aside.menu.--menu-lesson
        p.menu-label {{ $t('learn.listLessons') }}
        ul.menu-list
          li(
            v-for='type in listType'
            :key='type.id'
          )
            a {{ type.name }}
            ul(v-for='(lesson, index) in listLesson' :key='lesson.id')
              li(v-show='lesson.type.toUpperCase() === type.name.toUpperCase()')
                nuxt-link(:to="'lesson/' + lesson._id") {{ $t('learn.lesson') }} {{ index + 1 }}
</template>

<style lang="scss" scoped>
@import "~/assets/sass/main.sass";
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      records: "",
      listLesson: "",
      listType: [
        { name: "Luyện Phím Mới" },
        { name: "Luyện Phím" },
        { name: "Luyện Từ" },
        { name: "Luyện Không Nhìn" },
        { name: "Luyện Văn Bản" },
        { name: "Luyện Thêm" }
      ],
      isShowLesson: false,
      loading: false
    };
  },
  methods: {
    getListLesson(lessonID) {
      axios
        .get("/api/lesson/listlesson/" + lessonID)
        .then(response => {
          this.listLesson = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
    axios
      .get("/api/listlesson")
      .then(response => {
        this.records = response.data;
        this.$nuxt.$loading.finish();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
