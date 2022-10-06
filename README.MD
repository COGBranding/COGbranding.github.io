# Code Guide to some functions built with the CDN files

## 1. To remove Divi class from the tags, call the following function on jquery

"selector" can be just the tag, class or id name

All divi class starts with either 'et*' or 'et-', the only one making real differences is 'et*' which is under the code below. place the code in custom.js file and make sure jquery and the [/js/diviFunction.js](/js/diviFunction.js) file is loaded before the custom.js file.

The function can be used to remove any classes (runs wildcard checking for classes starting with) on any criteria,

```
$("selector").removeClassStartingWith('et_');
```

## 2. CDN For COGBranding Sites.

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

## 3. Add three dots to Divi breadcrumbs that are not the home or current page

```
const childBreadcrumb = document.querySelector(
        ".lwp-breadcrumbs a:not(.home) span[property='name']"
);
if (childBreadcrumb) {
    childBreadcrumb.innerHTML = ". . .";
}
```

## 4. Show link preview when Divi module is linked

```
divi_link_preview()
```
