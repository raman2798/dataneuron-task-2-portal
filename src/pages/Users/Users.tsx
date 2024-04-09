/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-nested-ternary */
import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { Edit, Search, Visibility } from '@mui/icons-material';
import { debounce, get, gt, isArray, isEmpty, size } from 'lodash';
import { Box, InputAdornment, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomButton, CustomTable, CustomTextField } from '@/elements';
import { CustomLoader, NoContent } from '@/components';
import { useReadAllUsers, useSearchUsers } from './Users.api';
import { CustomPaginationProps } from '@/types';
import { COLORS } from '@/theme';

interface ActionProps {
  row: { id: string };
}

const Users: FC = (): ReactElement => {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState<CustomPaginationProps>({
    page: 0,
    pageSize: 5,
  });

  const [searchValue, setSearchValue] = useState('');

  const query = {
    page: pagination.page + 1,
    limit: pagination.pageSize,
    isEnabled: isEmpty(searchValue),
  };

  const searchQuery = {
    page: pagination.page + 1,
    limit: pagination.pageSize,
    searchValue,
  };

  const { data, isLoading } = useReadAllUsers(query);

  const { data: searchData, isLoading: searchLoading } = useSearchUsers(searchQuery);

  const searchedData = get(searchData, 'data', []);

  const searchedUsers = isArray(searchedData) ? searchedData : [searchedData];

  const allData = get(data, 'data', []);

  const allUsers = isArray(allData) ? allData : [allData];

  const users = gt(size(searchValue), 2) ? searchedUsers : allUsers;

  const debouncedHandleSearch = debounce((value: string) => {
    setSearchValue(value);

    setPagination({ page: 0, pageSize: 5 });
  }, 300);

  const handleSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;

    debouncedHandleSearch(value);
  };

  const handleActionClick = (type: string, id: string = ''): void => {
    const url = `form${id && `?id=${id}`}`;

    navigate(url, {
      state: { type },
    });
  };

  const handleRowClick = ({ row }: ActionProps) => {
    const id = get(row, 'id');

    handleActionClick('view', id);
  };

  const renderActionsCell = ({ row }: ActionProps): ReactElement => {
    const id = get(row, 'id');

    return (
      <Box sx={{ m: 'auto' }}>
        <CustomButton onClick={() => handleActionClick('view', id)}>
          <Visibility />
        </CustomButton>
        <CustomButton onClick={() => handleActionClick('edit', id)}>
          <Edit />
        </CustomButton>
      </Box>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 350,
      renderCell: (params) => (
        <Typography component="div" variant="inherit" onClick={() => handleRowClick(params)} sx={{ '&:hover': { color: COLORS.ORANGE }, cursor: 'pointer', width: '100%' }}>
          {params.formattedValue.first} {params.formattedValue.last}
        </Typography>
      ),
    },
    { field: 'email', headerName: 'Email', width: 350 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      headerAlign: 'center',
      width: 150,
      renderCell: renderActionsCell,
    },
  ];

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <CustomTextField
            name="name"
            type="search"
            placeholder="Search"
            sx={{ width: '20.6rem', height: '3rem' }}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <CustomButton variant="outlined" onClick={() => handleActionClick('add')} sx={{ width: '8rem', height: '2.4rem', mt: -1 }}>
            Add User
          </CustomButton>
        </Box>
      </Box>
      {isLoading || searchLoading ? (
        <CustomLoader />
      ) : isEmpty(users) ? (
        <NoContent textContent={searchValue ? 'No data found.' : `Hey, you currently don't have any User. <br /> Please add first.`} />
      ) : (
        <CustomTable
          columns={columns}
          rows={users}
          paginationMode="server"
          rowCount={get(searchData, 'totalResults', get(data, 'totalResults', 5))}
          paginationModel={pagination}
          onPaginationModelChange={setPagination}
        />
      )}
    </Box>
  );
};

export default Users;
