---
layout: none
---
$.getJSON("{{ 'js/lunr-index.json' | absolute_url }}", function(index_json) {
  window.index = new elasticlunr.Index;
  window.store = index_json;
  index.saveDocument(false);
  index.setRef('lunr_index');
  index.addField('link');
	index.addField('collection');
	index.addField('label');
	index.addField('_date');
	index.addField('location');
	index.addField('artist');
	index.addField('description');
	index.addField('language');
	index.addField('description_source');
	index.addField('call_number');
	index.addField('pid');
	index.addField('thumbnail');
  // add docs
  for (i in store){
    index.addDoc(store[i]);
  }
  $('input#search').on('keyup', function() {
    var results_div = $('#results');
    var query = $(this).val();
    var results = index.search(query, { boolean: 'AND', expand: true });
    results_div.empty();
    for (var r in results) {
      var ref = results[r].ref;
      var item = store[ref];
      var pid = item.pid;
      var label = item.label;
      var meta = `${item.link} | ${item.collection} | ${item._date}`;
      if ('thumbnail' in item) {
        var thumb = `<img class='sq-thumb-sm' src='{{ "" | absolute_url }}${item.thumbnail}'/>&nbsp;&nbsp;&nbsp;`
      }
      else {
        var thumb = '';
      }
      var result = `<div class="result"><a href="${item.link}">${thumb}<p><span class="title">${item.label}</span><br>${meta}</p></a></p></div>`;
      results_div.append(result);
    }
  });
});
