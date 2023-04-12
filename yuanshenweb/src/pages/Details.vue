<template>
  <div>
    <div
      style="
        line-height: 0.3rem;
        font-size: 0.2rem;
        color: #ccc;
        text-align: center;
      "
    >
      以下图片转载至米游社观测枢：嗔痴ovo
    </div>
    <img :src="imgSrc" alt="" style="width: 100vw" />
    <el-button type="primary" plain @click="bacHome">
      <i class="el-icon-arrow-left"></i>
    </el-button>
  </div>
</template>

<script>
import { getOneImgApi } from "../apis/home";
export default {
  data() {
    return {
      imgSrc: "",
    };
  },
  mounted() {
    this.getOneImg();
  },
  methods: {
    async getOneImg() {
      const res = await getOneImgApi(this.$route.query);
      console.log("res", res);
      this.imgSrc = res.data[0].imgSrc;
    },
    bacHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.el-button {
  position: fixed;
  top: 0.6rem;
  left: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
}
.el-icon-arrow-left {
  color: black;
  display: block;
}
</style>
