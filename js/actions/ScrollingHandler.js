var Content = require('../components/Content.react');

var section_imgs = [],
	section_height = 700,   // Number: each section height in term of px
	pixel_per_frame, 		// Number: term of how many pixel height for each frame. It is defined as section_height/number_of_frames_per_section
	current_section,
	leading_zero;
section_imgs[0] = [];

var playAnimation = function(section, top, _c) {
	current_section = section;
	pixel_per_frame = section_height / section_imgs[current_section].length;	
	var frame_play = parseInt((top % (section_imgs[current_section].length * pixel_per_frame))/pixel_per_frame);
	console.log(frame_play);
	if(frame_play >= 0){
		var ctx = _c.getContext("2d");

		// retrieve frame size
		var frame_width = _c.width, 
			frame_height = _c.width,
			offset_left = 0, 
			offset_top = 0;

		if(_c.width >= 500){
			frame_width = 500;
			frame_height = 500;
			offset_left = (_c.width - frame_width) / 2;
			console.log(offset_left + " " + _c.width);
		}

		// playing frame
		ctx.clearRect ( 0 , 0 , _c.width, _c.height );
		ctx.drawImage(section_imgs[current_section][frame_play],offset_left,offset_top,frame_width,frame_height);
	}
};

var ScrollingHandler = {
	_event: function(top) {
		var _c = Content.getAnimator();
		
		if(top <= 0) {
			var ctx = _c.getContext("2d");
			ctx.clearRect ( 0 , 0 , _c.width, _c.height );
		}else if(top > 0 && top < section_height) {
			// section one
			playAnimation(0 ,top, _c);
		}else if(top > (section_height) && top < (section_height*2)) {
			playAnimation(1 ,top, _c);
		}
		
	},
	initial: function() {
		// load image
		// section 1 image
		for (var i = 0; i < 36; i++) {
			leading_zero = "000000" + i;
			leading_zero = leading_zero.substr(leading_zero.length - 2);

			section_imgs[0][i] = new Image();
			section_imgs[0][i].src = "frames/obj1/名称未設定%20100"+leading_zero+".png";
		};

		// section 2 image
		section_imgs[1] = [];
		for (var i = 0; i < 46; i++) {
			leading_zero = "000000" + (i + 47);
			leading_zero = leading_zero.substr(leading_zero.length - 2);

			section_imgs[1][i] = new Image();
			section_imgs[1][i].src = "frames/obj1/名称未設定%20100"+leading_zero+".png";
		};

		// initial text
		// var _c = Content.getAnimator();
		// ctx = _c.getContext('2d');
		// ctx.textAlign='center';
		// ctx.font='30px Arial';
		// ctx.fillText('<Flux> playground', _c.width/2,_c.height/2);

	}
};



module.exports = ScrollingHandler;