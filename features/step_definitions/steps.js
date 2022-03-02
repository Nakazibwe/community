const {Given, When, Then} = require('@cucumber/cucumber');
const Neighbour = require('../../src/community');
const {assertThat,is} = require('hamjest')
  Given('Ushindi lives {int} metres from Jules', function (distance) {
      this.Ushindi = new Neighbour 
      this.Jules = new Neighbour
      this.Ushindi.moveTo(distance)
    console.log(distance)

  });

  When('Jules shouts {string}', function (message) {
    this.Jules.announce(message);
    this.message = message;
  });

  Then('Ushindi hears Jules announcement', function () {
    assertThat(this.Ushindi.heardAnnouncement(),is([this.message]));
  });