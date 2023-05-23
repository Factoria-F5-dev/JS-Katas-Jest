function filterRedOvejas(ovejas) {
    filter = []
    ovejas.map(o => {
        if(o.color == 'rojo') {
          filter.push(o);
        }
    })
    return filter;
}

module.exports = filterRedOvejas; 
  
