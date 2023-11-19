## Next JS basics

### Default and Dynamic Page Navigation

- `index.js` under the `pages` folder is always the root (landing page) of the url
- `index.js` under any other folder works as landing page on that route
- Any other file added under the pages folder or any other folder is automatically becomes the path in the url
- Dynamic pages are named as `[some_identifier].js`. Any value coming on that pattern will try to load this page, unless there is a concrete page with that name already existing
- to use the dynamic value to inject into dynamic js file [dynamic_id].js, use the library `import { useRouter } from "next/router"`. The attribute `router.query` has the value sent as url path
- This concept of dynamic naming can be applied at folder level too. example `[sub-folder]`
- The dynamic folder can be used for catch all situations with Three dot operator `[...something]`

### Link Navigation

- Recommended way of linking to another page is using Link. Usage pattern is - `import Link from 'next/link'` and in the code refer to link as `<Link href="/new_page">New Page Link</Link>`
- An important point to consider is that when user hovers on the link, the link prefetches the content for faster loading

### Handle 404

- Handling 404 is easy. Define a `404.js` at the root level under pages folder

## File Based (Next React) Vs. Code Based (Standard React)

- Easier to define paths and increasing without having to write code to route
