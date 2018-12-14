<template lang="pug">
  div
    learn
</template>
<script>
import Learn from '~/components/learn'
export default {
  components: {
    Learn
  },
  layout: 'typing',
  transition: 'perfect',
  middleware: 'authentication',
  head: {
    title: 'Luyện gõ 10 ngón | 10FingersFast',
    meta: [
      { name: 'title', content: '10FingersFast - Trang thực hành luyện gõ 10 ngón' },
      {
        hid: 'description',
        name: 'description',
        content: 'Chương trình Luyện gõ 10 ngón bao gồm 15 bài học, mỗi bài bao gồm luyện phím mới, luyện phím, luyện từ, luyện không nhìn, luyện văn bản, luyện thêm, giúp bạn học cách gõ dần dần từng bước, đồng thời theo dõi được sự tiến bộ của mình và có những khoảng thời gian thư giãn!' },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ]
  }
}
</script>
