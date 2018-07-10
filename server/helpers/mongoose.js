module.exports = {
  normalizeErrors: function(errors) {
    // how to iterate object in JS
    let normalizeErrors = [];
    for(let property in errors){
      if(errors.hasOwnProperty(property)){
        normalizeErrors.push({title: property, detail: errors[property].message});
      }
    }
    return normalizeErrors;
  }
}