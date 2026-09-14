import { useEffect, useState } from "react";
import { Alert, Container, Title } from "@mantine/core";
import { MatterDetail } from "./components/MatterDetail";
import { MatterList, type MatterListItem } from "./components/MatterList";

export function App() {
  const matterId = window.location.pathname.match(/^\/matter\/([^/]+)$/)?.[1];
  if (matterId) {
    return (
      <Container size="md" py="xl">
        <MatterDetail id={decodeURIComponent(matterId)} />
      </Container>
    );
  }

  return <MatterListPage />;
}

function MatterListPage() {
  const [matters, setMatters] = useState<MatterListItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadMatters() {
      setError("");
      try {
        const response = await fetch("/matters");
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        const data: unknown = await response.json();
        if (!cancelled) {
          setMatters(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setMatters([]);
          setError(err instanceof Error ? err.message : "Request failed");
        }
      }
    }

    void loadMatters();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">
        Matters
      </Title>
      {error ? (
        <Alert color="red" title="Unable to load matters">
          {error}
        </Alert>
      ) : (
        <MatterList matters={matters} />
      )}
    </Container>
  );
}
