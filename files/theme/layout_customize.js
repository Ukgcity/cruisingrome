/* Added For the Custom Mobile Menu */
		(function(jQuery) {
		
			
		
			jQuery.noConflict();        
			$ = jQuery; 
			DirectLi = $("#navigation > ul >li");
			DirectLi.each(function(i){
				mine = $(this);
				if ($(this).find(">a").length) {
						current_a = $(this).find(">a"); 
						ID = ""; 
						the_class = ""; 
						if (current_a.parent().attr("id") !== undefined) {
							ID = (current_a.parent().attr("id").indexOf("active") > -1) ? "  - Active " : "";
						}
						if (ID != "") {the_class=" class='active' ";}
						new_menu_item = $("<li " + the_class + "><a href='"+current_a.attr("href")+"'>"+current_a.text()+"</a></li>");
						$(".my_custom_menu").append(new_menu_item);
				}
				if ($(this).find(">div>ul>li").length) {
					SubLi = $(this).find(">div>ul>li"); 
					new_menu_item.append("<ul/>");
					SubLi.each(function(i2){
						if ($(this).find(">a")) {
							current_a2 = $(this).find(">a"); 
							if(current_a2.text() != ""){
								new_sub_item = $("<li><a href='"+current_a2.attr("href")+"'>"+current_a2.text()+"</a></li>");
								new_menu_item.find("ul").append(new_sub_item);
							}
						}
						
						
						if ($(this).find(">div>ul>li").length) {
						
							SubLi2 = $(this).find(">div>ul>li"); 
							new_sub_item.append("<ul/>");
							SubLi2.each(function(i3){
								if ($(this).find(">a")) {
									current_a3 = $(this).find(">a"); 
									if(current_a3.text() != ""){
										new_sub_item_2 = $("<li><a href='"+current_a3.attr("href")+"'>"+current_a3.text()+"</a></li>");
										new_sub_item.find("ul").append(new_sub_item_2);
									}
								}
							}); 
						}
				
						
					}); 
				}
			}); 
			/*
			Commented at 8/3/2013
			======================
			$(".my_custom_menu a").each(function(i){
				if ($(this).parent().find("ul").length>0) {
					$(this).click(function(e){
						e.preventDefault();
						$(".my_custom_menu ul").not($(this).parent().find("ul")).slideUp(100);
						$(this).parent().find("ul").slideDown(200);
					});
				}
			});
			*/
			
			/* Added For the Table / Div Responsive */

			function replaceTable(){

					window_width = parseInt($(window).width()); 
					if (window_width <= 768) {
						if ( $("div.wsite-multicol-table-wrap > table.wsite-multicol-table").length > 0 ) {
							
							mine = $("div.wsite-multicol-table-wrap > table.wsite-multicol-table");
							
							mine.each(function(i){
								
								new_div = $("<div id='wsite-multicol-table_"+i+"' class='wsite-multicol-table'></div>"); 
							
								$(this).after(new_div);
							
								$(this).find("td").each(function(){
									contents = $(this).html(); 
									new_div.append ("<div class='wsite-multicol-col'>"+contents+"</div>");
								}); 
								$(this).remove();	
								
							});
							
							
						}
					}
					else {

						if ( $("div.wsite-multicol-table-wrap > div.wsite-multicol-table").length > 0 ) {
							
							mine = $("div.wsite-multicol-table-wrap > div.wsite-multicol-table");
							
							mine.each(function(i)	{
								
								var my_index = i; 
								
								current_wrapper = $(this); 
								
								var new_table  = $("<table id='new_table_"+my_index+"'></table>"); 
								
								current_wrapper.after(new_table);
								
								$("#new_table_"+i).append("<tbody class='wsite-multicol-tbody'></tbody>"); 
								
								$("#new_table_"+i).find("tbody").append("<tr class='wsite-multicol-tr'></tr>"); 
								
								$(this).find(">div").each(function(){
									contents = $(this).html(); 
									if (my_index == 1)	{ $("#new_table_" + my_index).find("tr").append ("<td class='wsite-multicol-col' style='width:50%;padding:0 15px' >"+contents+"</td>");}
									else 				{ $("#new_table_" + my_index).find("tr").append ("<td class='wsite-multicol-col' style='width:25%;padding:0 15px' >"+contents+"</td>");	 }
								}); 
								
								$("#new_table_"+i).after("<div style='clear:both'></div>") ; 
								
								current_wrapper.remove(); 
							}); 
						}
					}
					
				}
				$(window).resize(function(){replaceTable();});
				replaceTable(); 
			
		})(jQuery);
		/* End of the Custom Code For the Menu */