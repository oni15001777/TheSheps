function getAPIData()
{
    var xhttp = new XMLHttpRequest();

    var searchValue = document.getElementById('search-text').value;

    console.log(searchValue);

    var url = 'https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=' + searchValue;

    console.log(url);

    xhttp.open('GET', url);

    xhttp.send();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {

            data = JSON.parse(this.responseText);

            console.log(data);

            document.getElementById('search-text').value = null;

            for (var i in data.event)
            {
                var node = document.createElement("H3");
                var textnode = document.createTextNode(data.event[i].strEvent + ' - ' + data.event[i].strSport + ' - ' + data.event[i].dateEvent + ' - ' + data.event[i].strTimeLocal + ' - ' + data.event[i].strCountry);
                node.appendChild(textnode);
                document.getElementById("results").appendChild(node);
            }



        }
    }
}