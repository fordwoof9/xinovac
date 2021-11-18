document.querySelector('#FormReservation').addEventListener('submit', e => {
    e.preventDefault();
    let form = document.querySelector('#FormReservation');
    const data = new URLSearchParams();
    for(const p of new FormData(form)){
        data.append(p[0], p[1]);
    }

    fetch('pages/api/server.php', {
        method: 'POST',
        body: data
    }).then(Response => Response.text()).then(Response => {
        console.log(Response);
    }).catch(error => console.log(error));
});