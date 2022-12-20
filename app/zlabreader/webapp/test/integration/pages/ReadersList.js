sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zlab.zlabreader',
            componentId: 'ReadersList',
            entitySet: 'Readers'
        },
        CustomPageDefinitions
    );
});