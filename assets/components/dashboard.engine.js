function call(component, params) {
  $.ajax({
    type: "POST",
    url: component.dataset.url,
    contentType: 'application/json; charset=utf-8',
    data: params,
    success: function(resp){
        // we have the response
         component.refresh(resp);
     },
    error: function(e){
      console.log('unable to retreive datas ' + e);
    }
  });
}

function callServer(component, event) {
  var params = extractparameters(component, event);
  call(component, params);
}


function extractparameters(component, event) {
  console.log('extractparameters: %s', component.parameters);
  var params = '{"name": "' + component.dataset.name + '","parameters": [';
  var oParam = new Array();
  for (index in component.parameters) {
      var parameter = component.parameters[index];
      var provider = components['chart' + parameter.provider];
      var value = provider.selectedValue(event);
      oParam[oParam.length] = '{"name" : "' + parameter.name + '", "value" : "' + value + '"}';
  }
  params += oParam.join(",");
  params +=']}';


  return params;
};



