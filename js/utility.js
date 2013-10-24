// JavaScript Document
jQuery(function($){
	$('#getDbStatus').on({
		click:function(){
			$.ajax({
				type:'GET',
				url:'http://localhost:5984/all_dbs',
				success:function(data){
					console.log(data);
				}
				
			});
			return false;
		}
	});
});