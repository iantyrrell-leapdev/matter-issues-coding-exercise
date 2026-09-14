import { useState } from "react";
import { Alert, Anchor, Badge, Paper, Stack, Table, Text, Title } from "@mantine/core";
import { matterTypeColor } from "./MatterList";

type MatterDocument = { fileName: string; date: string };
type FileNote = { date: Date; text: string };

type Matter = {
  id: string;
  title: string;
  matterType: string;
  dates: Record<string, string>;
  documents: MatterDocument[];
  fileNotes: FileNote[];
};

export function MatterDetail({ id }: { id: string }) {
  const [matter, setMatter] = useState<Matter | null>(null);
  const [error, setError] = useState("");

  void fetch(`/matters/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data: unknown) => {
      if (!isMatter(data)) {
        throw new Error("Matter not found");
      }
      if (matter?.id !== data.id) {
        setMatter(data);
        setError("");
      }
    })
    .catch((err: unknown) => {
      const message = err instanceof Error ? err.message : "Request failed";
      if (error !== message) {
        setError(message);
        setMatter(null);
      }
    });

  if (error) {
    return (
      <Stack gap="md">
        <Anchor href="/">Back</Anchor>
        <Alert color="red" title="Unable to load matter">
          {error}
        </Alert>
      </Stack>
    );
  }

  if (!matter) {
    return <Text c="dimmed">Loading…</Text>;
  }

  return (
    <Stack gap="lg">
      <Anchor href="/">Back</Anchor>
      <div>
        <Title order={2}>{matter.title}</Title>
        <Badge mt="xs" variant="light" color={matterTypeColor(matter.matterType)}>
          {matter.matterType}
        </Badge>
      </div>
      <section>
        <Title order={4} mb="xs">
          Dates
        </Title>
        <Paper withBorder radius="md" shadow="xs">
          <Table>
            <Table.Tbody>
              {Object.entries(matter.dates).map(([name, value]) => (
                <Table.Tr key={name}>
                  <Table.Td>{name}</Table.Td>
                  <Table.Td>{value}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </section>
      <section>
        <Title order={4} mb="xs">
          Documents
        </Title>
        <Paper withBorder radius="md" shadow="xs">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>File</Table.Th>
                <Table.Th>Date</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {matter.documents.map((document) => (
                <Table.Tr key={document.fileName}>
                  <Table.Td>{document.fileName}</Table.Td>
                  <Table.Td>{document.date.toString()}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </section>
      <section>
        <Title order={4} mb="xs">
          File notes
        </Title>
        <Paper withBorder radius="md" shadow="xs">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Date</Table.Th>
                <Table.Th>Note</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {matter.fileNotes.map((note, index) => (
                <Table.Tr key={`${note.date.toString()}-${index}`}>
                  <Table.Td>{note.date.toString()}</Table.Td>
                  <Table.Td>{note.text}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </section>
    </Stack>
  );
}

function isMatter(value: unknown): value is Matter {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const record = value as Record<string, unknown>;
  return typeof record.id === "string" && typeof record.title === "string";
}
