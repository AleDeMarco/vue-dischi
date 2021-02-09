var app = new Vue({
  el: '#app',
  data: {
    dischi: [],
    generi: ['All'],
    selected: 'All',
    selectedDischi: []
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((result) => {
      this.dischi = result.data.response;
      this.selectedDischi = result.data.response;
      this.dischi.forEach((element, i) => {
        if (!this.generi.includes(element.genre)) {
          this.generi.push(element.genre)
        }
      });
    }).catch(error => alert('Errore!'))
  },
  methods: {
    changeItem(event) {
      this.selected = event.target.value;
      this.selectedDischi = [];
      this.dischi.forEach((element, i) => {
        if (this.selected == 'All') {
          this.selectedDischi = this.dischi;
        }
        else {
          if (element.genre.includes(this.selected)) {
            this.selectedDischi.push(element);
          }
        }
      });
    }
  }
});
