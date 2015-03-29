var app = new Object();

app.init = function() {
	/** Init Routes **/
	this.loadRoute();
	this.routeListener();
}

app.getTemplate = function( path, element ) {
	//Get view template and update view based on element passed in
	$.ajax( { url: path } ).done( function( response ) {
		$( element ).html( response );
	});	
}

/** Routing **/

app.routes = [];

app.loadRoute = function() {
	if( window.location.hash ) {
		app.findRoute();
	}
	else {
    	var routeObj = app.routes[ 0 ];
    	app.getTemplate( routeObj.template, '.content' );
	}
}

app.routeListener = function() {
	//Check when hash changes and update view
	window.onhashchange = function () {
		app.findRoute();
	}	
}

app.findRoute = function() {
	var routeName = window.location.hash.split('#')[1];
    for( x in app.routes ) {
    	var routeObj = app.routes[ x ];
    	if( routeObj.route === routeName ) {
    		app.getTemplate( routeObj.template, '.content' );
    	}
    }	
}

/** End Routing **/