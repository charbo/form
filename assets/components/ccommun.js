function Dataset(name, url) {
    this.name = name;
    this.url = url;
}

function Parameter(name, provider) {
    this.name = name;
    this.provider = provider;
}

function CComponent(id, divId, childs, dataset, parameters, opts) {
    this.id = id;
    this.divId = divId;
    this.childs = childs;
    this.dataset = dataset;
    this.parameters = parameters;
    this.opts = opts;
}
