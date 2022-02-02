/// <reference path="../proj4.js" />
/// <reference path="../ol.js" />

// The projection definition should be retrieved from http://epsg.io/ website.
// Also, you are required to add "+title=???" at the front of the definition.
proj4.defs("EPSG:2326", "+title=Hong Kong 1980 Grid System +proj=tmerc +lat_0=22.31213333333334 +lon_0=114.1785555555556 +k=1 +x_0=836694.05 +y_0=819069.8 +ellps=intl +towgs84=-162.619,-276.959,-161.764,0.067753,-2.24365,-1.15883,-1.09425 +units=m +no_defs");
ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([795000, 786500, 872000, 862500]);