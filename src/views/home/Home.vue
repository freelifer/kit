<template>
  <div class="hello">
    <div class="header mu-paper-2">
      <div class="logo">
        Kits
      </div>
      <div class="header_search">
        <mu-icon class="icon_search" value="search" color="#ccc" />
        <input icon="search" type="text" class="input_search" placeholder="搜索" v-model.trim="title" />
      </div>
    </div>
    <div class="tool_containt">
      <mu-card class="tool_card">
        <div class="tool_header">
          <span class="tool_header_title">时间戳转换</span>

          <span class="tool_header_title">
            <mu-icon value="arrow_right_alt" color="#f00" />
          </span>
        </div>

        <mu-auto-complete hintText="timestamp" labelFloat label="Unix时间戳（Unix timestamp）" @input="handleInput" :dataSource="dataSource" />
        <mu-icon value="swap_horiz" :size="32" />
        <mu-icon value="arrow_right_alt" color="#ccc" />
        <!--  -->
        <mu-auto-complete hintText="date" labelFloat label="日期 时间" @input="handleInput" :dataSource="dataSource" />

        <div class="tool_footer">
          <span class="tool_footer_title">by freelifer</span>
        </div>
      </mu-card>

      <mu-paper class="demo-paper" :zDepth="1">
        <div class="tool_header">
          <span class="tool_header_title">时间戳转换</span>
        </div>
        <!-- <span>Unix时间戳（Unix timestamp）</span>
      <mu-text-field v-model="value" /><br/> -->

        <mu-auto-complete hintText="timestamp" labelFloat label="Unix时间戳（Unix timestamp）" @input="handleInput" :dataSource="dataSource" />
        <mu-icon value="swap_horiz" :size="32" />
        <mu-icon value="arrow_right_alt" color="#ccc" />
        <!--  -->
        <mu-auto-complete hintText="timestamp" labelFloat label="Unix时间戳（Unix timestamp）" @input="handleInput" :dataSource="dataSource" />

      </mu-paper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    todo() {
      this.$axios.get("/").then(function(res) {
        console.log(res);
      });
    }
  },
  created: function() {
    this.value = new Date().getTime();
  }
};
</script>

<!-- http://www.muse-ui.org/#/layout -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-paper {
  display: inline-block;
  width: 60%;
  margin: 20px;
  text-align: center;
}

.header {
  background-color: #7e57c2;
  /* box-shadow: 2px 2px 12px #888888; */
}
.header_search {
  border-radius:4px;
  padding: 0px 10px;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.3);
}

.icon_search {
  /* line-height: 30px;
  height: 30px; */
  vertical-align:middle;
}

.input_search {
  line-height: 34px;
  border: none;
  outline: none;
  color: white;
  background-color: rgba(0, 0, 0, 0);
}
.logo {
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 60px;
}

.tool_containt {
  text-align: center;
}
.tool_card {
  display: inline-block;
  width: 60%;
  margin: 20px;
  text-align: center;
}
.tool_header {
  background-color: #ccc;
}
.tool_header_title {
  line-height: 56px;
  font-size: 20px;
}

.tool_footer {
  border-top: 1px solid rgba(0, 0, 0, 0.117647);
}
.tool_footer_title {
  line-height: 36px;
  font-size: 14px;
}

.appbar-search-field {
  margin-bottom: 0;
  color: #fff;
}
</style>
