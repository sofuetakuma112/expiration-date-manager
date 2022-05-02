import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system'; 

// styledは、emotion や styled-components の styled() ユーティリティの代わりとして使用することができます
const StyledTextField = styled(TextField)({
  backgroundColor: 'white',
});

const StyledTitle = styled("h1")({
  width: "100%",
  'text-align': 'center'
})

export default function App() {

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#EEEEEE', border: '1px solid black', width: 500,}}>
      <StyledTitle>アカウント作成</StyledTitle>
      <Box
        sx={{
          maxWidth: '100%'
        }}
      >
        <p>メールアドレス</p>
        <StyledTextField fullWidth id="fullWidth" />
        <p>ユーザー名</p>
        <StyledTextField fullWidth id="fullWidth" />
        <p>パスワード</p>
        <StyledTextField fullWidth id="fullWidth" />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ 
            'margin-top': '20px',
        }}
        >
          はい
        </Button>
      </Box>
    </Container>

  )};