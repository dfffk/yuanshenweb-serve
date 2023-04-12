<template>
  <div class="hello">
    <template v-if="showButton">
      <div class="enter" ref="enterImg" style="opacity: 1">
        <button class="enter_button" @click="enterApp">欢迎</button>
      </div>
    </template>
    <template></template>
    <!-- <video
      class="videoEnter"
      style="width: 100%; height: 100%; object-fit: fill"
      src="../assets/entrance_video/enter.mp4"
      ref="video1"
      @ended="videoEnded"
      v-show="oneTwoThree == 'one'"
    ></video> -->
    <!-- <video
      class="videoEnter"
      style="width: 100%; height: 100%; object-fit: fill"
      src="../assets/entrance_video/circulate.mp4"
      ref="video2"
      @click="videoEndedMore"
      loop
      v-show="oneTwoThree == 'two'"
    ></video>
    <video
      class="videoEnter"
      style="width: 100%; height: 100%; object-fit: fill"
      src="../assets/entrance_video/point.mp4"
      ref="video3"
      @ended="videoEnd"
      v-show="oneTwoThree == 'three'"
    ></video> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: true,
      oneTwoThree: "one",
    };
  },
  props: {
    msg: String,
  },
  mounted() {},
  methods: {
    //点击按钮实现图片淡出并开始播放第一段视频
    enterApp() {
      // console.log(this.$refs.enterImg.style.opacity);
      const interval = setInterval(() => {
        this.$refs.enterImg.style.opacity -= 0.01;
        if (this.$refs.enterImg.style.opacity <= 0) {
          clearInterval(interval);
          this.showButton = false;
          // this.oneTwoThree = "two";
          // this.$refs.video2.play();
          this.$router.push("./home");
        }
        // console.log(this.$refs.enterImg.style.opacity);
      }, 30);
    },

    //第一段播放完成后播放第二段视频，并且循环播放
    // videoEnded() {
    //   this.oneTwoThree = "two";
    //   this.$refs.video2.play();
    // },
    //点击之后播放第三段视频
    // videoEndedMore() {
    //   this.oneTwoThree = "three";
    //   this.$refs.video2.pause();
    //   this.$refs.video3.play();
    // },
    // //播放完第三段之后跳转至首页
    // videoEnd() {
    //   this.$refs.video3.pause();
    //   this.$router.push("./home");
    // },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.hello {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.enter {
  background-image: url("../assets/imgs/caoshen.jpg");
  background-size: 100% 100%;
  object-fit: cover;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
.enter_button {
  position: absolute;
  bottom: 0.8rem;
  left: 1.6rem;
  font-size: 0.12rem;
  color: #fff;
  background-color: rgb(121, 168, 19);
  border: 0.02rem solid rgb(45, 166, 206);
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
</style>
