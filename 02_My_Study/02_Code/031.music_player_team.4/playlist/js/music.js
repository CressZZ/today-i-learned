var model = new Model(data);



Vue.component('audio-control',{
  props:['propNowSong', 'propAutoPlay'],
  template:`
    <div class="audio-control">
      <audio ref="audio"
      @canply = "canPlay"
      @ended = "ended"
      controls :src="propNowSong.source"></audio>
      <img :src="propNowSong.cover" :alt="propNowSong.title">
      <p>{{ propNowSong.title}} </p>
    </div>
  `,
  methods:{
    play: function(){
      this.$refs.audio.currentTime = 0;
      // this.$refs.auio.play();
    },
    canPlay: function(){
      if(this.propAutoPlay){
        this.$refs.audio.play();
      }
    },
    ended: function(){
      this.$emit('onEnded');
    },

  }
})

Vue.component('audio-item', {
  props:['propSongItem'],
  template: `
    <li @click="songClick">
      <img :src="propSongItem.cover" :alt="propSongItem.title">
      {{propSongItem.title}}
    </li>
  `,
  methods:{
    songClick: function(){
      console.log(this.propSongItem);
      this.$emit('onSongClick', this.propSongItem);
    }
  }
})

Vue.component('audio-list', {
  props:['propNowSong', 'propSongList'],
  template: `
    <ol>
      <li is="audio-item"
      :class="{'is-active':propNowSong === song}"
        v-for="song in propSongList"
        :propSongItem="song"
        @onSongClick="songClick">
      </li>
    </ol>
  `,
  methods: {
    songClick: function(song){
      console.log('audio-list:', song);
      this.$emit('onSongClick', song);
    }
  }
})

Vue.component('audio-player', {
  template: `
    <div>
      <h2>Audio Player</h2>

      <audio-control
      ref="control"
      :propNowSong="nowSong"
      :propAutoPlay="autoPlay"
      @onEnded="nextSong">
      </audio-control>

      <audio-list
        :propNowSong="nowSong"
        :propSongList="songList"
        @onSongClick="songClick"></audio-list>

    </div>
  `,
  methods:{
    songClick: function(song){
      this.nowSong=song;
      console.log("this",this.nowSong);
      this.autoPlay = true;
      this.$refs.control.play();
    },
    nextSong: function(){
      var nextId = model.nextId();
      this.nowSong = model.read(nextId);
      console.log("next", nextId);

    }
  },
  data: function(){
    return {
        nowSong: model.read(0),
        songList: model.read(),
        autoPlay: false,
    }
  }
})



var app = new Vue( {
  el: '#app'

});
