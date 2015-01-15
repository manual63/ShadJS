var app = new Object();

app.init = function() {
	/** Init Routes **/
	this.routeListener();
}

app.getTemplate = function( path, element ) {
	$.ajax( { url: path } ).done( function( response ) {
		$( element ).html( response );
	});	
}

app.routes = [];

app.routeListener = function() {
	window.onhashchange = function () {
		var route = window.location.hash.split('#')[1];
	    for( x in app.routes ) {
	    	if( app.routes[ x ].route === route ) {
	    		app.getTemplate( app.routes[ x ].template, '.content' );
	    	}
	    }
	}	
}