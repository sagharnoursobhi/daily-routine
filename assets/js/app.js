const appUrl = 'http://localhost/daily_routines';
$(document).ready(() => {
    const date = getToday();
    getData(date);
});
function getData(date) {
    $.ajax({
        url: `${appUrl}/getRoutines.php`,
        type: 'GET',
        data: {
            user_id: '1',
            date
        },
        success: (response) => {
            response.day.forEach((routine) => {
                const checked = (routine.done) ? "checked" : "";
                document.getElementById('list1').innerHTML +=  `
                <tr id="${routine.id}">
                    <td><input type="checkbox" ${checked}></td>
                    <td>${routine.name}</td>
                    <td><button type="button">Delete</button></td>
                </tr>
                `;
            });
            response.night.forEach((routine) => {
                const checked = (routine.done) ? "checked" : "";
                document.getElementById('list2').innerHTML +=  `
                <tr id="${routine.id}>
                    <td><input type="checkbox" ${checked}></td>
                    <td>${routine.name}</td>
                    <td><button type="button">Delete</button></td>
                </tr>
                `;
            });
        },
    });
}
function getToday()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }
    return `${yyyy}-${mm}-${dd}`;
}