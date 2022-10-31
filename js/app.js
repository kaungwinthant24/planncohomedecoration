// console.log("hey");

$(document).ready(function(){
	// console.log('hi');

	// Start Back To Top
		$('.btn-backtotops').hide();
		$(document).scroll(function(){
			let getscrolltop = $(this).scrollTop();
			console.log(getscrolltop);
			if(getscrolltop >= 400){
				$(".btn-backtotops").fadeIn(1000);
			}else{
				$(".btn-backtotops").fadeOut(1000);				
			}
		});
	// End Back To Top

	// Start Header

		// Start navbar
		
			//for bugger
			$(".navbuttons").click(function(){
				$(this).toggleClass("crossxs");
			});

			//for nav scroll
			$(window).scroll(function(){
				// console.log('hey');

				let getscolltop = $(this).scrollTop();
				// console.log(getscolltop);

				if(getscolltop >= 200){
					$('.navbar').addClass('navmenus');
				}else{
					$('.navbar').removeClass('navmenus');
				}
			});

		// End navbar
	// End Header

	// Start Properties
	$(".propertylists").click(function(){
		//for activeitems
		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");  
		//or
		$(this).addClass("activeitems").siblings().removeClass("activeitems");

		// for filters
		let getattvalue = $(this).attr("data-filter");
		// console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("slide",700);
		}else{
			$(".filters").hide();
			$(".filters").not("."+getattvalue).hide("slide",700);
			$(".filters").filter("."+getattvalue).show("slide",700);
			

		}



	});

	 lightbox.option({
      showImageNumberLabel:false
    });
	// End Properties

	// Start Adv Section

	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);
		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	});
	// End Adv Section

	// Start Footer Section
	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer Section
});