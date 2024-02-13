var data = [
  { name: "ABROS", link: "https://abros.me", date: "23/01/2024", effects: "none", redirecturl: "-", note: "Это сайт для тестов, с ним ничего не происходит." }
];

function processData(data) {
  var tableData = data.map(function (item) {
    return {
      name: item.name,
      link: item.link,
      date: item.date,
      effects: item.effects,
      redirecturl: item.redirecturl,
      note: item.note
    };
  });

  $('#table').bootstrapTable('load', tableData);
}

processData(data);
