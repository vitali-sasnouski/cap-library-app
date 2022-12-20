sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zlab/zlabbook/test/integration/FirstJourney',
		'zlab/zlabbook/test/integration/pages/BooksList',
		'zlab/zlabbook/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zlab/zlabbook') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);