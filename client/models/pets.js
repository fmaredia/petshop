var m = require('mithril')


var Pets = module.exports = {}

Pets.model = function() {
  this.name = m.prop('name');
  this.species = m.prop('species');
  this.image = m.prop('imageUrl');
  this.likes = m.prop('likes');
}

Pets.fetch = function () {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets' })
}

Pets.like = function(petId, apiToken) {
  return m.request({ method: 'POST', url: ' pet-shop.api.mks.io/shops/1/pets/ ' + petId + '/like' , data: {apiToken: apiToken} })
}