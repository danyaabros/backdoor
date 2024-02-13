var data = [
  { name: "ABROS", link: "https://abros.me", date: "23/01/2024", effects: "none", redirecturl: "-", note: "Это сайт для тестов, с ним ничего не происходит." }
];

function processData(data) {
  var tableBody = $('#tableBody');

  data.forEach(function (item) {
    var row = '<tr>' +
      '<td>' + item.name + '</td>' +
      '<td>' + item.link + '</td>' +
      '<td>' + item.date + '</td>' +
      '<td>' + item.effects + '</td>' +
      '<td>' + item.redirecturl + '</td>' +
      '<td>' + item.note + '</td>' +
      '</tr>';

    tableBody.append(row);
  });
}
