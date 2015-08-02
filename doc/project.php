<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/map91" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=91map" ;
$project = new project_object("91map", "91 map", "https://github.com/aidansean/map91", "http://aidansean.com/projects/?tag=91map", "91map/images/project.jpg", "91map/images/project_bw.jpg", "I played the game 91 and wanted to create a map of the world.  What started out as a simple map to help keep track of the regions soon turned into a larger project which resulted in an A0 sized poster being produced.  The creator of the game got in touch and at the time of writing the first poster has been printed and more will follow.  The creator is going to publish and sell these posters online.", "Fiction,Poster", "canvas,CSS,HTML,JavaScript") ;
?>