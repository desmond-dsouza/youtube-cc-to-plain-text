/*  ******************************************* 

	I picked this from GitHub somewhere, don't recall source

	Node install youtube-captions-scraper (on GitHub)
	Edit this file to enter your YouTube video id
	RUN ON COMMAND LINE WITH OUTPUT REDIRECTION

	node this_file.js > your_output_file.txt
	
	******************************************* */

var getSubtitles =
    require('youtube-captions-scraper').getSubtitles;

getSubtitles({ videoID: '_qWC-wRhdtU' }).then(function (captions) {
    console.log(JSON.stringify(captions));
    });


