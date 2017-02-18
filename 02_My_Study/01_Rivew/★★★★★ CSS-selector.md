# CSS selectors....충분히 익힐것!

| [.*class*](http://www.w3schools.com/cssref/sel_class.asp) | .intro                | Selects all elements with class="intro"  | 1    |
| ---------------------------------------- | --------------------- | ---------------------------------------- | ---- |
| [#*id*](http://www.w3schools.com/cssref/sel_id.asp) | #firstname            | Selects the element with id="firstname"  | 1    |
| [*](http://www.w3schools.com/cssref/sel_all.asp) | *                     | Selects all elements                     | 2    |
| *element*                                | p                     | Selects all <p> elements                 | 1    |
| *element,element*                        | div, p                | Selects all <div> elements and all <p> elements | 1    |
| [*element* *element*](http://www.w3schools.com/cssref/sel_element_element.asp) | div p                 | Selects all <p> elements inside <div> elements | 1    |
| [*element*>*element*](http://www.w3schools.com/cssref/sel_element_gt.asp) | div > p               | Selects all <p> elements where the parent is a <div> element | 2    |
| [*element*+*element*](http://www.w3schools.com/cssref/sel_element_pluss.asp) | div + p               | Selects all <p> elements that are placed immediately after <div> elements | 2    |
| [*element1*~*element2*](http://www.w3schools.com/cssref/sel_gen_sibling.asp) | p ~ ul                | Selects every <ul> element that are preceded by a <p> element | 3    |
| [[*attribute*\]](http://www.w3schools.com/cssref/sel_attribute.asp) | [target]              | Selects all elements with a target attribute | 2    |
| [[*attribute*=*value*\]](http://www.w3schools.com/cssref/sel_attribute_value.asp) | [target=_blank]       | Selects all elements with target="_blank" | 2    |
| [[*attribute*~=*value*\]](http://www.w3schools.com/cssref/sel_attribute_value_contains.asp) | [title~=flower]       | Selects all elements with a title attribute **containing** the word "flower" | 2    |
| [[*attribute*\|=*value*\]](http://www.w3schools.com/cssref/sel_attribute_value_lang.asp) | [lang\|=en]           | Selects all elements with a lang attribute value starting with "en" | 2    |
| [[*attribute*^=*value*\]](http://www.w3schools.com/cssref/sel_attr_begin.asp) | a[href^="https"]      | Selects every <a> element whose href attribute value begins with "https" | 3    |
| [[*attribute*$=*value*\]](http://www.w3schools.com/cssref/sel_attr_end.asp) | a[href$=".pdf"]       | Selects every <a> element whose href attribute value ends with ".pdf" | 3    |
| [[attribute=*valㅔㅔue\]](http://www.w3schools.com/cssref/sel_attr_contain.asp) | a[href*="w3schools"]  | Selects every <a> element whose href attribute value contains the substring "w3schools" | 3    |
| [:active](http://www.w3schools.com/cssref/sel_active.asp) | a:active              | Selects the active link                  | 1    |
| [::after](http://www.w3schools.com/cssref/sel_after.asp) | p::after              | Insert something after the content of each <p> element | 2    |
| [::before](http://www.w3schools.com/cssref/sel_before.asp) | p::before             | Insert something before the content of each <p> element | 2    |
| [:checked](http://www.w3schools.com/cssref/sel_checked.asp) | input:checked         | Selects every checked <input> element    | 3    |
| [:disabled](http://www.w3schools.com/cssref/sel_disabled.asp) | input:disabled        | Selects every disabled <input> element   | 3    |
| [:empty](http://www.w3schools.com/cssref/sel_empty.asp) | p:empty               | Selects every <p> element that has no children (including text nodes) | 3    |
| [:enabled](http://www.w3schools.com/cssref/sel_enabled.asp) | input:enabled         | Selects every enabled <input> element    | 3    |
| [:first-child](http://www.w3schools.com/cssref/sel_firstchild.asp) | p:first-child         | Selects every <p> element that is the first child of its parent | 2    |
| [::first-letter](http://www.w3schools.com/cssref/sel_firstletter.asp) | p::first-letter       | Selects the first letter of every <p> element | 1    |
| [::first-line](http://www.w3schools.com/cssref/sel_firstline.asp) | p::first-line         | Selects the first line of every <p> element | 1    |
| [:first-of-type](http://www.w3schools.com/cssref/sel_first-of-type.asp) | p:first-of-type       | Selects every <p> element that is the first <p> element of its parent | 3    |
| [:focus](http://www.w3schools.com/cssref/sel_focus.asp) | input:focus           | Selects the input element which has focus | 2    |
| [:hover](http://www.w3schools.com/cssref/sel_hover.asp) | a:hover               | Selects links on mouse over              | 1    |
| [:in-range](http://www.w3schools.com/cssref/sel_in-range.asp) | input:in-range        | Selects input elements with a value within a specified range | 3    |
| [:invalid](http://www.w3schools.com/cssref/sel_invalid.asp) | input:invalid         | Selects all input elements with an invalid value | 3    |
| [:lang(*language*)](http://www.w3schools.com/cssref/sel_lang.asp) | p:lang(it)            | Selects every <p> element with a lang attribute equal to "it" (Italian) | 2    |
| [:last-child](http://www.w3schools.com/cssref/sel_last-child.asp) | p:last-child          | Selects every <p> element that is the last child of its parent | 3    |
| [:last-of-type](http://www.w3schools.com/cssref/sel_last-of-type.asp) | p:last-of-type        | Selects every <p> element that is the last <p> element of its parent | 3    |
| [:link](http://www.w3schools.com/cssref/sel_link.asp) | a:link                | Selects all unvisited links              | 1    |
| [:not(*selector*)](http://www.w3schools.com/cssref/sel_not.asp) | :not(p)               | Selects every element that is not a <p> element | 3    |
| [:nth-child(*n*)](http://www.w3schools.com/cssref/sel_nth-child.asp) | p:nth-child(2)        | Selects every <p> element that is the second child of its parent | 3    |
| [:nth-last-child(*n*)](http://www.w3schools.com/cssref/sel_nth-last-child.asp) | p:nth-last-child(2)   | Selects every <p> element that is the second child of its parent, counting from the last child | 3    |
| [:nth-last-of-type(*n*)](http://www.w3schools.com/cssref/sel_nth-last-of-type.asp) | p:nth-last-of-type(2) | Selects every <p> element that is the second <p> element of its parent, counting from the last child | 3    |
| [:nth-of-type(*n*)](http://www.w3schools.com/cssref/sel_nth-of-type.asp) | p:nth-of-type(2)      | Selects every <p> element that is the second <p> element of its parent | 3    |
| [:only-of-type](http://www.w3schools.com/cssref/sel_only-of-type.asp) | p:only-of-type        | Selects every <p> element that is the only <p> element of its parent | 3    |
| [:only-child](http://www.w3schools.com/cssref/sel_only-child.asp) | p:only-child          | Selects every <p> element that is the only child of its parent | 3    |
| [:optional](http://www.w3schools.com/cssref/sel_optional.asp) | input:optional        | Selects input elements with no "required" attribute | 3    |
| [:out-of-range](http://www.w3schools.com/cssref/sel_out-of-range.asp) | input:out-of-range    | Selects input elements with a value outside a specified range | 3    |
| [:read-only](http://www.w3schools.com/cssref/sel_read-only.asp) | input:read-only       | Selects input elements with the "readonly" attribute specified | 3    |
| [:read-write](http://www.w3schools.com/cssref/sel_read-write.asp) | input:read-write      | Selects input elements with the "readonly" attribute NOT specified | 3    |
| [:required](http://www.w3schools.com/cssref/sel_required.asp) | input:required        | Selects input elements with the "required" attribute specified | 3    |
| [:root](http://www.w3schools.com/cssref/sel_root.asp) | :root                 | Selects the document's root element      | 3    |
| [::selection](http://www.w3schools.com/cssref/sel_selection.asp) | ::selection           | Selects the portion of an element that is selected by a user |      |
| [:target](http://www.w3schools.com/cssref/sel_target.asp) | #news:target          | Selects the current active #news element (clicked on a URL containing that anchor name) | 3    |
| [:valid](http://www.w3schools.com/cssref/sel_valid.asp) | input:valid           | Selects all input elements with a valid value | 3    |
| [:visited](http://www.w3schools.com/cssref/sel_visited.asp) | a:visited             | Selects all visited links                | 1    |