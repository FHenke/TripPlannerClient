<div class="topMenu main" id="topMenuBar" >
    <form name="submit" id="form1" methode="post" action="javascript:addPolyline()">
        <div class="topMenu part">
            <div class="topMenu origin topMenuContent" id="origin">
                <head3>Origin</head3><br>
                <input class="inputTextField" type="text" name="origin" value="From" id="origin"><br>
                <input class="inputTextField" type="text" id="date" name="date">
            </div>
            <br>
            <div class="topMenu destination topMenuContent" id="destination">
                <head3>Destination</head3><br>
                <input class="inputTextField" type="text" name="destination" value="To"><br>
                <input class="inputTextField" type="text" id="returnDate" name="returnDate">
            </div>
        </div>
        <div class="topMenu part">
            <div class="topMenu settings topMenuContent" id="settings">
                <head3>Transportation</head3><br>
                <input id="car" type="checkbox" value="car" class="menuCheckbox"><menuText>Car</menuText><br>
                <input id="public_transport" type="checkbox" value="public_transport" class="menuCheckbox"><menuText>Public Transport</menuText><br>
                <input id="bicycle" type="checkbox" value="bicycle" class="menuCheckbox"><menuText>Bicycle</menuText><br>
                <input id="walk" type="checkbox" value="walk" class="menuCheckbox"><menuText>Walk</menuText><br>
                <input id="airplane" type="checkbox" value="airplane" class="menuCheckbox"><menuText>Airplane</menuText>
            </div>
        </div>
        <div class="topMenu part">
            <div class="topMenu settigs topMenuContent" id="settings">
                <head3>Options</head3><br>
                <select class="selectField" name="method" id="method">
                    <option value="GoogleMapsDistance">Google Distance</option>
                    <option value="GoogleMapsDirection">Google Direction</option>
                    <option value="SkyscannerCacheOnly">Skyscanner Cache</option>
                    <option value="All">All Available</option>
                </select><br>
                <select class="selectField" name="departure-arrival" id="departure_arrival">
                    <option value="setDepartureTime">Set Departure Time</option>
                    <option value="setArrivalTime">Set Arrival Time</option>
                </select><br>
                <select class="selectField" name="color" id="color">
                    <option value="googleDirection">One Color For Each Connection</option>
                    <option value="googleDirection">One Color For Each Transportation</option>
                </select><br>
                <select class="selectField" name="example" id="example">
                    <option value="noEx">No Example</option>
                    <option value="ex1">Hannover - Frankfurt</option>
                    <option value="ex2">Paris - Frankfurt</option>
                    <option value="ex3">Peking - Vancouver</option>
                    <option value="ex4">Frankfurt - Sydney</option>
                    <option value="ex5">London - Berlin</option>
                    <option value="ex6">Vancouver - hannover</option>
                    <option value="ex7">Rio - New York</option>
                    <option value="ex8">Banff - Göttingen</option>
                </select><br>
                <input class="inputButton" type="submit" value="Search">
            </div>
        </div>
    </form>
</div>