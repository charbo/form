function CDynamicSelect(id, divId, childs, dataset) {
    var _this = this;
    this.id = id;
    this.divId = divId;
    this.create = function() {
        document.getElementById(_this.divId).innerHTML = '<select id="' + _this.id + '" class="form-control"></select>';
        var params = '{"name": "' + this.dataset.name + '","parameters": []}';
        $.ajax({
            type: "POST",
            url: this.dataset.url,
            contentType: 'application/json; charset=utf-8',
            data: params,
            success: function(resp){
                // we have the response
                _this.refresh(resp);
            },
            error: function(e){
                console.log('unable to retreive datas ' + e);
            }
        });

    }
    this.childs = childs;
    this.dataset = dataset;
    this.chart = this.create();
    this.refresh = function(dataset) {
        var resp = dataset[0].datas;
        var html = '<option>sélectionner</option>';

        for (index in resp) {
            html += '<option>';
            html += resp[index].key;
            html += '</option>';
        }

        document.getElementById(_this.id).innerHTML = html;
    }

    this.selectedValue = function(event) {
        var e =  document.getElementById(this.id);
        return e.options[e.selectedIndex].value;
    }
}


function CDynamicImage(id, divId, childs, dataset, parameters, opts) {
  CComponent.call(this, id, divId, childs, dataset, parameters, opts);
    this.create = function() {

    }

    this.refresh = function(dataset) {
        var resp = dataset[0].datas;
        var value = resp[0].value;

        var conditions = this.opts['conditions'];
        var css = '';
        for (index in conditions) {
            var condition = conditions[index];
            var test = condition.split('|')[0];
            test = test.replace('${value}', value);
            if (eval(test)) {
                css = condition.split('|')[1];
            }
        }
        var showvalue = this.opts['showvalue'];
        var html = '<div class="row"><div id="' + this.id + '" class="col-md-6 ' + css + '">&nbsp</div>';
        if (showvalue != undefined) {
            html += '<div class="col-md-6">' + value + '</div>';
        }
        html += '</div>';

        document.getElementById(divId).innerHTML = html;
    }

    this.chart = this.create();
}

CDynamicImage.prototype = Object.create(CComponent.prototype);
CDynamicImage.prototype.constructor = CDynamicImage;



function CDynamicText(id, divId, childs, dataset, parameters, opts) {
  CComponent.call(this, id, divId, childs, dataset, parameters, opts);
    this.create = function() {
        if (opts['text'] != undefined) {
            var css = '';
             if (opts['css'] != undefined) {
                css = ' class="' + opts['css'] + '" ';
             }
            document.getElementById(divId).innerHTML = '<p' + css + '>' + opts['text'] + '</p>';
        }
    }

    this.refresh = function(dataset) {
        var resp = dataset[0].datas;
        var value = resp[0].value;

        var css = '';
        if (opts['css'] != undefined) {
            css = ' class="' + opts['css'] + '" ';
        }
        document.getElementById(divId).innerHTML = '<p' + css + '>' + value + '</p>';
    }

    this.chart = this.create();
}

CDynamicText.prototype = Object.create(CComponent.prototype);
CDynamicText.prototype.constructor = CDynamicText;

function initChtml(id) {
  var callServer = function(name, component) {
    var params = extractparameters(component);
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

  var extractparameters = function(component) {
    var params = '{"name": "' + component.dataset.name + '","parameters": [';
    var oParam = new Array();
    for (index in component.parameters) {
        var parameter = component.parameters[index];
        var provider = components['chart' + parameter.provider];
        oParam[oParam.length] = '{"name" : "' + parameter.name + '", "value" : "' + value + '"}';
    }
    params += oParam.join(",");
    params +=']}';


    return params;
};

  var multi = new C3MultiBar('chart'+ id, id, ['img', 'category'], new Dataset('rental', 'http://localhost:9090/datas'), [], new Array());
  callServer('', multi);
}

