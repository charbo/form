var components = new Array();

function callServerWithDefault(component, defaultValues) {
  var params = extractparametersDefault(component, defaultValues);
  call(component, params);
}

function extractparametersDefault(component, defaultValues) {
  var params = '{"name": "' + component.dataset.name + '","parameters": [';
  var oParam = new Array();
  for (index in defaultValues) {
      oParam[oParam.length] = '{"name" : "' + defaultValues[index].key + '", "value" : "' + defaultValues[index].value + '"}';
  }
  params += oParam.join(",");
  params +=']}';


  return params;
};


function addToDashboard(drag) {
  console.log(drag);
}

function setParent(child, filters) {
  for (var i = 0; i < filters.length; i++) {
    var parent = filters[i].value;
    components['chart'+ parent].childs.push(child);
    components['chart'+ child].parameters.push(new Parameter(filters[i].key, parent));

    const observable = Rx.Observable.fromEvent($('#chart' + parent), 'click');
    observable.subscribe(function (event) {
      console.log("click on rx " + event.currentTarget.id);
      components[event.currentTarget.id].childs.forEach(function(name){console.log("call server for " + name); callServer(components['chart'+ name], event)});
     },
     function (err) {
       console.log('Error: %s', err);
     },
     function () {
       console.log('Completed');
     });
  }
}

function initChtml(drag, request) {
  console.log('initChtml ' + drag.dataset);
  var chart;
  var defaultValues;
  if (drag.filters !== undefined &&  drag.filters.length > 0) {
    defaultValues = request.parameters;
  } else {
    defaultValues = new Array();
  }

  if (drag.type === 'multibar') {
    chart = new C3MultiBar('chart'+ drag.name, drag.name, [], new Dataset(drag.dataset, 'http://localhost:9090/datas'), [], []);
  } else if (drag.type === 'bar') {
    chart = new C3Bar('chart' + drag.name, drag.name, [], new Dataset(drag.dataset, 'http://localhost:9090/datas'), [], []);
  } else if (drag.type === 'line') {
    chart = new C3Line('chart' + drag.name, drag.name, [], new Dataset(drag.dataset, 'http://localhost:9090/datas'), [], []);
  } else if (drag.type === 'donut') {
    chart = new C3Donut('chart' + drag.name, drag.name, [], new Dataset(drag.dataset, 'http://localhost:9090/datas'), [], []);
  }

  if (chart != undefined) {
    callServerWithDefault(chart, defaultValues);
  }
  if (drag.attach) {
    components['chart'+ drag.name] = chart;
    if (drag.filters !== undefined &&  drag.filters.length > 0) {
      setParent(drag.name, drag.filters);
    }
  }

}
