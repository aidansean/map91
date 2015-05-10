var maptext = westside_maptext ;
var map = maptext.map ;

function getParameterByName(name){
  // Taken from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search) ;
  return match && decodeURIComponent(match[1].replace(/\+/g, ' ')) ;
}

var mode = 'slow' ;
var crop = true ;
var rowSize = 1 ;
var fillerTile = ',' ;

var cellSize = 10 ;
var canvas_maptext  = null ;
var context_maptext = null ;

var colors = [] ;
var color_chars = [] ;
function add_color(character, color){
  color_chars.push(character) ;
  colors[character] = color ;
}

var i0 = 0 ;
var i1 = 0 ;
var j0 = 0 ;
var j1 = 0 ;

var nRow = map.length ;
var nCol = 0 ;
for(var i=0 ; i<map.length ; i++){
  if(map[i].length>nCol) nCol = map[i].length ;
}
var cw = cellSize*nCol ;
var ch = cellSize*nRow ;

add_color('`', 'rgb(  0, 27, 62)') ;
add_color('*', 'rgb( 82, 62, 34)') ;
add_color('.', 'rgb( 38, 38, 38)') ;
add_color(':', 'rgb( 77, 78, 25)') ;
add_color('[', 'rgb( 65, 65, 65)') ;
add_color('~', 'rgb( 10, 50,119)') ;
add_color(';', 'rgb( 12, 83,  8)') ;
add_color('#', 'rgb(142,142,142)') ;
add_color('=', 'rgb( 54, 54, 54)') ;
add_color('_', 'rgb( 76, 54,  0)') ;
add_color("'", 'rgb(113,162,178)') ;
add_color(",", 'rgb( 35, 22,  0)') ;
add_color("]", 'rgb( 92, 67, 46)') ;
add_color("+", 'rgb( 48,  0, 48)') ;
add_color("!", 'rgb( 75, 87,185)') ;
add_color("=", 'rgb(200,  0,  0)') ;
add_color("\u2744", 'rgb( 80,106,195)') ;

var second_tileset = tilesets['empty'] ;

function start(){
  canvas_map = Create('canvas') ;
  canvas_map.id = 'canvas_map' ;
  canvas_map.width  = cw ;
  canvas_map.height = ch ;
  context_map = canvas_map.getContext('2d') ;
  Get('map_wrapper').appendChild(canvas_map) ;
  
  Get('submit_changeMap').addEventListener('click', click) ;
  document.addEventListener('keydown', keydown) ;
  
  if(getParameterByName('map')){
    Get('select_map').value = getParameterByName('map') ;
    change_map() ;
  }
  if(getParameterByName('cellSize')){
    cellSize = Math.max(1,parseInt(getParameterByName('cellSize'))) ;
  }
    
  update_settings() ;
  draw_all() ;
  
  if(getParameterByName('bigmap_mainland'       )) bigmap_mainland.draw(context_map) ;
  if(getParameterByName('bigmap_batemantower'   )) bigmap_batementower.draw(context_map) ;
  if(getParameterByName('bigmap_glassBayDungeon')) bigmap_glassBayDungeon.draw(context_map) ;
  if(getParameterByName('bigmap_aldenHouse'     )) bigmap_aldenHouse.draw(context_map) ;
  if(getParameterByName('bigmap_bacalhauIsland' )) bigmap_bacalhauIsland.draw(context_map) ;
  if(getParameterByName('bigmap_subway'         )) bigmap_subway.draw(context_map) ;
  if(getParameterByName('bigmap_westsidesewer'  )) bigmap_westsidesewer.draw(context_map) ;
  if(getParameterByName('bigmap_wswarehouse'    )) bigmap_wswarehouse.draw(context_map) ;
  if(getParameterByName('bigmap_leatherTower'   )) bigmap_leatherTower.draw(context_map) ;
  if(getParameterByName('bigmap_meat'           )) bigmap_meat.draw(context_map) ;
  if(getParameterByName('bigmap_underpass'      )) bigmap_underpass.draw(context_map) ;
  if(getParameterByName('bigmap_endgame'        )) bigmap_endgame.draw(context_map) ;
  if(getParameterByName('bigmap_all')) draw_bigmap_all() ;
}

function draw_bigmap_all(){
  var margin = 5 ;
  var x0 = margin ;
  var y0 = margin ;
      
  var bigmaps = [] ;
  
  if(false){
    // Old arrangement
    bigmaps.push([bigmap_mainland       , x0+  0, y0+  0]) ;
    bigmaps.push([bigmap_aldenHouse     , x0+  3, y0+382]) ;
    bigmaps.push([bigmap_wswarehouse    , x0+225, y0+429]) ;
    bigmaps.push([bigmap_westsidesewer  , x0+120, y0+382]) ;
    bigmaps.push([bigmap_bacalhauIsland , x0+640, y0+  0]) ;
    bigmaps.push([bigmap_endgame        , x0+675, y0+473]) ;
    bigmaps.push([bigmap_glassBayDungeon, x0+120, y0+520]) ;
    bigmaps.push([bigmap_batementower   , x0+700, y0+250]) ;
    bigmaps.push([bigmap_subway         , x0+525, y0+350]) ;
    bigmaps.push([bigmap_leatherTower   , x0+530, y0+ 10]) ;
    bigmaps.push([bigmap_meat           , x0+580, y0+ 10]) ;
    bigmaps.push([bigmap_underpass      , x0+700, y0+110]) ;
    bigmaps.push([bigmap_parking        , x0+750, y0+110]) ;
    bigmaps.push([bigmap_posterHeader   , x0+  0, y0+617]) ;
  }
  
  // New arrangement
  bigmaps.push([bigmap_mainland       , x0+  0, y0+  0]) ;
  bigmaps.push([bigmap_aldenHouse     , x0+ 23, y0+362]) ;
  bigmaps.push([bigmap_wswarehouse    , x0+150, y0+395]) ;
  bigmaps.push([bigmap_westsidesewer  , x0+220, y0+375]) ;
  bigmaps.push([bigmap_bacalhauIsland , x0+640, y0+ 20]) ;
  bigmaps.push([bigmap_endgame        , x0+690, y0+473]) ;
  bigmaps.push([bigmap_glassBayDungeon, x0+220, y0+520]) ;
  bigmaps.push([bigmap_batementower   , x0+710, y0+250]) ;
  bigmaps.push([bigmap_subway         , x0+525, y0+350]) ;
  bigmaps.push([bigmap_leatherTower   , x0+150, y0+510]) ;
  bigmaps.push([bigmap_meat           , x0+555, y0+ 20]) ;
  bigmaps.push([bigmap_underpass      , x0+542, y0+590]) ;
  bigmaps.push([bigmap_parking        , x0+515, y0+490]) ;
  bigmaps.push([bigmap_posterHeader   , x0+  0, y0+617]) ;
  
  var w = 0 ;
  var h = 0 ;
  for(var i=0 ; i<bigmaps.length ; i++){
    var b = bigmaps[i] ;
    var x = b[0].cells[0].length+b[1] ;
    var y = b[0].cells.length   +b[2] ;
    if(x>w) w = x ;
    if(y>h) h = y ;
  }
  
  w += margin ;
  h += margin ;
  
  cw = w*cellSize ;
  ch = h*cellSize ;
  
  canvas_map.style.width  = cw ;
  canvas_map.style.height = ch ;
  canvas_map.width  = cw ;
  canvas_map.height = ch ;
  
  context_map.fillStyle = 'rgb(50,50,50)' ;
  context_map.fillRect(0, 0, cw, ch) ;
  
  context_map.fillStyle = 'rgb(150,150,150)' ;
  context_map.fillRect(4*cellSize, 4*cellSize, cw-8*cellSize, ch-8*cellSize) ;
  
  context_map.fillStyle = 'rgb(0,55,111)' ; // city tileset water
  context_map.fillRect(margin*cellSize, margin*cellSize, cw-2*margin*cellSize, ch-2*margin*cellSize) ;
    
  for(var i=0 ; i<bigmaps.length ; i++){
    var b = bigmaps[i] ;
    b[0].draw_xy(context_map, b[1], b[2]) ;
  }
  
  Get('div_debug').innerHTML = 'margin =' + margin + '<br />' + 
                               w + ' x ' + h + '<br />' + 
                               cw + 'px x ' + ch + 'px<br />' + 
                               ' w/h = ' + (cw/ch).toPrecision(3) +
                               '  extra space = ' + (cw/Math.sqrt(2)-ch).toPrecision(3) + 'px + (' + ((cw/Math.sqrt(2)-ch)/cellSize).toPrecision(3) + ')' ;
}

function keydown(evt){
  var keyDownID = window.event ? event.keyCode : (evt.keyCode != 0 ? evt.keyCode : evt.which) ;
  switch(keyDownID){
    case 13: change_map() ; break ; // enter
    defaut : break ;
  }
  return ;
}
function click(){ change_map() ; }

function update_settings(){
  map = maptext.map ;
  second_tileset = tilesets[maptext.properties.tileset] ;
  fillerTile = maptext.properties.fillerTile ;
  
  rowSize = 1 ;
  for(var i=0 ; i<map.length ; ++i){
    if(map[i].length>rowSize) rowSize = map[i].length ;
  }
  for(var i=0 ; i<map.length ; ++i){
    for(var j=map[i].length ; j<rowSize ; ++j){
      map[i] += fillerTile ;
    }
  }
  
  i0 = (crop) ? maptext.properties.top : 0 ;
  i1 = (crop) ? map.length - maptext.properties.bottom : map.length ;
  j0 = (crop) ? maptext.properties.left : 0 ;
  j1 = (crop) ? rowSize - maptext.properties.right : rowSize ;
  
  var nRow = i1-i0 ;
  var nCol = j1-j0 ;
  cw = cellSize*nCol ;
  ch = cellSize*nRow ;
  canvas_map.style.width  = cw ;
  canvas_map.style.height = ch ;
  canvas_map.width  = cw ;
  canvas_map.height = ch ;
}

function change_map(){
  var chosen_map = Get('select_map').value ;
  if(chosen_map.indexOf('--') != -1) return ;
  if     (chosen_map=='Flauston West Side'                     ) maptext = westside_maptext             ;
  else if(chosen_map=='West Side Sewer'                        ) maptext = westsidesewer_maptext        ;
  else if(chosen_map=='Deep Sewer'                             ) maptext = westsidesewer2_maptext       ;
  else if(chosen_map=='Westbridge'                             ) maptext = westbridge_maptext           ;
  else if(chosen_map=='Bacigalupi Shipping Warehouse'          ) maptext = wswarehouse_maptext          ;
  else if(chosen_map=='Bacigalupi Shipping Warehouse 2nd Floor') maptext = wswarehouse2_maptext         ;
  else if(chosen_map=='Stewart\'s Sporting Goods'              ) maptext = stewartsportinggoods_maptext ;
  else if(chosen_map=='Noel Edwards University'                ) maptext = university_maptext           ;
  else if(chosen_map=='Alden House 2F'                         ) maptext = alden2f_maptext              ;
  else if(chosen_map=='Alden House B1'                         ) maptext = aldenb1_maptext              ;
  else if(chosen_map=='Alden House B2'                         ) maptext = aldenb2_maptext              ;
  else if(chosen_map=='Alden House B3'                         ) maptext = aldenb3_maptext              ;
  else if(chosen_map=='Parking Garage'                         ) maptext = financialUnderground_maptext ;
  else if(chosen_map=='Financial District'                     ) maptext = financial_maptext            ;
  else if(chosen_map=='The Bateman Tower'                      ) maptext = batemantower_maptext         ;
  else if(chosen_map=='Bateman Tower 2nd Floor'                ) maptext = batemantower2_maptext        ;
  else if(chosen_map=='Bateman Tower 3rd Floor'                ) maptext = batemantower3_maptext        ;
  else if(chosen_map=='Bateman Tower 4th Floor'                ) maptext = batemantower4_maptext        ;
  else if(chosen_map=='Bateman Tower 5th Floor'                ) maptext = batemantower5_maptext        ;
  else if(chosen_map=='Flauston Midtown'                       ) maptext = midtown_maptext              ;
  else if(chosen_map=='Midtown Underground'                    ) maptext = midtownSubway_maptext        ;
  else if(chosen_map=='Riverfront'                             ) maptext = riverfront_maptext           ;
  else if(chosen_map=='Interstate 945'                         ) maptext = highway_maptext              ;
  else if(chosen_map=='Highway Underpass'                      ) maptext = highwayUnderpass_maptext     ;
  else if(chosen_map=='945 South'                              ) maptext = highwaySouth_maptext         ;
  else if(chosen_map=='Colchester'                             ) maptext = colchester_maptext           ;
  else if(chosen_map=='Colchester Underpass'                   ) maptext = colchesterUnderpass_maptext  ;
  else if(chosen_map=='Leather District South'                 ) maptext = leather_maptext              ;
  else if(chosen_map=='Leather District North'                 ) maptext = leatherNorth_maptext         ;
  else if(chosen_map=='Leather District Office Building'       ) maptext = leatherTower_maptext         ;
  else if(chosen_map=='Glass Bay'                              ) maptext = glassBay_maptext             ;
  else if(chosen_map=='Ocean Cave'                             ) maptext = glassBayDungeon_maptext      ;
  else if(chosen_map=='Flauston East Side'                     ) maptext = eastside_maptext             ;
  else if(chosen_map=='Flauston East Side (Part II)'           ) maptext = eastsidehell_textmap         ;
  else if(chosen_map=='Flauston Common'                        ) maptext = common_maptext               ;
  else if(chosen_map=='Flauston Common Underground'            ) maptext = commonSubway_maptext         ;
  else if(chosen_map=='East Side Meat Packing Co.'             ) maptext = meat_maptext                 ;
  else if(chosen_map=='East Side Meat Packing Co. 2nd Floor'   ) maptext = meat2_maptext                ;
  else if(chosen_map=='Mayflower Park'                         ) maptext = mayflowerpark_maptext        ;
  else if(chosen_map=='Long Harbor'                            ) maptext = longharbor_maptext           ;
  else if(chosen_map=='Bacalhau Island'                        ) maptext = bacalhauIsland_maptext       ;
  else if(chosen_map=='Eastside Bay'                           ) maptext = easttower_maptext            ;
  else if(chosen_map=='Below Deck'                             ) maptext = endingboat_maptext           ;
  else if(chosen_map=='Flauston Bay'                           ) maptext = endgame_maptext              ;
  else if(chosen_map=='Under the Ocean'                        ) maptext = endgame2_maptext             ;
  else if(chosen_map=='The Beach'                              ) maptext = endgame3_maptext             ;
  else if(chosen_map=='Victory Valley'                         ) maptext = endgame4_maptext             ;
  else if(chosen_map=='Lonely Stretch of Highway'              ) maptext = endgame5_maptext             ;
  else if(chosen_map=='Peninsula'                              ) maptext = peninsula_maptext            ;
  else if(chosen_map=='Alphabet'                               ) maptext = alphabet_maptext             ;
  cellSize = Math.max(1, parseInt(Get('input_blocksize').value)) ;
  update_settings() ;
  draw_all() ;
}

function draw_all(){
  draw_grid() ;
  context_map.fillStyle = 'rgb(255,255,255)' ;
  context_map.fillRect(0,0,cw,ch) ;
  draw_map(context_map) ;
}
function draw_grid(){
  context_map.fillStyle = 'rgb(225,225,225)' ;
  for(var i=0 ; i<nCol ; i++){
    for(var j=0 ; j<nRow ; j++){
      if((i+j)%2==0) continue ;
      context_map.fillRect(j*cellSize, i*cellSize, cellSize, cellSize) ;
    }
  }
}

function draw_map(context){
  context.font = cellSize + 'px arial' ;
  context.textBaseline = 'middle' ;
  context.textAlign    = 'center' ;
  for(var i=i0 ; i<i1 ; i++){
    for(var j=j0 ; j<j1 ; j++){
      var tile_character = map[i][j] ;
      var color_texture = get_tile_color(tile_character) ;
      if(color_texture==null) continue ;
      context.fillStyle = color_texture[0] ;
      context.fillRect((j-j0)*cellSize, (i-i0)*cellSize, cellSize, cellSize) ;
      
      if(!tile_character.match(/[_?.,:;*~`[\]]/)){
        if(color_texture[1]==false){
          context.fillStyle = "rgb(220,220,220)";
          context.fillText(tile_character, (j-j0+0.5)*cellSize, (i-i0+0.5)*cellSize) ;
        }
      }
    }
  }
}

function get_tile_color(chara){
  if(!chara.match) return ['rgb(0,0,0)',false] ;
  var color = null;
  var rgb = null;
  var texture = false;
  var flux;
  var oil;
  var tileset = defaultTileset ;
  
  if(chara.match(/([hfabpslei$¿])/)){
    if (chara === "¿"){
        chara = "i" ;
    }
    color = "rgb(79,65,0)";
  }
  else if(chara.match(/([A-Za-z])/)){
    color = "rgb(95,0,0)";
  }
  else if(chara === "%"){
    color = "rgb(1,0,79)";
  }
  else if(chara === "!"){
    color = "rgb(0,58,63)";
  }
  else if(chara === "^"){
    color = "rgb(1,1,1)";
  }
  else if(chara === "❄"){
    color = "rgb(99,128,173)";
  }
  else if(chara === "☵"){
    chara = "`";
    color = "rgb(10,15,25)";
  }
  else{
    for(var tile in defaultTileset){
      if(chara===tile){
        if(second_tileset[chara]){
          color = second_tileset[chara].color;
          if(!color){
            rgb = rgb || second_tileset[chara].rgb;
            texture = second_tileset[chara].texture;
            flux = second_tileset[chara].flux;
            oil = second_tileset[chara].oil;
          }
        }
        else{
          color = defaultTileset[chara].color;
          if(!color){
            rgb = rgb || defaultTileset[chara].rgb;
            texture = defaultTileset[chara].texture;
            flux = defaultTileset[chara].flux;
            oil = defaultTileset[chara].oil;
          }
        }
      }
    }
  }

  if(color!==null){
    if(rgb){
      var r = rgb.r;
      var g = rgb.g;
      var b = rgb.b;
      if(texture || flux){
        var darkenBy = 0;
        var m;
        if(texture){
          darkenBy = Math.round(Math.random() * 15) ;
          m = 7;
        }
        if(flux){
          darkenBy = Math.round(Math.random() * 40);
          m = 20;
        }
        if(chara === "#") {
          darkenBy = Math.round(darkenBy * 3);
        }
        r += m - darkenBy;
        g += m - darkenBy;
        b += m - darkenBy;
        if (r < 0) r = 0;
        if (g < 0) t = 0;
        if (b < 0) b = 0;
      }
      if(oil){
        r += Math.round(Math.random() * 30);
        g += Math.round(Math.random() * 30);
        b += Math.round(Math.random() * 30);
      }
      color = "rgb(" + r + "," + g + "," + b + ")";
    }
    return [color,texture] ;
  }
}

function Create(type){ return document.createElement(type) ; }
function Get(id){ return document.getElementById(id) ; }
