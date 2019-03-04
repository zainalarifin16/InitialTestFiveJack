
var mapGun = [
                [ " " , "W", " ", "W", " ", "W", " ", "W" ],
                [ " " , " ", " ", " ", " ", "W", " ", " " ],
                [ "W" , " ", "W", " ", " ", "W", " ", "W" ],
                [ " " , " ", " ", " ", " ", " ", " ", " " ],
                [ " " , " ", " ", "W", " ", " ", " ", " " ],
                [ " " , " ", " ", " ", " ", "W", " ", "W" ],
                [ " " , "W", " ", " ", " ", " ", " ", " " ],
                [ " " , " ", " ", " ", "W", " ", "W", " " ],
             ];

var check_around = function(mapGun, row, col){
    for(var i = 0; i < mapGun.length; i++){
        // console.table(mapGun);
        // debugger;
        if( (col-i) > 0 ){
            // console.log( mapGun[row][col-i] );
            if(mapGun[row][col-i] == "GM") return false;
            if(mapGun[row][col-i] == "W") break;
        }
        
        if( (col+1) < mapGun.length ){
            // console.log( mapGun[row][col+i] );
            if(mapGun[row][col+i] == "GM") return false;
            if(mapGun[row][col+i] == "W") break;
        }
    }

    for(var j = 0; j < mapGun[row].length; j++){
        // console.table(mapGun);
        // debugger;
        if( (row+j) < mapGun[row].length ){
            console.log( mapGun[row+j][col] );
            if(mapGun[row+j][col] == "GM") return false;
            if(mapGun[row+j][col] == "W") break;
        }

        if( (row-j) > 0 ){
            console.log( mapGun[row-j][col] );
            if(mapGun[row-j][col] == "GM") return false;
            if(mapGun[row-j][col] == "W") break;
        }
    }

    return true;
}

var check_posibility = function(mapGun){
    var GMCounter = 0;
    console.table(mapGun);
    for(var row=0; row< mapGun.length;row++){
        for(var col=0; col<mapGun[row].length;col++){
            if( mapGun[row][col] == " " ){
                if(check_around(mapGun, row, col)){
                    mapGun[row][col] = "GM";
                    GMCounter++;
                }
            }
        }
    }
    console.log("Gunmen : "+GMCounter);
    console.table(mapGun);
}

check_posibility(mapGun);
