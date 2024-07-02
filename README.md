# drum-machine-fcc

This is a project to fulfiled _Front End Development Libraries_ Course provided by freeCodeCamp.

Goals: Create a random quote generator similar to this: https://drum-machine.freecodecamp.rocks/.

In this project, the tech stack was used ReactJS and SCSS. <br>
Check out the live demo [here](https://ndtrung-dev.github.io/drum-machine-fcc).

## Requirements:

### Tech stacks:

> Using any mix of HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.<br>
> Andditional tech unlisted are not recommended.

### User story:

> 1. I should be able to see an outer container with a corresponding _id="drum-machine"_ that contains all other elements.
>
> 1. Within #drum-machine I can see an element with a corresponding _id="display"_.
>
> 1. Within _#drum-machine_ I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: _Q_, _W_, _E_, _A_, _S_, _D_, _Z_, _X_, _C_. The drum pads MUST be in this order.
>
> 1. Within each _.drum-pad_, there should be an HTML5 audio element which has a _src_ attribute pointing to an audio clip, a class name of _clip_, and an id corresponding to the inner text of its parent _.drum-pad_ (e.g. id="Q", id="W", id="E" etc.).
>
> 1. When I click on a _.drum-pad_ element, the audio _clip_ contained in its child audio element should be triggered.
>
> 1. When I press the trigger key associated with each _.drum-pad_, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
>
> 1. When a _.drum-pad_ is triggered, a string describing the associated audio clip is displayed as the inner text of the _#display_ element (each string must be unique).

### Testing tools

<em>FCC Testing CDN</em> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) is provided by freeCodeCamp

## Result

All checkpoint passed!

<b>Note:</b><br> - <code>bankOne</code> and <code>bankTwo</code> is retrieved from provided example.

Source code uploaded to [github](https://github.com/ndtrung-dev/drum-machine-fcc).

[Live demo](https://ndtrung-dev.github.io/drum-machine-fcc) is uploaded to github using <code>gh-pages</code>. <em>FCC Testing CDN</em> was embedded. Select <code>drum-machine</code> option from dropdown menu to verify the result.
