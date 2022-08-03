1. CDN For COGBranding Sites.

For filterable portfolio, making changes to the appearance like adding html tags and stuffs plz go do [/divi-child/includes/custom-FilterablePortfolio.php](/divi-child/includes/custom-FilterablePortfolio.php)
line 679 wrap %2$s with the tag and line 686 wrap %3$s with the tag.

For dropdown function to work properly please add following in the javascript

```
/* Project Dropdown Option */
$('.project_dropdown').on('change', function(){
  var sval = $('option:selected', this).attr('data-category-slug');
  $('a[data-category-slug='+sval+']').click();
});
```

And the following in scss

```
sup.floating_number{
    font-size: 1rem;
}

@media(max-width:980px){
    .project_list{
        display: none !important;
    }
    .project_dropdown{
        display: block;
        padding: unset !important;
        border: none !important;
        border-bottom: 1px solid $black !important;
        font-size: 2.25rem;
        width: 100%;
        height: 50px;
    }
}

@media(min-width:981px){
    .project_list{
        display: block;
    }
    .project_dropdown{
        display: none;
    }
}
```

For reference on overriding templates on divi-child theme follow the following link:
[https://help.elegantthemes.com/en/articles/3192155-moving-filterable-portfolio-module-to-child-theme](https://help.elegantthemes.com/en/articles/3192155-moving-filterable-portfolio-module-to-child-theme)