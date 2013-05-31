var vm = {};
define(['services/logger', 'durandal/app', 'durandal/plugins/router'], function (logger)
{
    // service name is route to the Web API controller
    var serviceName = 'api/Breeze';
    // manager is the service gateway and cache holder
    var manager = new breeze.EntityManager(serviceName);
    // define the viewmodel
    vm = {
        notes: ko.observableArray(),
        show: ko.observable(false),
        title: 'My Notes',
        selectedNote: ko.observable(),
        activate: activate        
    };

    function activate()
    {
        return getNotes();
    }

    return vm;
    //#region private functions

    // get Notes asynchronously
    // returning a promise to wait for     
    function getNotes()
    {

        logger.log("querying Notes");

        var query = breeze.EntityQuery.from("Notes");

        return manager
            .executeQuery(query)
            .then(querySucceeded)
            .fail(queryFailed);

        // reload vm.notes with the results 
        function querySucceeded(data)
        {
            logger.log("queried Notes");
            vm.notes(data.results);
            vm.show(true); // show the view
        }
    };

    function queryFailed(error)
    {
        logger.log("Query failed: " + error.message);
    }
});

var sig = $.connection.collaboratorHub;
$.connection.hub.start();

$(document).on('keyup', '.note-text', null, function ()
{
    var note = ko.dataFor(this);
    vm.selectedNote = note;
    sig.server.patch(this.value);
});

sig.client.patch = function (newText)
{
    var dmp = new diff_match_patch();
    dmp.Match_Distance = 1000;
    dmp.Match_Threshold = 0.5;
    dmp.Patch_DeleteThreshold = 0.5;
    var source = vm.notes()[0].Text();
    var patches = dmp.patch_make(source, newText);
    var dest = "";
    var results = dmp.patch_apply(patches, source);
    vm.notes()[0].Text(results[0]);
}
