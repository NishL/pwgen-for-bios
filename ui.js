
var sDescription = CreateHashTable([[SONY,"Old Sony"],
                    [SAMSUNG,"Samsung"],
                    [PHOENIX,"Generic Phoenix"],
                    [HP_COMPAQ,"HP/Compaq Phoenix BIOS"],
                    [FSI_PHOENIX,"Fujitsu-Siemens Phoenix"],
            [FSI_L_PHOENIX,"Fujitsu-Siemens (model L) Phoenix "],
            [FSI_P_PHOENIX,"Fujitsu-Siemens (model P) Phoenix "],
            [FSI_S_PHOENIX,"Fujitsu-Siemens (model S) Phoenix "],
            [FSI_X_PHOENIX,"Fujitsu-Siemens (model X) Phoenix "],
            [INSYDE,"InsydeH2O BIOS (Acer, HP)"],
            [HP_MINI,"HP/Compaq Mini Netbooks"],
            [FSI_20_DEC_NEW,"Fujitsu-Siemens new"],
            [FSI_20_DEC_OLD,"Fujitsu-Siemens old"],
            [FSI_HEX,"Fujitsu-Siemens"]
            ]);


function converToTable(answ){
    var str ='<table class="answer_table">';
    for(var i=0; i<answ.length; i++){
        str += "<tr>";
        for(var j=0; j< answ[i].length; j++){
            str +=  '<td>' + answ[i][j] + '<td>' ;
        }
        str += "</tr>";
    }
    str += "</table>";
    return str;
}

function toArray(obj){
    var ret = [];
    for(var i in obj){
        ret.push([i,obj[i]]);
    }
    return ret;
}

function toDescription(arr){
    for(var i=0;i<arr.length;i++){
        arr[i][0] = sDescription[arr[i][0]];
    }
    return arr;
}

function calcPass(){
    var serial =  document.getElementById('serial_id').value;
    var pass_object = autoGetBiosPwd(serial);
    var answ = toDescription(toArray(pass_object));
    var k = answ.length;
    var str = converToTable(answ) ;
    var th = document.getElementById('try_this');
    if(k>0){
        th.style.display = "";
    } else {
        th.style.display = "none";
    }
    var an = document.getElementById("answer");
    an.innerHTML = str;
}
