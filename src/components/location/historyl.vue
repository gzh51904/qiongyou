<template>
  <div class="city-list-box history">
    <ul class="city-list-landscape clearfix">
      <li v-for="(item,index) in title.arr" :key="item">
        <a class="qui-place-link">
          <span
            class="qui-ellipsis qui-ellipsis-1"
            @click="go(title.arr[index],title.pinyin[index])"
          >{{item}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    go(cityname, id) {
      this.$router.push({ name: "city", params: { cityname, id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.city-list-box {
  position: relative;
}

.city-list-landscape {
  margin: 2.5px 3px 5px;
  zoom: 1;
}
li {
  width: 33.33%;
  box-sizing: border-box;
  float: left;
  padding: 5px 6px;
  span {
    display: block;
    height: 26px;
    line-height: 26px;
    border: 1px solid #e1e1e1;
    border-radius: 1.5px;
    text-align: center;
    font-size: 6.5px;
    padding: 0 5px;
    white-space: nowrap;
    background-color: #fff;
  }
}
.qui-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
</style>
