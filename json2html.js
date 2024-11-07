export default function json2html(data) {
  let html = '<table data-user="anudheerparimi@gmail.com">';
  html += '<thead><tr>';
  html += '<th>Name</th><th>Age</th><th>Gender</th>';
  html += '</tr></thead>';
  html += '<tbody>';
  
  data.forEach(item => {
    html += '<tr>';
    html += `<td>${item.Name}</td>`;
    html += `<td>${item.Age}</td>`;
    html += item.Gender ? `<td>${item.Gender}</td>` : '<td></td>';
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  
  return html;
}
