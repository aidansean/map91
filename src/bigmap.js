function bigmap_object(){
  this.cells = [[['?','empty']]] ;
  // i for row
  // j for column
  this.i0 = 0 ;
  this.j0 = 0 ;
  
  this.smallmaps = [] ;
  
  this.margin_left   = 10 ;
  this.margin_right  = 10 ;
  this.margin_top    = 10 ;
  this.margin_bottom = 10 ;
  
  this.add_smallmap = function(smallmaptext, iIn, jIn){
    var smallmap = smallmaptext.map ;
    
    // Fill in the gaps in the small map
    var rowSize = 1 ;
    for(var i=0 ; i<smallmap.length ; ++i){
      if(smallmap[i].length>rowSize) rowSize = smallmap[i].length ;
    }
    for(var i=0 ; i<smallmap.length ; ++i){
      for(var j=smallmap[i].length ; j<rowSize ; ++j){
        smallmap[i] += smallmaptext.properties.fillerTile ;
      }
    }
  
    // First we need to make space
    // So change the number of rows
    var iMin = iIn ;
    var iMax = iIn + smallmap.length ;
    var jMin = jIn ;
    var jMax = jIn + smallmap[0].length ;
    var di = iMin-this.i0 ;
    if(di<0){
      var rows = this.make_nrows(-di) ;
      this.cells.splice(0, 0, rows) ;
    }
    di = iMax - this.cells.length ;
    if(di>0){
      for(var i=0 ; i<di ; ++i){
        var row = this.make_row() ;
        this.cells.push(row) ;
      }
    }
    // Then adjust the columns
    var dj = Math.min(0,jMin-this.j0) ;
    this.extend_rows(dj) ;
    dj = Math.max(0,jMax-this.cells[0].length) ;
    this.extend_rows(dj) ;
    
    // Now things are setup I can add the smallmap
    this.i0 = Math.min(this.i0, iIn) ;
    this.j0 = Math.min(this.j0, jIn) ;
    var iStart = smallmaptext.properties.top ;
    var iEnd   = smallmap.length-smallmaptext.properties.bottom ;
    var jStart = smallmaptext.properties.left ;
    var jEnd   = smallmap[0].length-smallmaptext.properties.right ;
    
    for(var i=iStart ; i<iEnd ; ++i){
      for(var j=jStart ; j<jEnd ; ++j){
        this.cells[iIn-this.i0+i][jIn-this.j0+j] = [smallmap[i][j],smallmaptext.properties.tileset] ;
      }
    }
  }
  
  this.draw_xy = function(context, x, y){
    i0 = 0 ;
    i1 = this.cells.length ;
    j0 = 0 
    j1 = this.cells[0].length ;
    
    context.font = cellSize + 'px arial' ;
    context.textBaseline = 'middle' ;
    context.textAlign    = 'center' ;
    for(var i=i0 ; i<this.cells.length ; i++){
      for(var j=j0 ; j<this.cells[i].length ; j++){
        var tile_character = this.cells[i][j][0] ;
        if(!tile_character || !tile_character.match) alert(i+','+j+ ' ' + this.cells[i][j]+ ' ' + this.cells[i][j][0] + ' ' + tile_character) ;
        var ts_name = (this.cells[i][j][1]=='darkcity') ? 'darkcitybig' : this.cells[i][j][1] ;
        second_tileset = tilesets[ts_name] ;
        if(mode=='fast'){
          for(var k=0 ; k<color_chars.length ; k++){
            if(tile_character==color_chars[k]){
              context.fillStyle = colors[tile_character] ;
              context.fillRect((j-j0)*cellSize, (i-i0)*cellSize, cellSize, cellSize) ;
              context.fillStyle = "rgb(220,220,220)";
              context.fillText(tile_character, x+(j-j0+0.5)*cellSize, y+(i-i0+0.5)*cellSize) ;
              break ;
            }
          }
        }
        else if(mode=='slow'){
          var color_texture = get_tile_color(tile_character) ;
          if(color_texture==null) continue ;
          context.fillStyle = color_texture[0] ;
          context.fillRect((x+j-j0)*cellSize, (y+i-i0)*cellSize, cellSize, cellSize) ;
          
          if(!tile_character.match(/[_?.,:;*~`[\]]/)){
            if(color_texture[1]==false){
              context.fillStyle = "rgb(220,220,220)";
              context.fillText(tile_character, (x+j-j0+0.5)*cellSize, (y+i-i0+0.5)*cellSize) ;
            }
          }
        }
      }
    }
  }
  
  this.draw = function(context){
    i0 = 0 ;
    i1 = this.cells.length ;
    j0 = 0 
    j1 = this.cells[0].length ;
    
    var nRow = i1-i0 ;
    var nCol = j1-j0 ;
    cw = cellSize*nCol ;
    ch = cellSize*nRow ;
    canvas_map.style.width  = cw ;
    canvas_map.style.height = ch ;
    canvas_map.width  = cw ;
    canvas_map.height = ch ;
    
    context.fillStyle = 'rgb(0,55,111)' ; // city tileset water
    context.fillRect(0, 0, cw, ch) ;
    
    context.font = cellSize + 'px arial' ;
    context.textBaseline = 'middle' ;
    context.textAlign    = 'center' ;
    for(var i=i0 ; i<this.cells.length ; i++){
      for(var j=j0 ; j<this.cells[i].length ; j++){
        var tile_character = this.cells[i][j][0] ;
        if(!tile_character || !tile_character.match) alert(i+','+j+ ' ' + this.cells[i][j]+ ' ' + this.cells[i][j][0] + ' ' + tile_character) ;
        var ts_name = (this.cells[i][j][1]=='darkcity') ? 'darkcitybig' : this.cells[i][j][1] ;
        second_tileset = tilesets[ts_name] ;
        if(mode=='fast'){
          for(var k=0 ; k<color_chars.length ; k++){
            if(tile_character==color_chars[k]){
              context.fillStyle = colors[tile_character] ;
              context.fillRect((j-j0)*cellSize, (i-i0)*cellSize, cellSize, cellSize) ;
              context.fillStyle = "rgb(220,220,220)";
              context.fillText(tile_character, (j-j0+0.5)*cellSize, (i-i0+0.5)*cellSize) ;
              break ;
            }
          }
        }
        else if(mode=='slow'){
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
  }
  this.make_row = function(){
    var row = [] ;
    for(var i=0 ; i<this.cells[0].length ; ++i){
      row.push(['?','empty']) ;
    }
    return row ;
  }
  this.make_nrows = function(n){
    var rows = [] ;
    for(var i=0 ; i<n ; ++i){
      rows.push(this.make_row()) ;
    }
    return rows ;
  }
  this.extend_rows = function(n){
    for(var i=0 ; i<this.cells.length ; ++i){
      if(n<0){
        for(var j=0 ; j<-n ; ++j){
          this.cells[i].splice(0,0,['?','empty']) ;
        }
      }
      else{
        for(var j=0 ; j<n ; ++j){
          this.cells[i].push(['?','empty']) ;
        }
      }
    }
  }
}

var bigmap_mainland = new bigmap_object() ;

bigmap_mainland.add_smallmap(westbank_maptext            ,   0,   0) ;
bigmap_mainland.add_smallmap(peninsula_maptext           , 328, 240) ;
bigmap_mainland.add_smallmap(peninsula2_maptext          , 612, 240) ;

bigmap_mainland.add_smallmap(longharbor_maptext          ,   0,  68) ;
bigmap_mainland.add_smallmap(mayflowerpark_maptext       ,  52, 114) ;
bigmap_mainland.add_smallmap(westbridge_maptext          , 135,   0) ;
bigmap_mainland.add_smallmap(westside_maptext            , 120, 114) ;
bigmap_mainland.add_smallmap(university_maptext          , 198, 114) ;
bigmap_mainland.add_smallmap(stewartsportinggoods_maptext, 141, 110) ;
bigmap_mainland.add_smallmap(midtown_maptext             , 112, 197) ;
bigmap_mainland.add_smallmap(common_maptext              , 103, 430) ;
bigmap_mainland.add_smallmap(midtownBuilding_maptext     , 112, 197) ;
bigmap_mainland.add_smallmap(leatherNorth_maptext        ,  44, 197) ;
bigmap_mainland.add_smallmap(leather_maptext             ,  80, 197) ;

bigmap_mainland.add_smallmap(highway_maptext             , 240, 332) ;
bigmap_mainland.add_smallmap(riverfront_maptext          , 286, 235) ;
bigmap_mainland.add_smallmap(colchester_maptext          , 328, 332) ;
bigmap_mainland.add_smallmap(highwaySouth_maptext        , 462, 392) ;
bigmap_mainland.add_smallmap(endgame5_maptext            , 521, 347) ;
bigmap_mainland.add_smallmap(endgame4_maptext            , 553, 448) ;
bigmap_mainland.add_smallmap(endgame3_maptext            , 515, 588) ;
bigmap_mainland.add_smallmap(glassBay_maptext            ,  38, 372) ;
bigmap_mainland.add_smallmap(financial_maptext           , 231, 496) ;
bigmap_mainland.add_smallmap(eastside_maptext            , 145, 626) ;
bigmap_mainland.add_smallmap(easttower_maptext           , 171, 720) ;

bigmap_mainland.add_smallmap(field_maptext               , 501, 363) ;

//bigmap_mainland.add_smallmap(glassBayDungeon_maptext     ,  38, 530) ;

//bigmap_mainland.add_smallmap(bacalhauIsland_maptext      , 490,   0) ;

//bigmap_mainland.add_smallmap(highwayUnderpass_maptext    , 350, 520) ;
//bigmap_mainland.add_smallmap(colchesterUnderpass_maptext , 360, 520) ;
//bigmap_mainland.add_smallmap(financialUnderground_maptext, 350, 560) ;

//bigmap_mainland.add_smallmap(leatherTower_maptext        ,   0, 360) ;

//bigmap_mainland.add_smallmap(meat_maptext                ,  95, 650) ;
//bigmap_mainland.add_smallmap(meat2_maptext               ,  50, 650) ;

//bigmap_mainland.add_smallmap(wswarehouse_maptext         , 235,  75) ;
//bigmap_mainland.add_smallmap(wswarehouse2_maptext        , 235,  40) ;

//bigmap_mainland.add_smallmap(alden2f_maptext             , 245,   5) ;
//bigmap_mainland.add_smallmap(aldenb1_maptext             , 275,   0) ;
//bigmap_mainland.add_smallmap(aldenb2_maptext             , 355,   0) ;
//bigmap_mainland.add_smallmap(aldenb3_maptext             , 420,   0) ;

//bigmap_mainland.add_smallmap(westsidesewer_maptext       , 375, 135) ;
//bigmap_mainland.add_smallmap(westsidesewer2_maptext      , 375, 220) ;

//bigmap_mainland.add_smallmap(batemantower_maptext        , 273, 693) ;
//bigmap_mainland.add_smallmap(batemantower2_maptext       , 273, 743) ;
//bigmap_mainland.add_smallmap(batemantower3_maptext       , 273, 793) ;
//bigmap_mainland.add_smallmap(batemantower4_maptext       , 273, 843) ;
//bigmap_mainland.add_smallmap(batemantower5_maptext       , 273, 893) ;

//bigmap_mainland.add_smallmap(midtownSubway_maptext       , 400, 530) ;
//bigmap_mainland.add_smallmap(commonSubway_maptext        , 403, 721) ;

//bigmap_mainland.add_smallmap(endingboat_maptext          , 186, 880) ;
//bigmap_mainland.add_smallmap(endgame_maptext             , 110, 750) ;
//bigmap_mainland.add_smallmap(endgame2_maptext            ,  30, 750) ;




var bigmap_batementower = new bigmap_object() ;
bigmap_batementower.add_smallmap(batemantower0_maptext,  0,   0) ;
bigmap_batementower.add_smallmap(batemantower_maptext ,  0,  49) ;
bigmap_batementower.add_smallmap(batemantower2_maptext,  0,  98) ;
bigmap_batementower.add_smallmap(batemantower3_maptext, 49,   0) ;
bigmap_batementower.add_smallmap(batemantower4_maptext, 49,  49) ;
bigmap_batementower.add_smallmap(batemantower5_maptext, 49,  98) ;

var bigmap_glassBayDungeon = new bigmap_object() ;
bigmap_glassBayDungeon.add_smallmap(glassBayDungeonHeader_maptext,  0,   0) ;
bigmap_glassBayDungeon.add_smallmap(glassBayDungeon_maptext      ,  9,   0) ;

var bigmap_aldenHouse = new bigmap_object() ;
bigmap_aldenHouse.add_smallmap(alden0_maptext ,    0,   0) ;
bigmap_aldenHouse.add_smallmap(aldenb1_maptext,   33,   0) ;
bigmap_aldenHouse.add_smallmap(aldenb2_maptext,  108,   0) ;
bigmap_aldenHouse.add_smallmap(aldenb3_maptext,  170,   0) ;

var bigmap_bacalhauIsland = new bigmap_object() ;
//bigmap_bacalhauIsland.add_smallmap(bacalhauIslandHeader_maptext , 0,   0) ;
bigmap_bacalhauIsland.add_smallmap(bacalhauIsland_maptext       , 9,   0) ;

var bigmap_subway = new bigmap_object() ;
bigmap_subway.add_smallmap(midtownSubway_maptext, 0,   0) ;
bigmap_subway.add_smallmap(commonSubway_maptext , 0, 191) ;

var bigmap_westsidesewer = new bigmap_object() ;
bigmap_westsidesewer.add_smallmap(westsidesewerHeader_maptext,  0, 0) ;
bigmap_westsidesewer.add_smallmap(westsidesewer_maptext      ,  9, 0) ;
bigmap_westsidesewer.add_smallmap(westsidesewer2_maptext     , 59, 0) ;

var bigmap_wswarehouse = new bigmap_object() ;
bigmap_wswarehouse.add_smallmap(wswarehouseHeader_maptext,  0, 0) ;
bigmap_wswarehouse.add_smallmap(wswarehouse_maptext      , 23, 0) ;
bigmap_wswarehouse.add_smallmap(wswarehouse2_maptext     , 54, 0) ;

var bigmap_leatherTower = new bigmap_object() ;
bigmap_leatherTower.add_smallmap(leatherTowerHeader_maptext,  0, 0) ;
bigmap_leatherTower.add_smallmap(leatherTower1_maptext, 30, 0) ;
bigmap_leatherTower.add_smallmap(leatherTower_maptext , 57, 0) ;

var bigmap_meat = new bigmap_object() ;
bigmap_meat.add_smallmap(meatHeader_maptext,  0, 0) ;
bigmap_meat.add_smallmap(meat_maptext      , 14, 0) ;
bigmap_meat.add_smallmap(meat2_maptext     , 55, 0) ;

var bigmap_underpass = new bigmap_object() ;
bigmap_underpass.add_smallmap(underpassHeader_maptext    ,  0, 0) ;
bigmap_underpass.add_smallmap(highwayUnderpass_maptext   ,  7, 0) ;
bigmap_underpass.add_smallmap(colchesterUnderpass_maptext, 11, 0) ;

var bigmap_endgame = new bigmap_object() ;
bigmap_endgame.add_smallmap(eastsidehell_textmap,   4,   4) ;
bigmap_endgame.add_smallmap(endingboat_maptext  ,   9, 104) ;
bigmap_endgame.add_smallmap(endgame_maptext     ,  96, 102) ;
bigmap_endgame.add_smallmap(endgame2_maptext    ,   9, 134) ;

var bigmap_parking = new bigmap_object() ;
bigmap_parking.add_smallmap(financialUnderground_maptext, 0, 0) ;

var bigmap_posterHeader = new bigmap_object() ;
bigmap_posterHeader.add_smallmap(posterHeader_maptext, 0, 0) ;
