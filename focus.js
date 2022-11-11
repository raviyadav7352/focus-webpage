const tableData = document.getElementById("usertable");

let usersData = [
    { users: 'jonas', data: '1234', deviceId: '34576@8589', imeiNo: 'https://news.google.com', id: 1 },
    { users: 'jokutyr', data: '2453', deviceId: '57666@8584', imeiNo: 'https://www.youtube.com', id: 2 },
    { users: 'gtrewse', data: '5674', deviceId: '85656@8566', imeiNo: 87675634235775, id: 3 },
    { users: 'mosaid', data: '7454', deviceId: '34576@8586', imeiNo: 76765567567565, id: 4 },
    { users: 'jonas', data: '1234', deviceId: '34576@8589', imeiNo: 84536974389743, id: 5 },
    { users: 'jokutyr', data: '2453', deviceId: '57666@8584', imeiNo: 86554464453424, id: 6 },
    { users: 'gtrewse', data: '5674', deviceId: '85656@8566', imeiNo: 87675634235775, id: 7 },
    { users: 'mosaid', data: '7454', deviceId: '34576@8586', imeiNo: 76765567567565, id: 8 },
    { users: 'jonas', data: '1234', deviceId: '34576@8589', imeiNo: 84536974389743, id: 9 },
    { users: 'jokutyr', data: '2453', deviceId: '57666@8584', imeiNo: 86554464453424, id: 10 },
    { users: 'gtrewse', data: '5674', deviceId: '85656@8566', imeiNo: 87675634235775, id: 11 },
    { users: 'mosaid', data: '7454', deviceId: '34576@8586', imeiNo: 76765567567565, id: 12 },
    { users: 'jonas', data: '1234', deviceId: '34576@8589', imeiNo: 84536974389743, id: 13 },
    { users: 'jokutyr', data: '2453', deviceId: '57666@8584', imeiNo: 86554464453424, id: 14 },
    { users: 'gtrewse', data: '5674', deviceId: '85656@8566', imeiNo: 87675634235775, id: 15 },
    { users: 'mosaid', data: '7454', deviceId: '34576@8586', imeiNo: 76765567567565, id: 16 },
    { users: 'jonas', data: '1234', deviceId: '34576@8589', imeiNo: 84536974389743, id: 17 },
    { users: 'jokutyr', data: '2453', deviceId: '57666@8584', imeiNo: 86554464453424, id: 18 },
    { users: 'gtrewse', data: '5674', deviceId: '85656@8566', imeiNo: 87675634235775, id: 19 },
    { users: 'mosaid', data: '7454', deviceId: '34576@8586', imeiNo: 76765567567565, id: 20 },
]

function userlist(data) {
    let html = '';
    data.forEach(user => {

        html += ` <tr>
        <td><input type="checkbox">${user.users}</td>
        <td>${user.data}</td>
        <td>${user.deviceId}</td>
        <td><a target="_blank" href=${user.imeiNo}>${user.imeiNo}</a></td>
    </tr>`
    });
    tableData.insertAdjacentHTML("beforeend", html)
}
userlist(usersData)
let btnarrow =`<span class='material-symbols-outlined arrow'>keyboard_arrow_right</span>`
$(document).ready(function () {
    $(document).on('click', function (e) {
        var element = e.target
        var elemId = $(element).attr("id")
        switch (elemId) {
            case "tableDatabtn0": {
                $('#tableDatabtn0').html(btnarrow)
                $("#detail-page").css("display", "flex")
                $("#detail-page").fadeIn(1000);
            }
                break;
            case "tableDatabtn1": {
                $('#tableDatabtn1').html(btnarrow)
                $("#detail-page").css("display", "flex")
                $("#detail-page").fadeIn(1000);
            }
                break;
            case "blurdata":
            case "close":
                $("#detail-page").fadeOut(500);
                $("#tableDatabtn0, #tableDatabtn1").html('click').css("background-color", "")
                break;
            case "nav-item-1": {
                pageAccess(1)
            }
                break;
            case "nav-item-2": {
                pageAccess(2)
            }
                break;
            case "nav-item-3": {
                pageAccess(3)
            }
                break;
            case "apply": 
            case "login": {
                $("#backdrop").fadeIn(200)
                $("#form").fadeIn(200)

            }
                break;
            case "skipFromHere":
                $("#mainPage").fadeOut(500)
                $("#secondPage").fadeIn(500)
                $("#knowmore").fadeOut()
                $("#form").fadeOut(1000)
                $("#detail-page").fadeOut(500);
                $("#tableDatabtn0, #tableDatabtn1").html('click').css("background-color", "")

                break;
            case "goback":
                $("#mainPage").fadeIn(500)
                $("#secondPage").fadeOut()
                break;
            case "knowMore":
                $("#knowmore").fadeIn(100)
                break;
            case "closeknowmore":
                $("#knowmore").fadeOut()
                break;
            default:
                break;
        }
    })
    function pageAccess(page) {

        $("#nav-item-1").removeClass("nav-item-click")
        $("#nav-item-2").removeClass("nav-item-click")
        $("#nav-item-3").removeClass("nav-item-click")
        $(`#nav-item-${page}`).addClass("nav-item-click")

        $(".page1").css("display", "none")
        $(".page2").css("display", "none")
        $(".page3").css("display", "none")
        $(`.page${page}`).css("display", "block")

    }
})