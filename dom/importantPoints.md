1. `Window` -> It is a global object. It represents browser window and provides methods to control it. It represents the tab in the browser.

2. `Document` -> It is inside the inner window. It is the root node of the DOM tree. DOM tree consists of parent-child relationship. Document node has one child HTML node. This HTML node is parent of head and body node. Head and body are siblings as, they are at the same level in the DOM tree.

We have the followning when javascript runs in a browser

- Window
  -DOM -> entire html page is converted to javascript object, which is known as Document.
  -BOM -> It represents addtional objects provided by the browser(host environment) for working with everything except the document. The functions alert/confirm/prompt area also a part of the BOM.
  -Javascript Core

3. `Event Probagation` -> it refers to how an event travels through DOM i.e - DOM tree, like electricty running through wire and untill it reaches its destination. DOM is full of nodes, when refering to event probagation, the event needs to pause through every node in the DOM untill it reaches the end, or it is forcefully stopped. It contains 3 phases -
1. Event Capturing (phase 1)
1. Target (phase 2)
1. Event Bubbling (phase 3)

In short- A event starts from the root travels all the way to the target, after it has reached the target, it goes to the bubbling phase, and travels back up from the target to the root. Third parameter in the addEventListener decides whether we go for event capture oe event bubbling. It is a boolean value, true or false. If the value is true, it captures the event and for false value it bubbles the event. The target property in the event object gives us the target of the event. The ,stopPropagation(), function stops the event capturing or event bubbling as soon as we trigger event.stopPropagation(). When we do addEventlistener, if we do not mention the third property, it is by default set to false. Using event bubbling, we can also make sure that event executes only once. ex. use-> {once:true}, in third parameter when event bubbling is happening. A function event.preventDefault(), prevents the default behaviour of the target object.

4. `Event Delegation` -> It is event handling method inside DOM. It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector. It is achieved by a function in the event object i.e getAttribute('id')
