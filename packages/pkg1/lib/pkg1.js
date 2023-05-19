'use strict';

module.exports = pkg1;
// import _ from "lodash"
const _ =require('lodash')
const $ =require('jquery')
function pkg1() {
  console.log("pgk10000000",_)
  console.log("pgk11111111",$)
  return 'Hello from pkg1';
}
pkg1()