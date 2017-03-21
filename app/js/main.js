/**
 * Created by shs on 03/21/17.
 */

var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue',
    usersDataUrl: 'https://randomuser.me/api',
    usersData: []
  },
  methods: {
    getUsersData: function() {
      var options = {
        params: {
          results: 10
        }
      };

      this.$http.get(this.usersDataUrl, options).then(function(response) {
        this.usersData = response.data.results;
        console.log(this.usersData);
      }, function(error) {
        console.log(error);
      })
    }
  },
  created: function() {
    this.getUsersData();
  }
});

