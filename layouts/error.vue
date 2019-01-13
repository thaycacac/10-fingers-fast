<template>
  <section class="page-error">
    <h1 class="title is-2">10 FingersFast</h1>
    <p id="error">{{ error.statusCode }}</p>
    <p id="explanation">{{ error.message }}.</p>
    <div id="container">
      <div class="server" id="server1">
        <div class="hdd-container">
          <div class="hdd">
            <div class="led green-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led green-led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
        </div>
        <div class="cooling-system">
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
        </div>
      </div>
      <div class="server" id="server2">
        <div class="hdd-container">
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
        </div>
        <div class="cooling-system">
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
        </div>
      </div>
      <div class="server" id="server3">
        <div class="hdd-container">
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
        </div>
        <div class="cooling-system">
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["error"]
};
</script>

<style scoped>
.page-error {
  color: red;
  background-color: #f3b861;
  text-align: center;
}

#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.server {
  height: 40vw;
  width: 24vw;
  border-radius: 1vw;
  background-color: #302f30;
  padding: 3vw 2vw;
  margin: 1vw;
  box-shadow: 1vw 0.5vw 0.2vw #f9a540;
}

.hdd-container {
  padding: 0;
}

.hdd {
  height: 4vw;
  width: 100%;
  margin-bottom: 1vw;
  background-color: #141414;
  border-radius: 0.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.led {
  height: 0.8vw;
  width: 0.8vw;
  border-radius: 50%;
  background-color: rgba(0, 255, 0, 0.4);
  margin: 0.5vw;
  box-shadow: 0px 1px 10px rgba(0, 255, 0);
}

.red-led {
  background-color: rgba(255, 0, 0, 0.5);
  box-shadow: 0 1px 5px rgba(255, 0, 0);
  animation: blinking 1s linear infinite;
}

.cooling-system {
  padding-top: 0.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.grid {
  background-color: #141414;
  width: 8vw;
  height: 9vw;
  margin: 0.4vw;
  border-radius: 0.8vw;
}

h1 {
  font-family: "Lobster", cursive;
  font-weight: lighter;
}

#error {
  font-size: 1.2em;
}

@keyframes blinking {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
