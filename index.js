$('#input-tags').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
      return { 
        value: input,
        text: input 
      }
    }
});
// return ['tag1', 'tag2', …]
function viewTags() {
  tags = document.getElementById('input-tags');
  console.log(tags.value.split(','));
}