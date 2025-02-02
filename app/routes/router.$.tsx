import { redirect } from '@remix-run/node'
import type { LoaderFunctionArgs } from '@remix-run/node'

export const loader = (context: LoaderFunctionArgs) => {
  handleRedirects(context)

  return redirect('/router/latest')
}

function handleRedirects(context: LoaderFunctionArgs) {
  const url = new URL(context.request.url)
  // prettier-ignore
  const reactLocationV2List = [
    {from: 'docs/overview',to: 'docs/guide/introduction',},
    {from: 'docs/installation',to: 'docs/guide/installation',},
    {from: 'docs/api',to: 'docs/api/virtualizer',},
    {from: 'examples/fixed',to: 'docs/examples/react/fixed',},
    {from: 'examples/variable',to: 'docs/examples/react/variable',},
    {from: 'examples/dynamic',to: 'docs/examples/react/dynamic',},
    {from: 'examples/infinite-scroll',to: 'docs/examples/react/infinite-scroll',},
    {from: 'examples/padding',to: 'docs/examples/react/padding',},
    {from: 'examples/smooth-scroll',to: 'docs/examples/react/smooth-scroll',},
    {from: 'examples/sticky',to: 'docs/examples/react/sticky',},
    {from: '',to: '',},
  ]

  reactLocationV2List.forEach((item) => {
    if (url.pathname.startsWith(`/router/react-location/${item.from}`)) {
      throw redirect(`/router/v1/${item.to}?from=reactLocationV2`)
    }
  })
}
