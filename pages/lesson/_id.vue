<template>
  <div class="container-id">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <a>Lesson {{ idLessonCurrent }}</a>
                <ul>
                  <li 
                    v-for="lesson in listLesson" 
                    :key="lesson._id">
                    <a 
                    :href="'/lesson/' + lesson._id"
                    :class="lesson._id == idCurrent ? 'is-active' : ''"> Bài {{ listLesson.indexOf(lesson) + 1 }}<br/></a>
                  </li>
                </ul>
              </li>
            </ul>
            <a class="button is-large is-fullwidth is-primary is-outlined" @click="fullScreen">Phóng to</a>
          </aside>
        </div>
        <div class="column" id="full-screen">
          <div class="columns">
            <div class="column is-2 hand-left">
              <svg-hand-left></svg-hand-left>
              <div class="position-finger --is-1" style="visibility: hidden;"></div>
              <div class="position-finger --is-2" style="visibility: hidden;"></div>
              <div class="position-finger --is-3" style="visibility: hidden;"></div>
              <div class="position-finger --is-4" style="visibility: hidden;"></div>
              <div class="position-finger --is-5" style="visibility: hidden;"></div>
            </div>
            <div class="column is-8">
              <div class="box --box-result">
                <article class="media">
                  <div class="media-content">
                    <div class="content has-text-centered">
                      <p class="result">
                        Đã gõ: <strong id="__number-input">0</strong> / <strong id="__number-total">0</strong> ( Đúng <strong id="__number-percent">0</strong>%)
                        Lỗi: <strong id="__number-incorrect">0</strong>
                        Thời gian: <strong id="__number-time">00:00</strong>
                        Tốc độ: <strong id="__number-speed">0 từ/phút</strong>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="box --box-keyboard">
                <p class="__text" id="text">10 Fingers Fast</p>
              </div>
            </div>
            <div class="column is-2 hand-right">
              <svg-hand-right></svg-hand-right>
              <div class="position-finger --is-6" style="visibility: hidden;"></div>
              <div class="position-finger --is-7" style="visibility: hidden;"></div>
              <div class="position-finger --is-8" style="visibility: hidden;"></div>
              <div class="position-finger --is-9" style="visibility: hidden;"></div>
              <div class="position-finger --is-10" style="visibility: hidden;"></div>
            </div>
          </div>
          <div class="keyboard">
            <!-- 1nd row -->
            <div class="row">
              <div class="group">
                <kbd data-key="192" class="key large">~<i>`</i></kbd>
                <kbd data-key="49" class="key">!<span>1</span></kbd>
                <kbd data-key="50" class="key">@<span>2</span></kbd>
                <kbd data-key="51" class="key">#<span>3</span></kbd>
                <kbd data-key="52" class="key">$<span>4</span></kbd>
                <kbd data-key="53" class="key">%<span>5</span></kbd>
                <kbd data-key="54" class="key">^<span>6</span></kbd>
                <kbd data-key="55" class="key">&<span>7</span></kbd>
                <kbd data-key="56" class="key">*<span>8</span></kbd>
                <kbd data-key="57" class="key">(<span>9</span></kbd>
                <kbd data-key="48" class="key">)<span>0</span></kbd>
                <kbd data-key="189" class="key">-<i class="underscore">_</i></kbd>
                <kbd data-key="187" class="key">+<span>=</span></kbd>
                <kbd data-key="8" class="key backspace">Backspace</kbd>
              </div>
            </div>
            <!-- 2rd row -->
            <div class="row">
              <div class="group">
                <kbd data-key="9" class="key tab">Tab⭾</kbd>
                <kbd data-key="81" class="key">Q</kbd>
                <kbd data-key="87" class="key">W</kbd>
                <kbd data-key="69" class="key">E</kbd>
                <kbd data-key="82" class="key">R</kbd>
                <kbd data-key="84" class="key">T</kbd>
                <kbd data-key="89" class="key">Y</kbd>
                <kbd data-key="85" class="key">U</kbd>
                <kbd data-key="73" class="key">I</kbd>
                <kbd data-key="79" class="key">O</kbd>
                <kbd data-key="80" class="key">P</kbd>
                <kbd data-key="219" class="key">{<span>[</span></kbd>
                <kbd data-key="221" class="key">}<span>]</span></kbd>
                <kbd data-key="220" class="key">|<span>\</span></kbd>
              </div>
            </div>
            <!-- 3th row -->
            <div class="row">
              <div class="group">
                <kbd data-key="20" class="key tab">CapsLock</kbd>
                <kbd data-key="65" class="key">A</kbd>
                <kbd data-key="83" class="key">S</kbd>
                <kbd data-key="68" class="key">D</kbd>
                <kbd data-key="70" class="key">F</kbd>
                <kbd data-key="71" class="key">G</kbd>
                <kbd data-key="72" class="key">H</kbd>
                <kbd data-key="74" class="key">J</kbd>
                <kbd data-key="75" class="key">K</kbd>
                <kbd data-key="76" class="key">L</kbd>
                <kbd data-key="186" class="key">:<span>;</span></kbd>
                <kbd data-key="222" class="key">"<span>'</span></kbd>
                <kbd data-key="13" class="key enter">Enter ↩</kbd>
              </div>
            </div>
            <!-- 4th row -->
            <div class="row">
              <div class="group">
                <kbd data-key="16" class="key shift l-s"><span>⇧</span>&nbsp;Shift</kbd>
                <kbd data-key="90" class="key">Z</kbd>
                <kbd data-key="88" class="key">X</kbd>
                <kbd data-key="67" class="key">C</kbd>
                <kbd data-key="86" class="key">V</kbd>
                <kbd data-key="66" class="key">B</kbd>
                <kbd data-key="78" class="key">N</kbd>
                <kbd data-key="77" class="key">M</kbd>
                <kbd data-key="188" class="key">&lt;<span>,</span></kbd>
                <kbd data-key="190" class="key">&gt;<span>.</span></kbd>
                <kbd data-key="191" class="key">?<span>/</span></kbd>
                <kbd data-key="16" class="key shift r-s"><span>⇧</span>&nbsp;Shift</kbd>
              </div>
            </div>
            <!-- 5th row -->
            <div class="row">
              <div class="group">
                <kbd data-key="17" class="key">Ctrl</kbd>
                <kbd data-key="91" class="key"><i class="fab fa-windows"></i></kbd>
                <kbd data-key="18" class="key">Alt</kbd>
                <kbd data-key="32" class="key spacebar">10 Fingers Fast</kbd>
                <kbd data-key="18" class="key">Alt</kbd>
                <kbd data-key="-2" class="key">Fn</kbd>
                <kbd data-key="93" class="key c-menu"><i class="fas fa-bars"></i></kbd>
                <kbd data-key="17" class="key">Ctrl</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- audio -->
    <audio id="keyAudio">
      <source src="/audio/keyboard.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import keyboard from '~/assets/javascript/keyboard'
import handleKeyboard from '~/assets/javascript/handleKeyboard'
import axios from 'axios'
import SvgHandLeft from '~/assets/svg/HandLeft.svg'
import SvgHandRight from '~/assets/svg/HandRight.svg'
export default {
  data () {
    return {
      listLesson: '',
      idCurrent: this.$route.params.id,
      idLessonCurrent: ''
    }
  },
  components: {
    SvgHandLeft,
    SvgHandRight
  },
  methods: {
    fullScreen () {
      var elem = document.getElementById("full-screen")
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    }
  },
  layout: 'typing',
  beforeMount () {
    keyboard()
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  mounted () {
    return axios.get('/api/lesson/' + this.$route.params.id)
      .then(response => {
        this.listLesson = response.data.listLesson
        return response.data.listLesson
      })
      .then((listLesson) => {
        const lessonCurrent = listLesson.find(lesson => {
          return lesson._id === this.$route.params.id
        })
        handleKeyboard(lessonCurrent.content)
        this.idLessonCurrent = lessonCurrent.lesson
        this.$nuxt.$loading.finish()
      })
      .catch(err => {
        console.log(err)
      })
  },
  head: {
    title: 'Luyện gõ 10 ngón',
    meta: [
      { hid: 'description', name: 'description', content: 'Trang luyện gõ bàn phím 10 ngón' },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ]
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
@import '~/assets/sass/learn/keyboard.scss';
@include setupBackgroundNav();
</style>
