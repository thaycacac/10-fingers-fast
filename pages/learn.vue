<template>
  <div>
    <navbar/>
    <slider/>
    <learn/>
    <my-footer/>
  </div>
</template>
<script>
import Learn from '../components/content/Learn'
import Navbar from '../components/header/Navbar'
import Slider from '../components/header/Slider'
import MyFooter from '../components/footer/Footer'
export default {
  components: {
    Navbar,
    Slider,
    Learn,
    MyFooter,
  }
}

</script>
