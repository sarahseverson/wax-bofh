---
layout: wax/exhibit
title: 'Comparing Local and Remote IIIF Manifests in Mirador'
author: Sarah Severson
publish_date: 2019-01-31
permalink: /exhibits/a/
---
This is an example exhibit that shows how you can compare an image from your digital collection with one from another location. Because Wax uses IIIF, exhibits can even leverage the included viewer [Mirador](http://projectmirador.org) to compare collection items in the site with items _housed at other institutions_ that publish their images using IIIF.

Below on the left is an item from this site's collection, MS 103, and on the right is an item from the Walters Art Museum, _[Book of Hours](https://www.wdl.org/en/item/19223/)_, hosted as a IIIF manifest by the World Digital Library. 

{% assign m1='/img/derivatives/iiif/ms103/manifest.json' %}
{% assign m2='https://www.wdl.org/en/item/19223/iiif/manifest.json' %}
{% include wax/mirador_compare.html m1=m1 m2=m2 %}

Or you could also compare two different items from the same collection. 
