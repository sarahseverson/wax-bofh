---
layout: wax/page
show_title: true
banner:
  collection: bofh
  pid: ms103
  y: 30%
---

This digital collection is focused on the McGill Library Rare Books and Special Collections complete collection of Books of Hours that span several centuries.

### Browse the Collection
{% include wax/collection/gallery.html facet_by='type' collection='bofh' %}

This collection was created through a partnership with the McGill Library and the [Groupe de recherche multidisciplinaire de Montréal sur les livres anciens (UQAM)](http://www.livresanciens.uqam.ca/) in support of their Social Sciences and Humanities Research Council of Canada funded project to create the [_Catalogue raisonné pour les Livres d’Heures des XVe et XVIe siècles conservés au Québec_](https://mcgill.on.worldcat.org/oclc/1050953347/).

This site's sample collection comprises a set of objects, each of which is represented by one or more images.

In the parlance of [IIIF](http://iiif.io/), each collection item is represented by a [manifest](https://iiif.io/api/presentation/2.0/#manifest) (like [this one]({{ '/img/derivatives/iiif/obj1/manifest.json' | absolute_url }})), and each image asset is a [canvas](https://iiif.io/api/presentation/2.0/#canvas) (like [this]( {{ '/img/derivatives/iiif/canvas/obj1.json' | absolute_url }})). These JSON files are interpreted by a IIIF-compliant viewer. Wax includes two viewer options: [LeafletIiif](https://github.com/mejackreed/Leaflet-IIIF) (as seen [here]({{ '/qatar/obj1/' | absolute_url }})) and [Mirador](http://projectmirador.org/), used for _[The Book of Horses]({{ '/qatar/obj12/' | absolute_url }})_. You can use either or both however you like, though Mirador is much larger to load and is best suited for documents.
