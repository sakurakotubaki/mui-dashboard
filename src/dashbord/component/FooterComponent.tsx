import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

// footerのポジションをfixedにして、画面下部に固定する
const Footer = styled('footer')(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    padding: theme.spacing(2),
    backgroundColor: '#1a237e',
    color: 'white',
    textAlign: 'center',
  }));

  const FooterComponent = () => {
    return (
        <Footer>
        <Typography variant="body2">
          © 2024 JboyKingdom
        </Typography>
      </Footer>
    )
  }
  
  export default FooterComponent