// multiple ajax requests using promises in jquery

var promises = [];

for (var i = someArray.length - 1; i >= 0; i--) {

    var promise = $.ajax({url:"/someURL?some_parameter=" + someArray[i].parameter, type:"get"})
    .done(function(response){
        viewModel.data.push(response.data);
        return response;
      }).fail(function(response){
        console.log("Error", response);
      });
      promises.push(promise);
  };
};


$.when.apply($, promises).done(function(){

    for(d in viewModel.data){
        var promiseData = viewModel.statistics[a];
        // do something after gathering the new data
    };

});
