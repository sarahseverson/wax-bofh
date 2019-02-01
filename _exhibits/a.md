---
layout: wax/exhibit
title: 'Comparing Local and Remote IIIF Manifests in Mirador'
author:
publish_date: 2019-01-31
permalink: /exhibits/a/
---

This is an example exhibit that shows how you can compare an image from your digital collection with one from another location. Because Wax uses IIIF, exhibits can even leverage the included viewer [Mirador](http://projectmirador.org) to compare collection items in the site with items _housed at other institutions_.
Below, an item from this site's local collection, MS 105, is compared with one from the Library of Congress, _[The Battle of Mazandaran from "Hamzahnamah"](https://www.wdl.org/en/item/7012/#q=shahnamah&qla=en)_, hosted as a IIIF manifest by the World Digital Library.
{% assign m1='/img/derivatives/iiif/ms105/manifest.json' %}
{% assign m2='https://www.wdl.org/en/item/7012/iiif/manifest.json' %}

{% include wax/mirador_compare.html m1=m1 m2=m2 %}
