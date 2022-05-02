import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Stack, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { styled } from '@mui/system'; 

const StyledTextField = styled("p")({
    margin: '0px',
  });

// フォームの型
interface SampleFormInput {
  email: string;
  name: string;
  password: string;
}

// バリデーションルール
// バリデーションスキーマを構築する
const schema = yup.object({
  email: yup
    .string()
    .required('入力されていません')
    .email('正しいメールアドレス入力してください'),
  name: yup.string().required('入力されていません').min(6, '6文字以上入力してください'),
  password: yup
    .string()
    .required('入力されていません')
    .min(6, '6文字以上入力してください')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      '英字と数字と記号を最低1文字以上入力してください'
    ),
});

function ValidationSampleMui() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data);
  };

  return (
      <>
      <Container
      maxWidth="sm"
      sx={{ pt: 5, 'align-items': 'center', height: "100%", display: "flex", alignItems: "center"}}
      >
      <Stack spacing={3} sx={{ flex: 1 }}>
          <h1>アカウント作成</h1>
      <StyledTextField>メールアドレス</StyledTextField>
        <TextField
          required
          type="email"
          {...register('email')}
          error={'email' in errors}
          helperText={errors.email?.message}
        />
        <StyledTextField>ユーザー名</StyledTextField>
        <TextField
          required
          {...register('name')}
          error={'name' in errors}
          helperText={errors.name?.message}
        />
        <StyledTextField>パスワード</StyledTextField>
        <TextField
          required
          type="password"
          {...register('password')}
          error={'password' in errors}
          helperText={errors.password?.message}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          作成
        </Button>
      </Stack>
    </Container>
      </>
  );
}

export default ValidationSampleMui;
