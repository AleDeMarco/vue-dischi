var app = new Vue({
  el: '#app',
  data: {
    dischi: [],
    generi: ['All']
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((result) => {
      this.dischi = result.data.response;
      this.dischi.forEach((element, i) => {
        if (!this.generi.includes(element.genre)) {
          this.generi.push(element.genre)
        }
      });
    }).catch(error => alert('Errore!'))
  }
});
