sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zlab/zlabbooking/test/integration/FirstJourney',
		'zlab/zlabbooking/test/integration/pages/BookingList',
		'zlab/zlabbooking/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, BookingList, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zlab/zlabbooking') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookingList: BookingList,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);