const tableData = document.getElementById("usertable");

let usersData = [
    { users: 'Rahul', data: 'super', deviceId: 'React-rainbow', imeiNo: 'https://react-rainbow.io/#/Components', id: 1 },
    { users: 'Ankit', data: 'cool', deviceId: 'Bootstrap', imeiNo: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/', id: 2 },
    { users: 'Aniket', data: 'wonder', deviceId: 'css-tricks', imeiNo: "https://css-tricks.com/", id: 3 },
    { users: 'Saharsh', data: 'ful', deviceId: 'Web dev', imeiNo: "https://web.dev/", id: 4 },
    { users: 'Darsh', data: 'css', deviceId: 'Dribble', imeiNo: "https://dribbble.com/", id: 5 },
    { users: 'Pinki', data: 'use', deviceId: 'webdesign', imeiNo: "https://dribbble.com/tags/designer_portfolio", id: 6 },
    { users: 'Kajal', data: 'web', deviceId: 'mdb-builder', imeiNo: "https://mdb-builder.com/", id: 7 },
    { users: 'Neha', data: 'design', deviceId: 'css-tip', imeiNo: "https://markodenic.com/css-tips/", id: 8 },
    { users: 'Nilu', data: 'purpose', deviceId: 'uiverse', imeiNo: "https://uiverse.io/all/", id: 9 },
]

function userlist(data) {
    let html = '';
    data.forEach(user => {

        html += ` <tr>
        <td><input type="checkbox">${user.users}</td>
        <td>${user.data}</td>
        <td>${user.deviceId}</td>
        <td><a class="link" target="_blank" href=${user.imeiNo}>${user.imeiNo}</a></td>
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