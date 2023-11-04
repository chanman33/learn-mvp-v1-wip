import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'Title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'Points',
    headerName: 'Points',
    type: 'number',
    width: 90,
    editable: true,
  },
];

const rows = [
  { id: 1, Title: 'vis',       Points: '432,629'},
  { id: 2, Title: 'util',      Points: '165,157'},
  { id: 3, Title: 'animate',   Points: '100,024'},
  { id: 4, Title: 'query',     Points: '89,7215'},
  { id: 5, Title: 'analytics', Points: '48,716'},
  { id: 6, Title: 'scale',     Points: '31,294'},
  { id: 7, Title: 'data',      Points: '30,284'},
  { id: 8, Title: 'physics',   Points: '29,934'},
  { id: 9, Title: 'display',   Points: '24,254'}
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}