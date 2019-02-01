---
layout: wax/exhibit
title: 'Exhibit A: Local and Remote IIIF Manifests'
author: Mihr 'Ali
publish_date: 2018-11-15
permalink: /exhibits/a/
---

This is an example exhibit. 

In Wax, exhibits are generally essays or curatorial assemblages referencing the site collection. Because Wax uses IIIF, exhibits can even leverage the included viewer [Mirador](http://projectmirador.org) to compare collection items in the site with items _housed at other institutions_. 

Below, an item from this site's local collection, MS 105, is compared with one from the Library of Congress, _[The Battle of Mazandaran from "Hamzahnamah"](https://www.wdl.org/en/item/7012/#q=shahnamah&qla=en)_, hosted as a IIIF manifest by the World Digital Library.

{% assign m1='/img/derivatives/iiif/ms105/manifest.json' %}
{% assign m2='https://www.wdl.org/en/item/7012/iiif/manifest.json' %}

{% include wax/mirador_compare.html m1=m1 m2=m2 %}



