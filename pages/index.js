import { useRouter } from 'next/router'

function RedirectPage({ ctx }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/record1');
    return; 
  }
}

RedirectPage.getInitialProps = ctx => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/record1' });
    ctx.res.end();
  }
  return { };
}

export default RedirectPage