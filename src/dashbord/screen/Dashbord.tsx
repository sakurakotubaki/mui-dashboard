import { styled } from '@mui/material/styles';

import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import HeaderComponent from '../component/HeaderComponent';
import FooterComponent from '../component/FooterComponent';
import SidebarList from '../component/SidbarList';

const drawerWidth = 240;

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const SidebarContainer = styled('div')({
  display: 'flex',
});

const Sidebar = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#f0f0f0',
  },
});

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: '#e8eaf6',
}));

export const DashboardScreen = () => {
  return (
    <Root>
      <HeaderComponent />
      <SidebarContainer>
        <Sidebar variant="permanent">
          <Toolbar /> {/* This empty toolbar pushes content below the app bar */}
          <List>
           
            <SidebarList />
          </List>
        </Sidebar>
        <Content>
          <Toolbar /> {/* This empty toolbar pushes content below the app bar */}
          ここにメインコンテンツを配置する。
          ffff
          ffff
          ddddd
        </Content>
      </SidebarContainer>
      <FooterComponent />
    </Root>
  );
}

export default DashboardScreen;