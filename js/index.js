var app = new Vue({
    el: "#container",
    data: {
        names: 1,
        namelist: [],
    },
    methods: {
        generateNames: function(){
          this.namelist = [];
          for(var i = 0; i < this.names; i++){
            this.namelist.push(this.randomname());
          }
        },
        randomname: function(){
          var femEV = [ "ia", "ie", "a", "y", "ey", "ah", "oe" ];
          var femEC = [ "l", "th", "n", "r", "ce" ];
          var maleEV = [ "o", "io" ];
          var maleEC = [ "ph", "w", "r", "s", "n", "m", "l", "ck" ];
          var femSV = [ "E", "O", "A", "I" ];
          var femSC = [ "H", "M", "V", "Ch", "S", "G", "J", "L", "T", "K" ];
          var maleSV = [ "A", "E", "Ai" ];
          var maleSC = [ "J", "M", "B", "L", "D", "Ch", "T", "N", "Z" ];
          var maleMCV = [ "a", "i", "o" ];
          var maleMUV = [ "e", "oa", "ie", "ae", "ai", "y", "ia", "ay" ];
          var femMV = [ "a", "e", "i", "o" ];
          var maleMCC = [ "j", "l", "r", "v", "l", "m", "g", "d", "c", "j" ];
          var maleMUC = [ "tt", "ck", "ch", "ll", "ndr" ];
          var femMCC = [ "l", "v", "m", "d", "s", "c", "f", "b", "g" ];
          var femMUC = [ "z", "x", "ss", "ll", "nn", "sh", "mm" ];

          var name;

          var nameLength = Math.floor(Math.random() * 4) + 2;
          var gender = Math.floor(Math.random() * 2);
          var letterType = Math.floor(Math.random() * 2);

          if (gender == 0) {
            if (letterType == 0) {
              name = maleSV[Math.floor(Math.random() * maleSV.length)];

              if (Math.random() < 0.2) {
                letterType = 1;
              } else {
                letterType = 0;
              }

            } else {
              name = maleSC[Math.floor(Math.random() * maleSC.length)];

              if (Math.random() < 0.2) {
                letterType = 3;
              } else {
                letterType = 2;
              }

            }

            for (var i = 0; i < nameLength; i++) {
              if (i == nameLength - 1) {
                if (letterType == 2 || letterType == 3) {
                  name += maleEV[Math.floor(Math.random() * maleEV.length)];
                } else {
                  name += maleEC[Math.floor(Math.random() * maleEC.length)];
                }
              } else {

                if (letterType == 0) {
                  name += maleMCC[Math.floor(Math.random() * maleMCC.length)];

                  if (Math.random() < 0.2) {
                    letterType = 3;
                  } else {
                    letterType = 2;
                  }
                } else if (letterType == 1) {
                  name += maleMUC[Math.floor(Math.random() * maleMUC.length)];

                  if (Math.random() < 0.2) {
                    letterType = 3;
                  } else {
                    letterType = 2;
                  }
                } else if (letterType == 2) {
                  name += maleMCV[Math.floor(Math.random() * maleMCV.length)];

                  if (Math.random() < 0.2) {
                    letterType = 1;
                  } else {
                    letterType = 0;
                  }
                } else if (letterType == 3) {
                  name += maleMUV[Math.floor(Math.random() * maleMUV.length)];

                  if (Math.random() < 0.2) {
                    letterType = 1;
                  } else {
                    letterType = 0;
                  }
                }

              }
            }

          } else {
            if (letterType == 0) {
              name = femSV[Math.floor(Math.random() * femSV.length)];

              if (Math.random() < 0.2) {
                letterType = 1;
              } else {
                letterType = 0;
              }

            } else {
              name = femSC[Math.floor(Math.random() * femSC.length)];
              letterType = 2;
            }
            for (var i = 0; i < nameLength; i++) {
              if (i == nameLength - 1) {
                if (letterType == 2) {
                  name += femEV[Math.floor(Math.random() * femEV.length)];
                } else {
                  name += femEC[Math.floor(Math.random() * femEC.length)];
                }
              } else {
                if (letterType == 0) {
                  name += femMCC[Math.floor(Math.random() * femMCC.length)];
                  letterType = 2;
                } else if (letterType == 1) {
                  name += femMUC[Math.floor(Math.random() * femMUC.length)];
                  letterType = 2;
                } else {
                  name += femMV[Math.floor(Math.random() * femMV.length)];

                  if (Math.random() < 0.2) {
                    letterType = 1;
                  } else {
                    letterType = 0;
                  }
                }
              }
            }
          }
          return name;
        },
    }
})
