new Vue({
    el: '#vueTest',
  data: {
    testText: 'test'
  },

  methods: {
    update: function(){
      var xd = bossVueTest();
      this.testText = xd;
    }
  }
})
