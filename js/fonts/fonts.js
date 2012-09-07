define([
  'fonts/cufon',
  'fonts/Bebas_400'
], function(Cufon) {
  
  return {

    update: function() {
      Cufon.replace('.fontBebas', { fontFamily: 'Bebas' });
    }

  }

});