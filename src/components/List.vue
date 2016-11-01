<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(user, index) of list">
        <h3>{{index}} -- {{user.name}}</h3>
        <img :src="user.img" alt="">
      </li>
    </ul>
    <my-footer/>
  </div>
</template>

<script>
import my from './Footer';
export default {
  name: 'hello',
  data () {
    return {
      list: [],
      msg: 'list view and fetch data.json'
    }
  },
  components: {
    [my.name]: my
  },
  created: function(){
    var _this = this;

    fetch('./static/data.json').then(response => response.json()).then((data)=> {
      _this.list = data.list
    }, (err) => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 30px;
  height: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  border: 1px solid #efefef;
}

</style>
