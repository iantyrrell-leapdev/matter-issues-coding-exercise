import { Anchor, Badge, Paper, Table } from "@mantine/core";

export type MatterListItem = { id: string; title: string; type: string };

const typeColors: Record<string, string> = {
  Conveyancing: "blue",
  Family: "violet",
  Litigation: "orange",
  "Wills & Estates": "teal",
};

export function matterTypeColor(type: string): string {
  return typeColors[type] ?? "gray";
}

export function MatterList({ matters }: { matters: MatterListItem[] }) {
  return (
    <Paper withBorder radius="md" shadow="xs">
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Id</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Type</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {matters.map((matter) => (
            <Table.Tr key={matter.id}>
              <Table.Td>{matter.id}</Table.Td>
              <Table.Td>
                <Anchor href={`/matter/${matter.id}`}>{matter.title}</Anchor>
              </Table.Td>
              <Table.Td>
                <Badge variant="light" color={matterTypeColor(matter.type)}>
                  {matter.type}
                </Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
}
