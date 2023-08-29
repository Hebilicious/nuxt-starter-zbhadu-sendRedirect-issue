# Nuxt 3 Minimal Starter

Working Starter example

## NOTES

### Install the form-actions module from NPM.

when you click the copy button it copies everything 
You can use your package manager to enforce these versions :not clear where to paste, creates error,s and assumes the user knows how to resolve the issue

### Add logic for logging-in and registering users.

This section is not very helpful in getting started, you have imports, validation and other stuff mixed in and I haven't even gotten it running yet

### Create a login page. The name must be the same as your action.

- this should also indicate the path must match the path of the page- you introduce passing the query param for register without any explanation to what is going on along with the action that I cannot even use because of the dependencies

### ERROR when trying to run application following provided instructions

```
[1:51:09 PM] [h3] Implicit event handler conversion is deprecated. Use eventHandler() or fromNodeMiddleware() to define event handlers.       Handler: (event) => {    const action = Object.keys(\_file_home_projects_nuxt_starter_zbhadu_node_modules_h3_dist_index_mjs.getQuery(event))[0];    const handler = action ? actions[action] : Object.values(actions)[0];    return handler(event);  }[nuxt] [request error] [unhandled] [500] handler is not a function   1:51:09 PM  at eval (./.nuxt/dev/index.mjs:957:12)    at eval (./node_modules/h3/dist/index.mjs:1610:47)    at async Object.eval [as handler] (./node_modules/h3/dist/index.mjs:1761:19)    at async Server.toNodeHandle (./node_modules/h3/dist/index.mjs:1972:7) Vite server hmr 6 files in 839.465ms                              1:51:10 PM[nuxt] [request error] [unhandled] [500] handler is not a function   1:51:36 PM  at eval (./.nuxt/dev/index.mjs:957:12)    at eval (./node_modules/h3/dist/index.mjs:1608:14)    at Object.eval [as handler] (./node_modules/h3/dist/index.mjs:1937:28)    at Object.eval [as handler] (./node_modules/h3/dist/index.mjs:1761:31)    at async Server.toNodeHandle (./node_modules/h3/dist/index.mjs:1972:7)
```

### WARNING when parameter name matches action name

```
<button formaction="login?login">Log in</button>
```

### Version Numbers Don't Match

- When you install the module, you get different version numbers than what is in the playground
- The nuxt version has changed from what you have in the documentation
