---
layout: wax/page
title: About the digital collection
permalink: /about/
banner:
  collection: bofh
  pid: ms103
  y: 50%
---
The digitization of this collection and the creation of this website was done as part of a partnership with the [McGill Library](https://www.mcgill.ca/library/) and the [Groupe de recherche multidisciplinaire de Montréal sur les livres anciens (UQAM)](http://www.livresanciens.uqam.ca/) in support of their Social Sciences and Humanities Research Council of Canada funded project to create the [_Catalogue raisonné pour les Livres d’Heures des XVe et XVIe siècles conservés au Québec_](https://mcgill.on.worldcat.org/oclc/1050953347/). The catalogue was followed by an exhibition at the  Montreal Museum of Fine Arts from 4 September 2018 – 6 January 2019 titled [_Resplendent Illuminations: Books of Hours from the 13th to the 16th Century in Quebec Collections_](https://www.mbam.qc.ca/en/exhibitions/past/resplendent-illuminations/) curated by Hilliard Goldfarb (MMFA), Brenda Dunn-Lardeau (UQAM), Richard Virr (McGill).
{% include wax/parallax.html collection='bofh' pid='ms102' %}
# Digital Collection
This site was created as means of _experimenting_ with Wax and IIIF. 
# What is Wax? 
Wax is a minimal computing ([minicomp](https://github.com/minicomp)) project led by [Marii Nyröp](http://marii.info/). It relies on [Jekyll](https://jekyllrb.com), [IIIF](http://iiif.io), [Leaflet IIIF](https://github.com/mejackreed/Leaflet-IIIF), [Rake](https://ruby.github.io/rake/), [ElasticLunr](http://elasticlunr.com/), and [IIIF_S3](https://github.com/cmoa/iiif_s3), and builds upon work by [Peter Binkley](https://github.com/pbinkley), [David Newbury](https://github.com/workergnome), and [Alex Gil](https://github.com/elotroalex).
**Wax is an extensible workflow for producing scholarly exhibitions with minimal computing principles.**  
It is comprised of a few Ruby gems, some customizable UI components, and (hopefully soon!) a lot of documentation and recipes for creating, deploying, and maintaining digital exhibitions.
**The exhibition sites created by Wax are static.**  
This means they consist of flat HTML, CSS, and JavaScript files that don't need to communicate in a complex way back to a server. This makes them cheaper, safer, and generally easier to maintain—as long as you're willing to learn some new skills.
**The skills needed to create Wax sites are agnostic.**  
This means they are largely transferable for use in other digital projects. 'Learning Wax' does not mean learning how to use a platform. It involves learning the fundamentals of web development, data management, and [plain text editing](https://zapier.com/blog/beginner-ultimate-guide-markdown/) while leveraging a few great open source libraries and frameworks along the way.
**Wax keeps the collection presentation separate from the collection data.**  
The Wax workflow starts with making standardized image files and metadata records and builds around them, handling canonical information, scholarly content, and site styling differently and deliberately. This makes it easier for you or others to reuse and reimagine your collection data in other contexts.
## So what does Wax *look like?*
Below is a diagram to give you a zoomed-out view. In summary, you create a file of metadata records for your collection (in CSV, YAML, or JSON format), organize your collection image files, and put both in a Jekyll site folder. After updating your configuration, you run a few command line task to prepare the data and metadata for use by the Jekyll site. Then Jekyll uses special layouts and Wax components to build the exhibition and spits them out as static pages ready to host.

From there, you can run tests on your site to catch errors and decide where and how to put it online with greater flexibility.

<a href="{{ '/assets/wax_workflow.jpg' | absolute_url }}">
  <img src="{{ '/assets/wax_workflow.jpg' | absolute_url }}"/>
</a>
