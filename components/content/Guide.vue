<template>
  <div>
    <div class="is-container-guide">
        <h1 
          class="is-title"
          data-aos="zoom-in-up"
          data-aos-duration="500">Hướng Dẫn</h1>
        <p 
          class="is-description"
          data-aos="zoom-in-up"
          data-aos-duration="500">Phương pháp 10 ngón tay là một kỹ thuật được lập ra để sử dụng hiệu quả bàn phím máy tính của bạn. 
          Với một số bài thực hành và luyện cho bạn vị trí ngón tay chính xác, bạn không còn "gõ một cách mù 
          quáng" trên bàn phím. Sau đó, bạn có thể giảm đáng kể tỷ lệ lỗi và tăng tốc độ đánh một cách nhanh chóng.</p>
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage=numpage.numpage1
          :step=step.step1
          :image=image.image1></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :icon=icon.icon1
          :title=title.title1
          :content=content.content1></content-guide>  
        </div>
      </div>
    </div>

    <div class="is-container-guide">
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage=numpage.numpage2
          :step=step.step2
          :image=image.image2></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :icon=icon.icon2
          :title=title.title2
          :content=content.content2></content-guide>  
        </div>
      </div>
    </div>

    <div class="is-container-guide">
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage=numpage.numpage3
          :step=step.step3
          :image=image.image3></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :icon=icon.icon3
          :title=title.title3
          :content=content.content3></content-guide>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentGuide from './guide/content'
import CoverGuide from './guide/cover'
export default {
  components: {
    ContentGuide,
    CoverGuide
  },
  data () {
    return {
      numpage: {
        numpage1: '01',
        numpage2: '02',
        numpage3: '03'
      },
      step: {
        step1: 'Đặt Tay',
        step2: 'Nhiệm Vụ',
        step3: 'Tư Thế'
      },
      icon: {
        icon1: 'fas fa-handshake',
        icon2: 'fas fa-sitemap',
        icon3 : 'fas fa-wheelchair'

      },
      image: {
        image1: 'url(/img/keyboard/2.jpg)',
        image2: 'url(/img/keyboard/3.jpg)',
        image3: 'url(/img/keyboard/5.jpg)'
      },
      title: {
        title1: 'Quy tắc đặt tay trên bàn phím',
        title2: 'Phân công nhiệm vụ cho từng ngón tay',
        title3: 'Tư thế ngồi khi đánh máy'
      },
      content: {
        content1: 'Đây là bước quan trọng nhất và nó sẽ quyết định đến tốc độ gõ văn bản của bạn sau này. Nếu bước này mà bạn không đặt ngón tay hợp lý và chuẩn theo hướng dẫn thì bạn có gõ nhanh đến mấy cũng không thể bằng những người đặt theo đúng chuẩn được mặc dù bạn cũng không cần nhìn bàn phím. <br> Mỗi ngón tay của bạn sẽ đảm nhiệm một khu vực nhất định, điều đó giúp bạn gõ văn bản mà không cần nhìn bàn phím. Quy tắt đặt ngón tay sẽ như sau: <br><table class="table is-striped" style="margin: 0 auto; width: 700px;"><thead><tr><th class="has-text-centered" colspan="2">Bàn Tay Trái</th><th class="has-text-centered" colspan="2">Bàn Tay Phải</th></tr><tr><th class="has-text-centered">Ngón Tay</th><th class="has-text-centered">Đặt Lên Bàn Phím</th><th class="has-text-centered">Ngón Tay</th><th class="has-text-centered">Đặt Lên Bàn Phím</th></tr></thead><tbody><tr><td>Ngón út</td><td style="font-style: italic;">Đặt lên chữ "A"</td><td>Ngón Trỏ</td><td style="font-style: italic;">Đặt lên chữ "J"</td></tr><tr><td>Ngón áp út</td><td style="font-style: italic;">Đặt lên chữ "S"</td><td>Ngón giữa</td><td style="font-style: italic;">Đặt lên chữ "K"</td></tr><tr><td>Ngón giữa</td><td style="font-style: italic;">Đặt lên chữ "D"</td><td>Ngón áp út</td><td style="font-style: italic;">Đặt lên chữ "L"</td></tr><tr><td>Ngón trỏ</td><td style="font-style: italic;">Đặt lên chữ "F"</td><td>Ngón út</td><td style="font-style: italic;">Đặt lên dấu ";"</td></tr><tr><td>Ngón cái</td><td style="font-style: italic;">Đặt lên phím cách</td><td>Ngón cái</td><td style="font-style: italic;">Đặt lên phím cách</td></tr></tbody></table>',
        content2: 'Về cơ bản thì các ngón tay sẽ đảm nhiệm các phím chủ chốt như bảng bên dưới. Còn các phím số 1 đến 9, F1 đến F12 hay =, –, backspace… thì chúng ta sẽ ít sử dụng hơn chính vì thế mà bạn có thể gõ thế nào cho phù hợp và bạn cảm thấy thỏa mái là được. Quan trọng nhất là các ngón tay của bạn phải đảm nhiệm đúng nhiệm vụ của chúng như sau:<br><br><table class="table is-striped" style="margin: 0 auto; width: 700px;"><thead><tr><th class="has-text-centered" colspan="2">Bàn Tay Trái</th><th class="has-text-centered" colspan="2">Bàn Tay Phải</th></tr><tr><th class="has-text-centered">Ngón Tay</th><th class="has-text-centered">Đảm nhiệm phím</th><th class="has-text-centered">Ngón Tay</th><th class="has-text-centered">Đảm nhiệm phím</th></tr></thead><tbody><tr><td>Ngón út</td><td style="font-style: italic;">Q, A, Z, Phím Ctrl trái, Shift trái</td><td>Ngón Trỏ</td><td style="font-style: italic;">Y, U, H, J, N, M</td></tr><tr><td>Ngón áp út</td><td style="font-style: italic;">W, S, X</td><td>Ngón giữa</td><td style="font-style: italic;">I, K</td></tr><tr><td>Ngón giữa</td><td style="font-style: italic;">E, D, C</td><td>Ngón áp út</td><td style="font-style: italic;">O, L</td></tr><tr><td>Ngón trỏ</td><td style="font-style: italic;">R, T, F, G, V, B</td><td>Ngón út</td><td style="font-style: italic;">P, Phím Ctrl phải, Shift phải, ;, /</td></tr><tr><td>Ngón cái</td><td style="font-style: italic;">Space (Phím cách)</td><td>Ngón cái</td><td style="font-style: italic;">Space (Phím cách)</td></tr></tbody></table>',
        content3: 'Một điều khá quan trọng nữa giúp bạn gõ 10 ngón nhanh đó là tư thế ngồi. Nhiều người có thói quen rất xấu đó làngồi ngồi nghiêng, ngồi tựa vào ghế, ngồi vẹo hoặc ngồi quá cao hay quá thấp.. điều này ảnh hướng khá nhiều đếnviệc đánh máy của bạn. Vậy tư thế ngồi thế nào là chuẩn nhất, thỏa mái nhất và không bị gò bó? bạn có thể học cáchngồi như sau:<br><br><ul class="menu-list"><li>- Ngồi lưng thẳng, mặt đối chính diện với máy tính.</li><br><li>- Khủy tay bẻ cong ở góc bên phải.</li><br><li>- Giữ khoảng cách 45 tới 75 cm so với màn hình máy tính.</li><br><li>- Cổ tay chạm vào ngay mép của máy tính ở phía trước bàn phím.</li></ul><br>Bước cuối cùng cũng là bước rất quan trọng, đó chính là nỗ lực của bạn, các cụ vẫn có câu “trăm hay không bằng tay quen” mà đúng không, dù bạn có học thuộc lòng những lý thuyết bên trên nhưng nếu không luyện tập thường xuyên thì vẫn chỉ dừng lại ở ngưỡng “mổ cò” mà thôi.'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>
