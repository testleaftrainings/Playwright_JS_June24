# CSS Selectors
- *Universal Selector (*)*: Selects all elements within a page.

- *Class Selector (.className)*: Selects all elements with a specific class.

- *ID Selector (#idName)*: Selects a single element with a specific ID.

## Combinators
- *Descendant Selector (space)*: Selects all elements that are descendants of a specified element.

- *Child Selector (>)*: Selects all elements that are direct children of a specified element.

- *Adjacent Sibling Selector (+)*: Selects all elements that are immediately preceded by a specific element.

- *General Sibling Selector (~)*: Selects all elements that are siblings of a specific element.

## Attribute Selectors
- *Presence and Value Attribute Selectors:*

    - [attribute]: Selects elements with a specific attribute.
    >> Example: a[target] targets all <a> elements with a "target" attribute.
    - [attribute="value"]: Selects elements with a specific attribute and value.
    >> Example: input[type="text"] targets all <input> elements with a type of "text".

- *Substring Value Attribute Selector:* 

    - [attribute*="value"]: Selects elements with an attribute value containing a specified substring.
    >> Example: a[href*="example"] targets all <a> elements whose href attribute contains "example".

