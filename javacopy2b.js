/***** ..codeauthor:: Muthukumar Subramanian *****/
/*****  HTML JavaScript to Write and Read on the Google Firebase *****/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

/***** Firebase config *****/
const firebaseConfig = {
    apiKey: "AIzaSyAOlT6uuQMbTlSKwNvvCHhalUYlqRlE7Uo",
    authDomain: "first-project-42b86.firebaseapp.com",
    databaseURL: "https://first-project-42b86-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-project-42b86",
    storageBucket: "first-project-42b86.appspot.com",
    messagingSenderId: "101680681134",
    appId: "1:101680681134:web:e482b3e6a8d3dcfcda9d3f",
    measurementId: "G-N81NB0X1RB"
  };

/***** Initialize Firebase *****/
const app = initializeApp(firebaseConfig);
const mySwitch = document.getElementById("mySwitch");
/***** write data to firebase *****/
var control = "a";
var control2 = 0;


function write_db() {
    if(control == "a"){
    console.log("DEBUG: Write function");
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    control2 = control2 + 1;
    var user_name = "Signal Je"+ control2;

    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
      user_name: user_name,

    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}}

function write_db2() {
    if(control == "a"){
    console.log("DEBUG: Write function");
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    control2 = control2 + 1;
    var user_name = "Signal Ex"+ control2;

    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
      user_name: user_name,

    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}}
function write_db3() {
    if(control == "a"){
    console.log("DEBUG: Write function");
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    control2 = control2 + 1;
    var user_name = "Signal Ch" + control2;
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
      user_name: user_name,

    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}

}

function write_db4() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    control2 = control2 + 1;
    var user_name = "Signal Se" + control2;

    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
      user_name: user_name,

    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}


function write_db5() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal On" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch1() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O1" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch2() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O2" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch3() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O3" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch4() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O4" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch5() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O5" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch6() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O6" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch7() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O7" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch8() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O8" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch9() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    var create_db_table = ref(db, 'TV/');
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O9" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch0() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal O0" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chTv8() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal T8" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chSp() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal S+" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chTLC() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal TL" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch24k() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal 24" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function ch0TRT() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal TT" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chDiscovery() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal D+" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chNatgeo() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal NA" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chViasat() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal VH" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chSTV() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal ST" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}




function chup() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal up" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chdw() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal dw" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chok() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal ok" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chri() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal ri" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chle() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal le" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chvolup() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal v+" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chvoldw() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal v-" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chpup() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal p+" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

function chpdw() {
    
    if(control == "a"){   
    console.log("DEBUG: Write function");
    console.log(control);
    var db = getDatabase();
    
    control2 = control2 + 1;
    if(control2 > 8){
        control2 = 1;
    }
    var user_name = "Signal p-" + control2;
    
    set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
        user_name: user_name,
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}
}

mySwitch.addEventListener("change", function() {
    if (mySwitch.checked) {
        console.log("Switch is off");
        jetton.style.backgroundColor = "#ff0000";
        exit.style.backgroundColor= "#ff0000"; 
        change.style.backgroundColor= "#ff0000"; 
        select.style.backgroundColor= "#ff0000"; 
        control = "b";
        console.log(control);
        var db = getDatabase();
        var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
        var user_name = "Signal E0"

        set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
            user_name: user_name,

        }).then((res) => {
            console.log();
        })
        .catch((err) => {
            alert(err.message);
            console.log(err.code);
            console.log(err.message);
        })
    } else {
        console.log("Switch is on");
        control = "a";
        console.log(control);
        jetton.style.backgroundColor= "#4CAF50";
        exit.style.backgroundColor= "#4CAF50"; 
        change.style.backgroundColor= "#4CAF50"; 
        select.style.backgroundColor= "#4CAF50";  
        var db = getDatabase();
        var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
        var user_name = "Signal e0"

        set(ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/'), {
            user_name: user_name,

        }).then((res) => {
            console.log();
        })
        .catch((err) => {
            alert(err.message);
            console.log(err.code);
            console.log(err.message);
        })
    }
});

mySwitch2.addEventListener("change", function() {
    
    if (mySwitch2.checked) {
        var db = getDatabase();
        var create_db_table = ref(db, 'ESP32_DB/' + 'Timer2/');
        var user_name = 1;
        set(ref(db, 'ESP32_DB/' + 'Timer2/'), {
            sleep_mode: user_name,

        }).then((res) => {
            console.log();
        })
        .catch((err) => {
            alert(err.message);
            console.log(err.code);
            console.log(err.message);
        })
        
    } else {
        var db = getDatabase();
        var create_db_table = ref(db, 'ESP32_DB/' + 'Timer2/');
        var user_name = 0;

        set(ref(db, 'ESP32_DB/' + 'Timer2/'), {
            sleep_mode: user_name,

        }).then((res) => {
            console.log();
        })
        .catch((err) => {
            alert(err.message);
            console.log(err.code);
            console.log(err.message);
        })
        
    }
    /*************************************/
        
    
    /**************************************/









});

function write_txt() {
    
    console.log("DEBUG: Write function");
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'Timer/');
    
    var user_name = document.getElementById("t").value;
    
    
    if( user_name == ''){
        
        alert("Make sure, must be non-empty data is required!!!");
    }
    user_name = parseInt(user_name);
    console.log(typeof user_name);
    if (user_name < 200){
        user_name = 200;
        t.value = 200;
    }
    if (user_name > 5000){
        user_name = 5000;
        t.value = 5000;
    }
    set(ref(db, 'ESP32_DB/' + 'Timer/'), {
      time: user_name
      

    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}



/***** read data from firebase *****/
function read_db() {
    var db = getDatabase();
    var connect_db = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    var retrieve_data='';
    console.log("DEBUG: Read function");
    onValue(connect_db, (snapshot) => {
        retrieve_data = snapshot.val();
        //console.log("user_name: " + retrieve_data.user_name);
        //console.log("user_name_password: " + retrieve_data.user_name_password);
        call_loop_print(retrieve_data);
        document.getElementById("display_read_data").innerHTML =  "<pre>" + "signal: " + retrieve_data.user_name + "</pre>";
        })
    function call_loop_print(retrieve_data){
        for (var r=0;r<Object.entries(retrieve_data).length;r++){
            var key = Object.keys(retrieve_data)[r];
            var value = retrieve_data[key];
            console.log("Key_" + r + ': ' + key + " Value_:" + r + ': ' + value );
           }
 }
}
/***** call write data function *****/
var write_data_to_firebase = document.getElementById("jetton");
write_data_to_firebase.addEventListener('click', write_db);
var write_data_to_firebase2 = document.getElementById("exit");
write_data_to_firebase2.addEventListener('click', write_db2);
var write_data_to_firebase2 = document.getElementById("change");
write_data_to_firebase2.addEventListener('click', write_db3);
var write_data_to_firebase2 = document.getElementById("select");
write_data_to_firebase2.addEventListener('click', write_db4);
//////////////////////////////////////////////////////////////////
var write_data_to_firebase2 = document.getElementById("on-off");
write_data_to_firebase2.addEventListener('click', write_db5);
var write_data_to_firebase2 = document.getElementById("TV1");
write_data_to_firebase2.addEventListener('click', ch1);
var write_data_to_firebase2 = document.getElementById("Tv2");
write_data_to_firebase2.addEventListener('click', ch2);
var write_data_to_firebase2 = document.getElementById("Tv3");
write_data_to_firebase2.addEventListener('click', ch3);
var write_data_to_firebase2 = document.getElementById("Tv4");
write_data_to_firebase2.addEventListener('click', ch4);
var write_data_to_firebase2 = document.getElementById("Tv5");
write_data_to_firebase2.addEventListener('click', ch5);
var write_data_to_firebase2 = document.getElementById("Tv6");
write_data_to_firebase2.addEventListener('click', ch6);
var write_data_to_firebase2 = document.getElementById("Tv7");
write_data_to_firebase2.addEventListener('click', ch7);
var write_data_to_firebase2 = document.getElementById("Tv8");
write_data_to_firebase2.addEventListener('click', ch8);
var write_data_to_firebase2 = document.getElementById("Tv9");
write_data_to_firebase2.addEventListener('click', ch9);
var write_data_to_firebase2 = document.getElementById("Tv0");
write_data_to_firebase2.addEventListener('click', ch0);
var write_data_to_firebase2 = document.getElementById("Tvup");
write_data_to_firebase2.addEventListener('click', chup);
var write_data_to_firebase2 = document.getElementById("Tvdown");
write_data_to_firebase2.addEventListener('click', chdw);
var write_data_to_firebase2 = document.getElementById("Tvleft");
write_data_to_firebase2.addEventListener('click', chle);
var write_data_to_firebase2 = document.getElementById("Tvright");
write_data_to_firebase2.addEventListener('click', chri);
var write_data_to_firebase2 = document.getElementById("Tvok");
write_data_to_firebase2.addEventListener('click', chok);
var write_data_to_firebase2 = document.getElementById("Tvvol+");
write_data_to_firebase2.addEventListener('click', chvolup);
var write_data_to_firebase2 = document.getElementById("Tvvol-");
write_data_to_firebase2.addEventListener('click', chvoldw);
var write_data_to_firebase2 = document.getElementById("Tvp+");
write_data_to_firebase2.addEventListener('click', chpup);
var write_data_to_firebase2 = document.getElementById("Tvp-");
write_data_to_firebase2.addEventListener('click', chpdw);
///////////////////////////////////////////////////////////////
var write_data_to_firebase2 = document.getElementById("29");
write_data_to_firebase2.addEventListener('click', chTv8);
var write_data_to_firebase2 = document.getElementById("241");
write_data_to_firebase2.addEventListener('click', chSp);
var write_data_to_firebase2 = document.getElementById("34");
write_data_to_firebase2.addEventListener('click', chTLC);
var write_data_to_firebase2 = document.getElementById("355");
write_data_to_firebase2.addEventListener('click', ch24k);
var write_data_to_firebase2 = document.getElementById("666");
write_data_to_firebase2.addEventListener('click', ch0TRT);
var write_data_to_firebase2 = document.getElementById("115");
write_data_to_firebase2.addEventListener('click', chDiscovery);
var write_data_to_firebase2 = document.getElementById("112");
write_data_to_firebase2.addEventListener('click', chNatgeo);
var write_data_to_firebase2 = document.getElementById("119");
write_data_to_firebase2.addEventListener('click', chViasat);
var write_data_to_firebase2 = document.getElementById("2");
write_data_to_firebase2.addEventListener('click', chSTV);
////////////////////////////////////////////////////////////////7



var write_data_to_firebase2 = document.getElementById("time");
write_data_to_firebase2.addEventListener('click', write_txt);

/***** call read data function *****/
var read_data_from_firebase = document.getElementById("jetton");
read_data_from_firebase.addEventListener('click', read_db);
var read_data_from_firebase = document.getElementById("exit");
read_data_from_firebase.addEventListener('click', read_db);
var read_data_from_firebase = document.getElementById("change");
read_data_from_firebase.addEventListener('click', read_db);
var read_data_from_firebase = document.getElementById("select");
read_data_from_firebase.addEventListener('click', read_db);
