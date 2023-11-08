let coordinates = {}

$(document).ready(function () {
 //call the function
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat=source.split(";")[0]
        coordinates.source_lon=source.split(";")[1]
      





        
    } else {
      alert("coordinates not have selected")
    window.history.back()
    }
}