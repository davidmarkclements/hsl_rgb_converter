var hslToRgb = require( '../converter' );
var expect = require( 'chai' ).expect;

describe( 'hslToRgb', function() {
  it( 'converts hsl to rgb', function() {
    var h_to_rgb = {
      0: { r: 255, g: 0, b: 0 },
      45: { r: 255, g: 191, b: 0 },
      90: { r: 128, g: 255, b: 0 },
      135: { r: 0, g: 255, b: 64 },
      180: { r: 0, g: 255, b: 255 },
      225: { r: 0, g: 64, b: 255 },
      270: { r: 128, g: 0, b: 255 },
      315: { r: 255, g: 0, b: 191 }
    };
    for( var key in h_to_rgb ) {
      var h = parseInt( key, 10 ),
        rgb = h_to_rgb[ h ];
      expect( hslToRgb( h, 0, 0 ) ).to.eql( [ 0, 0, 0 ] );
      expect( hslToRgb( h, 1, 0.5 ) ).to.eql( [ rgb.r, rgb.g, rgb.b ] );
      expect( hslToRgb( h, 1, 1 ) ).to.eql( [ 255, 255, 255 ] );
    }
  } );
} );
