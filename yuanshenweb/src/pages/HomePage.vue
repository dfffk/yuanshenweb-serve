<template>
  <div class="box" :key="key">
    <div style="position: relative">
      <div style="position: fixed; top: 0; left: 0; z-index: 99">
        <!-- <div class="fixed_img" v-show="background">
          <button @click="closeBac">关闭</button>
        </div> -->

        <template v-if="slides.length > 0">
          <carousel-3d
            :autoplay="true"
            :autoplayTimeout="2000"
            :perspective="45"
            :display="63"
            :animationSpeed="1000"
            :controlsHeight="60"
            :minSwipeDistance="0"
            :inverseScaling="300"
            :border="0"
            :width="100"
            :height="100"
            style="
              width: 100vw;
              height: 1rem;
              margin: 0 auto;
              margin-top: 0.1rem;
              overflow: hidden;
            "
          >
            <slide
              v-for="(item, i) in slides"
              :index="i"
              :key="i"
              style="border-radius: 50%; width: 1rem; height: 1rem"
            >
              <template slot-scope="obj">
                <img
                  :src="item.headerSrc"
                  @click="imgClick(item, obj)"
                  style="object-fit: cover; display: block"
                />
              </template>
            </slide>
          </carousel-3d>
        </template>
        <template v-else></template>
        <div
          class="classify"
          style="
            height: 0.4rem;
            display: flex;
            justify-content: space-between;
            margin-top: 0.1rem;
          "
        >
          <el-cascader
            ref="cascader"
            :options="newOptions"
            :props="{ multiple: true, checkStrictly: true }"
            :clearable="true"
            style="
              width: calc(100vw - 0.5rem);
              height: 0.4rem;
              display: block;
              box-sizing: border-box;
            "
            :show-all-levels="false"
            @change="changeValue"
          >
          </el-cascader>
          <button
            style="
              font-size: 0.14rem;
              background-color: #0000cd;
              border: 0;
              border-radius: 0.1rem;
              color: #fff;
            "
            @click="changeContainer"
          >
            确定
          </button>
        </div>
      </div>
    </div>
    <div style="height: calc(100vh - 1.7rem); overflow-x: hidden">
      <template v-if="newSlides.length > 0">
        <div
          class="container"
          style="
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(1rem, auto);
            justify-content: center;
            justify-items: center;
          "
        >
          <div
            class="container_item"
            v-for="item in newSlides"
            :key="item._id"
            @click="goToDetails(item._id)"
          >
            <img
              :src="item.headerSrc"
              alt="图片加载失败"
              style="width: 0.8rem; height: 0.8rem; display: block"
            />
            <div
              :style="{
                color: getcolor(item.attribute),
              }"
            >
              <div style="margin-bottom: 0.05rem; margin-top: 0.1rem">
                {{ item.name }}
              </div>
              <div class="attribute">{{ item.alias }}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-else></template>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import { getHeaderimgsApi } from "../apis/home";
/* eslint-disable */
export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      key: 1,
      search: [],
      slides: [],
      newSlides: [],
      newOptions: [],
      //控制查看须知
      background: true,
      options: [
        {
          value: "星级",
          label: "星级",
          disabled: true,

          children: [
            {
              value: 5,
              label: "五星",
            },
            {
              value: 4,
              label: "四星",
            },
          ],
        },
        {
          value: "国家",
          label: "国家",
          disabled: true,

          children: [
            {
              value: "蒙德",
              label: "蒙德",
            },

            {
              value: "璃月",
              label: "璃月",
            },
            {
              value: "稻妻",
              label: "稻妻",
            },
            {
              value: "须弥",
              label: "须弥",
            },
            {
              value: "至冬",
              label: "至冬",
            },
            {
              value: "异世",
              label: "异世",
            },
          ],
        },
        {
          value: "属性",
          label: "属性",
          disabled: true,
          children: [
            {
              value: "火",
              label: "火",
            },
            {
              value: "水",
              label: "水",
            },
            {
              value: "冰",
              label: "冰",
            },
            {
              value: "雷",
              label: "雷",
            },
            {
              value: "风",
              label: "风",
            },
            {
              value: "岩",
              label: "岩",
            },
            {
              value: "草",
              label: "草",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.newOptions = this.options;
  },
  mounted() {
    this.getHeaders();
  },
  methods: {
    getcolor(attribute) {
      if (attribute == "冰") {
        return "#00F5FF";
      }
      if (attribute == "火") {
        return "#FF0000";
      }
      if (attribute == "水") {
        return "#0000CD";
      }
      if (attribute == "雷") {
        return "#9400D3";
      }
      if (attribute == "风") {
        return "#2E8B57";
      }
      if (attribute == "岩") {
        return "#FFD700";
      }
      if (attribute == "草") {
        return "#00FF00";
      }
    },
    //跳转到详情
    imgClick(data, obj) {
      // console.log(obj, data._id);
      this.$router.push("/details?_id=" + data._id);
    },
    goToDetails(_id) {
      this.$router.push("/details?_id=" + _id);
    },
    getHeaders() {
      getHeaderimgsApi()
        .then((res) => {
          // console.log("res", res.data);
          this.slides = res.data;
          this.newSlides = this.slides;
        })
        .catch((err) => {
          console.log("api的catch", err);
        });
    },
    changeContainer() {
      // if(this.search.includes(''))
      console.log("this.search", this.search);
      if (this.search.length == 0) {
        this.newSlides = this.slides;
        console.log("this.newslides", this.newSlides);
      } else {
        const searchArr = [];
        searchArr.push(this.search.map((item) => item[1]));
        console.log("searchArr", searchArr[0]);
        this.newSlides = this.slides.filter((item) => {
          return (
            (searchArr[0].includes(item.attribute) &&
              searchArr[0].includes(item.country) &&
              searchArr[0].includes(item.star)) ||
            (searchArr[0].includes(item.attribute) &&
              searchArr[0].includes(item.country)) ||
            (searchArr[0].includes(item.country) &&
              searchArr[0].includes(item.star)) ||
            (searchArr[0].includes(item.attribute) &&
              searchArr[0].includes(item.star)) ||
            searchArr[0].includes(item.attribute) ||
            searchArr[0].includes(item.country) ||
            searchArr[0].includes(item.star)
          );
        });
        console.log("this.newslides222", this.newSlides);
      }
      this.search = [];
    },
    //选择时全部时该全部的子元素勾选
    changeValue(value) {
      this.search = value;
    },
    //关闭查看须知
    closeBac() {
      this.background = false;
    },
  },
  watch: {},
  computed: {},
};
</script>

<style scoped>
.box {
  padding-top: 1.7rem;
  background-image: url("../assets/imgs/bac4.jpg");
  background-size: 100% 100%;
}
.fixed_img {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;

  opacity: 0.8;
  font-size: 0.15rem;
}
.figures {
  width: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.container {
  box-sizing: border-box;
  width: 100vw;
  /* display: flex; */
  /* justify-content: space-evenly; */
  /* flex-wrap: wrap; */
  /* flex-shrink: 0; */
}
.container_item {
  width: 0.8rem;
  height: 1.2rem;
  margin-top: 0.1rem;
  background-color: #f5f5f5;
  font-size: 0.12rem;
  line-height: 0.12rem;
  text-align: center;
  align-self: center;
}
.el-input__inner {
  height: 0.4rem !important;
}
</style>
