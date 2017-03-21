/**
 * Created by shs on 03/21/17.
 */

var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue',
    createdBy: 'Anton Shamseev',
    copyright : '2017',
    usersDataUrl: 'https://randomuser.me/api',
    usersData: [],
    isNonActive: true,
    isActive: false
    // show: false
  },
  computed: {
    count: function () {
        return this.count = this.usersData.length;
    }
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
    },
      showFullDesc: function (event) {
          targetId = event.currentTarget.id;
          // targetId.isNonActive = !targetId.isNonActive;
          // targetId.isActive = !targetId.isActive;

          console.log(targetId);
      }
  },
  created: function() {
    this.getUsersData();
  }
});

