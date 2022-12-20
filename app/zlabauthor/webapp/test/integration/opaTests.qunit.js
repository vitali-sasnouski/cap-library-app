sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zlab/zlabauthor/test/integration/FirstJourney',
		'zlab/zlabauthor/test/integration/pages/AuthorsList',
		'zlab/zlabauthor/test/integration/pages/AuthorsObjectPage',
		'zlab/zlabauthor/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zlab/zlabauthor') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);