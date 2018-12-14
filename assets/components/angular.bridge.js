var components = new Array();


function callServerWithDefault(component, defaultValues) {
  var params = extractparametersDefault(component, defaultValues);
  call(component, params);
}

function extractparametersDefault(component, defaultValues) {
  var params = '{"name": "' + component.dataset.name + '","parameters": [';
  var oParam = new Array();
  for (index in component.parameters) {
      var parameter = component.parameters[index];
      var value = defaultValues[parameter.provider];
      oParam[oParam.length] = '{"name" : "' + parameter.name + '", "value" : "' + value + '"}';
  }
  params += oParam.join(",");
  params +=']}';


  return params;
};

function initChtml(id, dataset, type) {
  var chart;
  var defaultValues = new Array();

  if (type === 'multibar') {
    chart = new C3MultiBar('chart'+ id, id, ['categoryclone'], new Dataset(dataset, 'http://localhost:9090/datas'), [], new Array());
    components['chart'+ id] = chart;
    const observablemulti = Rx.Observable.fromEvent($('#chart' + id), 'click');
    observablemulti.subscribe(function (event) {
      console.log("click on rx " + chart);
      components[event.currentTarget.id].childs.forEach(function(name){console.log("call server for " + name); callServer(components['chart'+ name], event)});
     },
     function (err) {
       console.log('Error: %s', err);
     },
     function () {
       console.log('Completed');
     });


  } else if (type === 'bar') {
    chart = new C3Bar('chart' + id, id, [], new Dataset(dataset, 'http://localhost:9090/datas'), [new Parameter('month', 'multiclone')], new Array());
    components['chart'+ id] = chart;
    defaultValues['multiclone'] = 'June';
  }

  if (chart != undefined) {
    callServerWithDefault(chart, defaultValues);
  }
}
