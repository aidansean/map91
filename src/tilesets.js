var tilesets = [] ;

var defaultTileset = {
"#":{color:"rgb(159,159,159)"},
"*":{color:"rgb(143,113,62)"},
".":{color:"rgb(79,79,79)"},
",":{color:"rgb(47,30,0)"},
":":{color:"rgb(110,111,7)"},
";":{rgb:{r:0,g:95,b:4}, texture:true},
"[":{color:"rgb(111,111,111)"},
"]":{color:"rgb(111,84,62)"},
"~":{rgb:{r:0,g:75,b:150}, flux:true},
"`":{rgb:{r:0,g:55,b:111}},
"=":{color:"rgb(143,20,20)"},
"_":{color:"rgb(95,69,0)"},
"'":{color:"rgb(71,162,191)"},
"+":{color:"rgb(63,0,62)"}
} ;


tilesets['beach'] = {
    ".":{rgb:{r:199,g:194,b:129}, texture:true},
    ":":{rgb:{r:47,g:30,b:0}, texture:true},
    "[":{rgb:{r:111,g:111,b:111}, texture:true},
    "]":{rgb:62, texture:true},
    "#":{rgb:{r:226,g:140,b:59}, texture:true},
    "*":{rgb:{r:143,g:113,b:62}, texture:true}
} ;

tilesets['city'] = {} ;

tilesets['credits'] = {
    ".":{rgb:{r:30,g:30,b:30}, texture: false},
    ":":{rgb:{r:47,g:30,b:0}, texture:true},
    "[":{rgb:{r:111,g:111,b:111}, texture:true},
    "]":{rgb:62, texture:true},
    "#":{rgb:{r:226,g:140,b:59}, texture:true},
    "*":{rgb:{r:143,g:113,b:62}, texture:true}
}

tilesets['darkcave'] = {
    "=":{color:"rgb(70,70,70)"},
    ".":{rgb:{r:68,g:44,b:27}, texture:true},
    ",":{color:"rgb(61,61,61)"},
    "[":{color:"rgb(31,31,31)"},
    "#":{rgb:{r:153,g:105,b:73}, texture:true},
    "*":{color:"rgb(102,82,46)"}
} ;

tilesets['darkcity'] = {
    "=":{color:"rgb(70,70,70)"},
    ".":{color:"rgb(50,50,50)"},
    "*":{color:"rgb(102,82,46)"},
    "`":{color:"rgb(0,39,78)"},
    "[":{color:"rgb(83,83,83)"},
    "~":{rgb:{r:0,g:50,b:120}, flux:true},
    ":":{color:"rgb(95,95,38)"},
    "'":{color:"rgb(131,177,192)"}
} ;

tilesets['darkcitybig'] = {
    "=":{color:"rgb(70,70,70)"},
    //".":{color:"rgb(50,50,50)"},
    //"*":{color:"rgb(102,82,46)"},
    //"`":{color:"rgb(0,39,78)"},
    //"[":{color:"rgb(83,83,83)"},
    //"~":{rgb:{r:0,g:50,b:120}, flux:true},
    //":":{color:"rgb(95,95,38)"},
    //"'":{color:"rgb(131,177,192)"}
} ;

tilesets['darkindoors'] = {
    ",":{color:"rgb(0,95,4)"},
    ":":{color:"rgb(47,30,0)"},
    ";":{color:"rgb(110,111,7)"},
    "[":{color:"rgb(111,111,111)"},
    "]":{color:"rgb(237,0,255)"},
    "#":{color:"rgb(159,119,49)"},
    "*":{color:"rgb(127,127,127)"},
    "=":{color:"rgb(95,64,12)"}
} ;

tilesets['endgame'] = {
    "=":{color:"rgb(70,70,70)"},
    ".":{color:"rgb(30,30,30)"},
    "*":{color:"rgb(102,82,46)"},
    "`":{rgb:{r:0,g:0,b:50}, flux:true},
    "[":{color:"rgb(83,83,83)"},
    "~":{rgb:{r:20,g:0,b:100}, flux:true},
    ":":{color:"rgb(95,95,38)"},
    "'":{color:"rgb(131,177,192)"}
} ;

tilesets['fancyCity'] = {
    "]":{rgb:{r:30,g:150,b:30}, texture:true},
    "=":{rgb:{r:122,g:70,b:34}, texture:true}
} ;

tilesets['fireDungeon'] = {
    ".":{color:"rgb(40,40,40)"},
    ",":{rgb:{r:30,g:30,b:30}, texture:true},
    ";":{rgb:{r:20,g:20,b:20}, oil:true},
    "#":{color:"rgb(80,80,80)"},
    "=":{color:"rgb(70,70,70)"},
    "*":{color:"rgb(70,70,70)"},
    "_":{color:"rgb(60,25,0)"},
    "~":{rgb:{r:0,g:40,b:80}, flux:true}
} ;

tilesets['sewer'] = {
    ".":{color:"rgb(111,105,90)"},
    ",":{color:"rgb(0,95,4)"},
    ":":{color:"rgb(47,30,0)"},
    ";":{color:"rgb(110,111,7)"},
    "*":{color:"rgb(127,127,127)"},
    "#":{color:"rgb(126,143,107)"},
    "~":{rgb:{r:0,g:95,b:13}, flux:true},
    "`":{rgb:{r:0,g:63,b:7}, flux:true}
} ;

tilesets['subway'] = {
    "=":{color:"rgb(130,130,130)"},
    ".":{rgb:{r:68,g:44,b:27}, texture:true},
    ",":{color:"rgb(61,61,61)"},
    "[":{color:"rgb(31,31,31)"},
    "#":{rgb:{r:153,g:105,b:73}, texture:true},
    "*":{color:"rgb(102,82,46)"}
}

tilesets['tower'] = {
    ",":{rgb:{r:70,g:10,b:10}},
    ":":{rgb:{r:55,g:55,b:55}},
    ";":{rgb:{r:10,g:20,b:40}},
    "_":{rgb:{r:60,g:25,b:0}},
    "*":{rgb:{r:50,g:50,b:50}},
    "=":{rgb:{r:130,g:70,b:50}},
    "[":{rgb:{r:40,g:50,b:50}},
    "#":{rgb:{r:130,g:130,b:130}}
} ;

tilesets['underTheOcean'] = {
    "`":{color:"black"}
} ;

tilesets['watercave'] = {
    ".":{rgb:{r:88,g:64,b:67}, texture:true},
    ",":{rgb:{r:108,g:84,b:87}, texture:true},
    "#":{rgb:{r:201,g:148,b:140}, texture:true},
    "*":{color:"rgb(122,92,56)"},
    "~":{rgb:{r:5,g:80,b:80}, flux:true},
    "`":{rgb:{r:0,g:40,b:40}, flux:true},
    ":":{rgb:{r:60,g:40,b:20}},
    "=":{rgb:{r:201,g:148,b:140}}
} ;

tilesets['empty'] = {} ;




