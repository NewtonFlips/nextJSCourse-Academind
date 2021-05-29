import { useRouter } from "next/router";
import Link from "next/link";

function ClientsProjects() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push("/clients/efg/audit2020");
    // router.replace("/clients/efg/audit2020");
    // objects can also be inserted same an client index page
  }

  return (
    <div>
      <h1>Projects of a given client</h1>
      {/* <ul>
        <li>
          <Link href="efg/2020">Audit 2020</Link>
        </li>
        <li>
          <Link href="efg/2019">Audit 2019</Link>
        </li>
      </ul> */}
      {/* Imarative routing [NAVIGATE PROGRAMITACALLY - after submission a form] */}
      <button onClick={loadProjectHandler}>Load a ClientsProject</button>
    </div>
  );
}

export default ClientsProjects;
