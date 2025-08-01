# Documentation style guide

This is a work-in-progress style guide for documentation. There are many things not currently covered here, and it is not intended to be a complete manual for writing documentation, just a set of pointers to help us achieve a comfortable level of consistency.

## Docusaurus

The documentation is written in Markdown and the site is built using Docusaurus. In practical terms, if you are familiar with markdown, there isn't really anything complicated you need to learn in order to contribute. Docusaurus does add some extra element though, and also may use a slightly different set of rules than you are used to. The [Docusaurus documentation](https://docusaurus.io/docs/markdown-features) contains a lot of useful information on how to use Markdown to create the output you want.

## Branding

Consistency in branding is important for a number of reasons, including the protection of trademarks where they apply.
For our own products, and those of others we mention frequently, the following guidance applies.

**Wokwi**: Use capitals except where using as part of a command. For example, we may write abot the Wokwi CLI, the command is `wokwi-cli`however.
**Wokwi Classroom**: Used when referring to the particular academic license scheme.  Note the capitalization.

### Boards and platforms

Please try to respect other brands also. For example, the chip powering the Arduino uno is an "ATmega328p". You have probably seen it so often that it would look wrong if someone wrote "Atmega328P".

For the Espressif ESP32 family of microcontrollers, be specific where possible: for example, when referring to something particular to a C6 variant of the chip, use the full designation, "ESP32-C6".

For supported platforms and componments, a useful place to check the correct naming is on the [supported hardware page](https://docs.wokwi.com/getting-started/supported-hardware) of our own docs.

## Contractions

Contractions are very common in spoken English and in many types of writing.
Avoiding the use of them entirely makes it difficult to achieve a friendly,
conversational tone. However, do keep to contractions that are commonly
understood and not part of some regional dialect.

Do use: "can't", "won't", "isn't" ...
Don't use: "ain't", "gonna" ...

## Headings

Headings are important for navigation, for setting tone and for search indexing. Please bear
in mind the following:

### Sentence case

All headings and headlines should be sentence case. This means that you
should only capitalize the first word unless it falls into one of the categories
outlined below:

- product names
- company names
- personal names
- brands
- places

**USE:** Build your dreams with Wokwi
**DON'T USE:** Build Your Dreams With Wokwi

### Other considerations

- Avoid links in headings
- Avoid overusing punctuation in headings. Headings should not end with a period/full point/full stop
- Don't overuse `code` styling in headings - it is rarely useful or pleasant to look at
- Imperatives should be used for 'How to...' style docs instead of gerunds (i.e. "Create an instance" rather than "Creating an instance")
- Do not skip levels of heading hierarchy (e.g. following an h1/# with an h3/###)
- Headings require content and should not be followed directly by a subheading

## Words and phrases to avoid

Try to avoid jargon, long-winded phrases and words with negative
connotations.

## Code examples in documentation

**DO NOT** use prompt marks (e.g. `$` or `#`) in code samples. These cause problems for users who sometimes mistakenly type them in, or who want to copy and paste sections of code. They also encourage poor explanation of the code.

**DO** separate commands and output where appropriate.

## Admonitions

Admonitions (also referred to as "admonishments", "callouts" or "notifications") are a device used in documentation to draw attention to a
particular statement or paragraph of text. Typically their use is to highlight:

- A consequence of performing a particular action
- An additional source of information which is useful but not required
- A helpful tip that will save effort/time
- A reminder of some pre-requisite or restriction

Docusaurus has some built-in styles to make these themed admonitions stand out in a consistent way. Check the Docussaurus [documentation for admonitions](https://docusaurus.io/docs/markdown-features/admonitions) for more details.

## Hyperlinks

Here are some pointers about the general use of links and how to format them correctly.

### General use

Avoid excessive links in the same paragraph or instruction. If you find
yourself introducing several links in your content, consider listing them in a
separate section called "Related topics", "Additional resources", or similar.

### Formatting

Make sure either the link text itself or the surrounding sentence provides
enough context about the contents of the linked section.

Avoid phrases like "this document", "this article", or "click here" as the link
text.

For example, when referring to a section called "Formatting":

- Use: `See the [formatting guidelines](#formatting) for hyperlinks.`
- Use: `See the [Formatting section](#formatting) for guidelines about hyperlink formatting.`
- Avoid: `See [Formatting](#formatting).`
- Avoid: `See [this section](#formatting).`

Avoid using a URL as the linked text.

- Use: `[Page title](https://page-url.com)`
- Avoid: `[https://page-url.com](https://page-url.com)`
