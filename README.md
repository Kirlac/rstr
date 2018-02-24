# Reddit Spoiler Tooltip Remover (RSTS)
### Removes the tooltip that shows when hovering over a spoiler tag on Reddit

Because reddit formats spoilers as an `<a href="/s">` tag with the spoiler content as the `title` attribute browsers will show a tooltip containing the title text on hover, which covers up the spoiler being revealed with a worse & harder to read version

This userscript adds the content of the spoiler to a `data-spoiler` attribute, removes the `title` attribute (and therefore the tooltip) and adds a css rule to set the `::after` content from `data-spoiler` instead of `title`
