import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  // Inferred path meaning coded path
  console.log(router.pathname);
  // the actual path that is in the url. This can be used to send a request as we now have actual id of the requested data.
  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
