# Not your fathers coloring book
This is me messing around with AI to keep up with my toddlers imagination

![](https://raw.githubusercontent.com/alexbrown/not-your-fathers-coloring-book/refs/heads/master/coloring-book.gif)

## How it works
* I am leveraging the Cloudflare Workers AI API + Stable Diffusion in order to generate the actual images.
* I let the user input whatever prompt they want and then prefix it with "A basic black and white coloring book page for a 7 year old of {{ prompt }}"
* I created a UI ripping off Chat GPT with a simple Vue implementation that allows you to see your prompt and the image it generates
