let name = prompt(`What is your name?`);
let time = new Date().toLocaleTimeString();
let date = new Date().toLocaleDateString();



let html = `
  <table>
        <tr>
            <th></th>
            <th>Time</th>
            <th>Date</th>
            <th>Name</th>
        </tr>
        <tr>
            <td><img src="img/blankprofile.png" alt="blank profile image"style="width:205px;height:212px;"></td>
            <td>${time}</td>
            <td>${date}</td>
            <td>${name}</td>
        <tr>
            <td><img src="img/cameron.jpg" alt="cameron white"></td>
            <td>12:01:43 pm</td>
            <td>11/13/2020</td>
            <td>Cameron White</td>
        </tr>
        <tr>
            <td><img src="img/profile2.jpg" alt="marcus matthews" style="width:205px;height:212px;"></td>
            <td>11:00:01 am</td>
            <td>11/12/2020</td>
            <td>Marcus Matthews</td>
        </tr>
        <tr>
            <td><img src="img/profile3.jpg" alt="robert smith" style="width:205px;height:212px;"></td>
            <td>10:00:07 pm</td>
            <td>11/1/2020</td>
            <td>Robert Smith</td>
        </tr>
    </table>
`;

document.querySelector('main').innerHTML = html;