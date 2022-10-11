function updateMap()
{
 fetch("/data.json")
 .then(response => response.json())
 .then(rsp=>{
    console.log(rsp.data)
    res.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;

        //Mark on the map
    });
 })
}
updateMap(); 