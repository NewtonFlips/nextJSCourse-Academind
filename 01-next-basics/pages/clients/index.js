import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "efg",
      clientName: "EFG",
    },
    {
      id: "saf",
      clientName: "Safanad",
    },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`clients/${client.id}`}>{client.clientName}</Link> */}
            {/* An alternative to above syntax */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.clientName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
