const appUrl = 'http://localhost/daily_routines';
$(document).ready(() => {
    const date = getToday();
    getData(date);
    $('#add-morning').on('click', () => {
        const routineName = $('#input1').val();
        if (routineName) {
            $.ajax({
                url: `${appUrl}/addRoutine.php`,
                type: 'POST',
                data: {
                    routineName,
                    user_id: 1,
                    day: '1'
                },
                success: (response) => {
                    const checked = (response.done) ? "checked" : "";
                    document.getElementById('list1').innerHTML +=  `
                <tr id="${response.id}">
                    <td><input type="checkbox" class="btn-done" data-id="${response.id}" ${checked}></td>
                    <td>${response.name}</td>
                    <td><button type="button" class="btn-delete" data-id="${response.id}">Delete</button></td>
                </tr>
                `;
                $('#input1').val('');
                },
            });
        } else {
            alert("please Insert Routine Name");
        }
    });

    $('#add-night').on('click', () => {
        const routineName = $('#input2').val();
        if (routineName) {
            $.ajax({
                url: `${appUrl}/addRoutine.php`,
                type: 'POST',
                data: {
                    routineName,
                    user_id: 1,
                    day: '0'
                },
                success: (response) => {
                    const checked = (response.done) ? "checked" : "";
                    document.getElementById('list2').innerHTML +=  `
                <tr id="${response.id}">
                    <td><input type="checkbox" class="btn-done" data-id="${response.id}" ${checked}></td>
                    <td>${response.name}</td>
                    <td><button type="button"  class="btn-delete" data-id="${response.id}">Delete</button></td>
                </tr>
                `;
                $('#input2').val('');
                },
            });
        } else {
            alert("please Insert Routine Name");
        }
    });
    
    $(document).on('click','.btn-delete', (event) => {
        const  element = event.target;
        const id = $(element).attr('data-id');
        if(id) {
            $.ajax({
                url: `${appUrl}/deleteRoutine.php`,
                type: 'GET',
                data: {id},
                success: (response) => {
                    if(response.status) {
                        $(`#${id}`).remove();
                    } else {
                        alert("OOOOOPSSS some thing happend");
                    }
                }
            });
        }
    });

    $(document).on('click','.btn-done', (event) => {
        const  element = event.target;
        const id = $(element).attr('data-id');
        if(id) {
            $.ajax({
                url: `${appUrl}/doneRoutine.php`,
                type: 'GET',
                data: {
                    id,
                    date,
                },
                success: (response) => {
                    if(response.status) {
                        console.log("OK");
                    } else {
                        alert("OOOOOPSSS some thing happend");
                    }
                }
            });
        }
    });

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
                    <td><input type="checkbox" class="btn-done" data-id="${routine.id}" ${checked}></td>
                    <td>${routine.name}</td>
                    <td><button type="button"  class="btn-delete" data-id="${routine.id}">Delete</button></td>
                </tr>
                `;
            });
            response.night.forEach((routine) => {
                const checked = (routine.done) ? "checked" : "";
                document.getElementById('list2').innerHTML +=  `
                <tr id="${routine.id}">
                    <td><input type="checkbox" class="btn-done" data-id="${routine.id}" ${checked}></td>
                    <td>${routine.name}</td>
                    <td><button type="button" class="btn-delete" data-id="${routine.id}">Delete</button></td>
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