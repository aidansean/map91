from project_module import project_object, image_object, link_object, challenge_object

p = project_object('map91', '91 map')
p.domain = 'http://www.aidansean.com/'
p.path = 'map91'
p.preview_image_ = image_object('http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 408, 287)
p.folder_name = 'aidansean'
p.github_repo_name = 'map91'
p.mathjax = True
p.links.append(link_object(p.domain, '91map/', 'Live page'))
p.links.append(link_object('http://jayisgames.com/', 'review/91.php', 'Jayisgames review'))
p.links.append(link_object('http://startcontinue.com/', '91/', 'Play 91 online'))
p.introduction = 'I played the game 91 and wanted to create a map of the world.  What started out as a simple map to help keep track of the regions soon turned into a larger project which resulted in an A0 sized poster being produced.  The creator of the game got in touch and at the time of writing the first poster has been printed and more will follow.  The creator is going to publish and sell these posters online.'
p.overview = '''The game 91 is a tile based canvas game which is written entirely in Javascript (served up by PHP via AJAX requests).  The game itself has a "fog" which means that only regions in a line of sight are visible.  Given the way the game is organised means that in principle it should be easy to create a map.  I adapted the code to make maps of each region, and then created a patchwork of all these small maps to create a larger map.'''

p.challenges.append(challenge_object('The code had to be reverse engineered to obtain all the maps.', 'One of the most fun parts of this project was reverse engineering how the AJAX requests were handled and how the maps were parsed.  Fortunately it was relatively straightforward to do.', 'Resolved.'))

p.challenges.append(challenge_object('Small maps had to be combined with different drawing styles.', 'To make the large map I had to combined many smaller maps.  There\'s no "cheap" way to do this, so I created an object that contained the smaller maps in a larger two dimensional array where each cell has its own drawing style flag, allowing non-trivial overlap of different drawing styles.', 'Resolved.'))

p.challenges.append(challenge_object('A poster of very large dimensions needed to be created.', 'There\'s no easy way to manage an image of the size needed to make a large poster.  I have made large posters before (for example, in the <a href="http://aidansean.com/projects/?p=235">Marble Hornets project</a>) so I was prepared for many of the problems.  The sides of the map had to have relative sizes of \(\sqrt(2)\), which fortunately was relatively easy (especially when compared to the <a href="">Citadel project</a>.  In the end I opted to have a large <tt>.png</tt> file at \(\sim 500 ~\mathrm{dpi}\) giving very fine print quality.  The resulting file is just under 20 MB in size, which is rather impressive given its physical size.', 'Resolved.'))
