import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#3f51b5',
  }));

const HeaderComponent = () => {
  return (
    <Header position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ヘッダー
          </Typography>
        </Toolbar>
      </Header>
  )
}

export default HeaderComponent