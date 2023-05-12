Browsers can apply default margin and padding values to specific elements. To make sure your piano looks correct, you need to reset the box model.
Add an html rule selector to your CSS file, and set the box-sizing property to border-box.

Now that you have reset the html box model, you need to pass that on to the elements within as well. To do this, you can set the box-sizing property to inherit, which will tell the targeted elements to use the same value as the parent element.

You will also need to target the pseudo-elements, which are special keywords that follow a selector. The two pseudo-elements you will be using are the ::before and ::after pseudo-elements.

The ::before selector creates a pseudo-element which is the first child of the selected element, while the ::after selector creates a pseudo-element which is the last child of the selected element. These pseudo-elements are often used to create cosmetic content, which you will see later in this project.

For now, create a CSS selector to target all elements with \*, and include the pseudo-elements with ::before and ::after. Set the box-sizing property to inherit.

The @media at-rule, also known as a media query, is used to conditionally apply CSS. Media queries are commonly used to apply CSS based on the viewport width using the max-width and min-width properties.

In the below example the padding is applied to the .card class when the viewport is 960px wide and below.

@media (max-width: 960px) {
.card {
padding: 2rem;
}
}
Add a media query that will be applied when the viewport is 768px wide and below.

Logical operators can be used to construct more complex media queries. The and logical operator is used to query two media conditions.

For example, a media query that targets a display width between 500px and 1000px would be:

@media (min-width: 500px) and (max-width: 1000px){

}
Add another @media rule to apply if the browser window is wider than 769px but smaller than 1199px.
