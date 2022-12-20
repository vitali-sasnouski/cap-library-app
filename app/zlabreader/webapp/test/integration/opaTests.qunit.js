sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zlab/zlabreader/test/integration/FirstJourney',
		'zlab/zlabreader/test/integration/pages/ReadersList',
		'zlab/zlabreader/test/integration/pages/ReadersObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReadersList, ReadersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zlab/zlabreader') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReadersList: ReadersList,
					onTheReadersObjectPage: ReadersObjectPage
                }
            },
            opaJourney.run
        );
    }
);