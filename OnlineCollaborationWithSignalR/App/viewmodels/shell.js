define(['durandal/system', 'durandal/plugins/router', 'services/logger'],
    function (system, router, logger) {
        var shell = {
            activate: activate,
            router: router,
            addNewNote: addNewNote
        };
        
        return shell;

        //#region Internal Methods

        function addNewNote(item)
        {
            router.navigateTo(item.hash);
        }

        function activate() {
            return boot();
        }

        function boot() {
            router.mapNav('home');
            log('Hot Towel SPA Loaded!', null, true);
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });