// function filterRedOvejas(ovejas) {
//           filter = []
//           ovejas.map(o => {
//                     if (o.color == 'rojo') {
//                               filter.push(o);
//                     }
//           })
//           return filter;
// }

const filterRedOvejas = ovejas => ovejas.filter(o => o.color == 'rojo');

module.exports = filterRedOvejas;



