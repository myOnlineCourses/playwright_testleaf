
www.leafground.com

CSS Selectors
-------------
using id attribute
    #idvalue
    [id='value']  -->using attribute
 page.locator("[id='username']")
using class attribute
   .classValue


using attribute and tagname
sytax:
tagname[attribute='value']
input[id='username']
input[class='inputLogin'][id='username']


text based selector
text=Value


Parent -Child
div[id='label'] a 
div[id='label']>a 


<div> class=grandParent
  <div> class='parent1'
    <div> class='child'
    <span></span>  -sibling
    <a> </a>  -sibling
    </div>
  </div>


  <div> class='parent2'
    <div> class='child'
    <span></span>  -sibling
    <a> </a>  -sibling
    </div>
  </div>
 </div>


 -sibling
   immediate -sibling
   any sibling attribute + tagname
   p[class='top']+p


-all sibling
p[class='top']~p 


 Parent to child
 div[id='label'] a:nth-child(3)


div[id='label'] a:first-child()


  nth(index) -->pick one particular element index from multiple occurence
            --Starting with zero
  first();
  last() ; 
  filter();
  locator(p[class='top']~p ).filter({})
           {hasText:Password}
 
partial match
------------
prefix,suffix,substring(contains)


tagname[class^='input']
tagname[class$='Login']
tagname[class*='put']



------------------------------


xpath --xml path -->address of the element
 Basic


//tagname[@attribute='attributeValue'];


textbased
 //tagname[text()='textValue']


 multiple occurences 
 (any basic xpath)[index]  -starts with 1


 (//input[class='inputLogin'])[2]


 Partial match
 //tagname[contains(@arrtibute,'attributeValue')]
 //tagname[contains(text(),'balcktext value')]