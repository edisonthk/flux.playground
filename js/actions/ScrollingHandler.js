var Content = require('../components/Content.react');

var section_imgs = [],
	section_height = 700,   // Number: each section height in term of px
	pixel_per_frame, 		// Number: term of how many pixel height for each frame. It is defined as section_height/number_of_frames_per_section
	current_section,
	leading_zero;
section_imgs[0] = [];

var ScrollingHandler = {
	_event: function(top) {
		var _c = Content.getAnimator();
		
		if(top <= 0){
			var ctx = _c.getContext("2d");
			ctx.clearRect ( 0 , 0 , _c.width, _c.height );
		}else if(top > 0 && top < section_height){
			// 1st method
			// when section one
			current_section = 0;
			pixel_per_frame = section_height / section_imgs[current_section].length;	
			var frame_play = parseInt((top % (section_imgs[current_section].length * pixel_per_frame))/pixel_per_frame);
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
	}
};



module.exports = ScrollingHandler;