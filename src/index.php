<?php $title = '91 maps' ;

$g_analytics = false ;
$jquery      = false ;

$maps = array() ;

$maps[] = ['peninsula'            , 'Peninsula'                              , false] ;
$maps[] = ['peninsula2'           , 'Peninsula South'                        , false] ;
$maps[] = ['westbank'             , 'West pastures'                          , false] ;
$maps[] = ['field'                , 'Field'                                  , false] ;
$maps[] = [''                     , ' -- West Side  -- '                     , true ] ;
$maps[] = ['westside'             , 'Flauston West Side'                     , true ] ;
$maps[] = ['westsidesewer'        , 'West Side Sewer'                        , true ] ;
$maps[] = ['westsidesewer2'       , 'Deep Sewer'                             , true ] ;
$maps[] = ['westsidesewerHeader'  , 'Deep Sewer Header'                      , false] ;
$maps[] = ['wswarehouse'          , 'Bacigalupi Shipping Warehouse'          , true ] ;
$maps[] = ['wswarehouse2'         , 'Bacigalupi Shipping Warehouse 2nd Floor', true ] ;
$maps[] = ['wswarehouseHeader'    , 'Bacigalupi Shipping Warehouse Header'   , false] ;
$maps[] = ['stewartsportinggoods' , 'Stewart\'s Sporting Goods'              , true ] ;
$maps[] = ['university'           , 'Noel Edwards University'                , true ] ;
$maps[] = [''                     , ' -- Long Harbor -- '                    , true ] ;
$maps[] = ['mayflowerpark'        , 'Mayflower Park'                         , true ] ;
$maps[] = ['longharbor'           , 'Long Harbor'                            , true ] ;
$maps[] = ['bacalhauIsland'       , 'Bacalhau Island'                        , true ] ;
$maps[] = ['bacalhauIslandHeader' , 'Bacalhau Island header'                 , false] ;
$maps[] = [''                     , ' -- Westbridge -- '                     , true ] ;
$maps[] = ['westbridge'           , 'Westbridge'                             , true ] ;
$maps[] = ['alden0'               , 'Alden House information'                , false] ;
$maps[] = ['alden2f'              , 'Alden House 2F'                         , true ] ;
$maps[] = ['aldenb1'              , 'Alden House B1'                         , true ] ;
$maps[] = ['aldenb2'              , 'Alden House B2'                         , true ] ;
$maps[] = ['aldenb3'              , 'Alden House B3'                         , true ] ;
$maps[] = [''                     , ' -- Downtown / Colchester -- '          , true ] ;
$maps[] = ['midtown'              , 'Flauston Midtown'                       , true ] ;
$maps[] = ['midtownSubway'        , 'Midtown Underground'                    , true ] ;
$maps[] = ['riverfront'           , 'Riverfront'                             , true ] ;
$maps[] = ['highway'              , 'Interstate 945'                         , true ] ;
$maps[] = ['highwayUnderpass'     , 'Highway Underpass'                      , true ] ;
$maps[] = ['colchester'           , 'Colchester'                             , true ] ;
$maps[] = ['colchesterUnderpass'  , 'Colchester Underpass'                   , true ] ;
$maps[] = ['highwaySouth'         , '945 South'                              , true ] ;
$maps[] = [''                     , ' -- Leather District / Glass Bay -- '   , true ] ;
$maps[] = ['leather'              , 'Leather District South'                 , true ] ;
$maps[] = ['leatherNorth'         , 'Leather District North'                 , true ] ;
$maps[] = ['leatherTowerHeader'   , 'Leather District Office Building Header', false] ;
$maps[] = ['leatherTower1'        , 'Leather District Office Building 1'     , true ] ;
$maps[] = ['leatherTower'         , 'Leather District Office Building 2'     , true ] ;
$maps[] = ['glassBay'             , 'Glass Bay'                              , true ] ;
$maps[] = ['glassBayDungeon'      , 'Ocean Cave'                             , true ] ;
$maps[] = ['glassBayDungeonHeader', 'Ocean Cave header'                      , false] ;
$maps[] = [''                     , ' -- East Side / Common -- '             , true ] ;
$maps[] = ['eastside'             , 'Flauston East Side'                     , true ] ;
$maps[] = ['common'               , 'Flauston Common'                        , true ] ;
$maps[] = ['commonSubway'         , 'Flauston Common Underground'            , true ] ;
$maps[] = ['meatHeader'           , 'East Side Meat Packing Co. Header'      , false] ;
$maps[] = ['meat'                 , 'East Side Meat Packing Co.'             , true ] ;
$maps[] = ['meat2'                , 'East Side Meat Packing Co. 2nd Floor'   , true ] ;
$maps[] = ['underpassHeader'      , 'Underpasses'                            , false] ;
$maps[] = [''                     , ' -- Financial district -- '             , true ] ;
$maps[] = ['financial'            , 'Financial District'                     , true ] ;
$maps[] = ['financialUnderground' , 'Parking Garage'                         , true ] ;
$maps[] = ['batemantower0'        , 'The Bateman Tower information'          , false] ;
$maps[] = ['batemantower'         , 'The Bateman Tower'                      , true ] ;
$maps[] = ['batemantower2'        , 'Bateman Tower 2nd Floor'                , true ] ;
$maps[] = ['batemantower3'        , 'Bateman Tower 3rd Floor'                , true ] ;
$maps[] = ['batemantower4'        , 'Bateman Tower 4th Floor'                , true ] ;
$maps[] = ['batemantower5'        , 'Bateman Tower 5th Floor'                , true ] ;
$maps[] = [''                     , ' -- Endgame -- '                        , true ] ;
$maps[] = ['eastsidehell'         , 'Flauston East Side (Part II)'           , true ] ;
$maps[] = ['easttower'            , 'Eastside Bay'                           , true ] ;
$maps[] = ['endingboat'           , 'Below Deck'                             , true ] ;
$maps[] = ['endgame'              , 'Flauston Bay'                           , true ] ;
$maps[] = ['endgame2'             , 'Under the Ocean'                        , true ] ;
$maps[] = ['endgame3'             , 'The Beach'                              , true ] ;
$maps[] = ['endgame4'             , 'Victory Valley'                         , true ] ;
$maps[] = ['endgame5'             , 'Lonely Stretch of Highway'              , true ] ;
$maps[] = ['posterHeader'         , 'Poster Header'                          , false] ;
$maps[] = ['alphabet'             , 'Alphabet'                               , false] ;

$stylesheets = array('style.css') ;
$js_scripts  = array() ;
foreach($maps as $m){
  if($m[0]=='') continue ;
  $js_scripts[] = 'map_texts/' . $m[0] . '.txt' ;
}
$js_scripts[] = 'map_texts/midtownBuilding.txt' ;
$js_scripts[] = 'tilesets.js'  ;
$js_scripts[] = 'bigmap.js' ;
$js_scripts[] = 'functions.js' ;
include_once('project.php') ;
include_once($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
<div class="right">
  <h3>About</h3>
  <p>This page shows the different maps for the excellent RPG <a href="http://startcontinue.com/91/">91</a> (<a href="http://jayisgames.com/review/91.php">Jayisgames review</a>).  I don't own the game or have anything to do with it.  I'm just a fan hacking the maps for your playing pleasure :)</p>
  
  <p>Here is the link to the <a href="FlaustonBigMap.png">big map</a> (huge!)</p> 
  
  <p id="p_form">
  <select id="select_map">
<?php
foreach($maps as $m){
  if($m[2]) echo '    <option name="' , $m[0] , '">' , $m[1] , '</option>' ;
}

?>
  </select>
  Block size: <input type="text" id="input_blocksize" value="10"/>px
  <input type="submit" id="submit_changeMap" value="Change map"/>
  </p>
  <div id="div_debug" class="blurb"></div>
  <div id="map_wrapper" class="blurb"></div>
</div>

<?php foot() ; ?>
