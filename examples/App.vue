<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="(item,index) in voicefile" :key="index">
      <colorPicker :text="item.text" :src="item.src" @deleteAudio="deleteAudio"></colorPicker>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
      return {
        voicefile:[
            {
                text:"录音001",
                src:"http://sound.yywz123.com/english96ad/song/fanchang/276891cbfedbadcfea.mp3"
            },
            {
                text:"录音002sssssssssssssssssssssssssssssssssssssssssssssssssssss",
                src:"http://sound.yywz123.com/english96ad/lesson/nce22/257aeeacdfcdbbf.mp3"
            },
            {
                text:"录音003",
                src:"http://1252014125.vod2.myqcloud.com/46740e39vodcq1252014125/1db79a9a5285890783173288539/ZOaFuTmGs30A.mp3"
            },
        ]
      }
  },
  components: {
    HelloWorld
  },
  methods:{
    // 删除音频文件
    deleteAudio (data) {
        var filterItems = this.voicefile.filter((value) => {return value.text != data;});
        this.voicefile = filterItems;
        console.log(filterItems);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
