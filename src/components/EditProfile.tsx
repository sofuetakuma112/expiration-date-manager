import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Stack, TextField, Avatar } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { styled } from '@mui/system';
const StyledFormLabel = styled('label')({
  margin: '0px',
});

// フォームの型
interface FormInput {
  email: string;
  name: string;
  password: string;
  condition: string;
  id: string;
}

// バリデーションルール
// バリデーションスキーマを構築する
const schema = yup.object({
  email: yup
    .string()
    .required('このフィールドは必須項目です')
    .email('正しいメールアドレス入力してください'),
  id: yup.string().required('このフィールドは必須項目です'),
  name: yup.string().required('このフィールドは必須項目です'),
  password: yup
    .string()
    .required('このフィールドは必須項目です')
    .min(6, 'パスワードは6文字以上で入力してください')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      'パスワードは英数字と記号を組み合わせて下さい'
    ),
});

function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack spacing={3} sx={{ flex: 1, display: 'flex' }}>
        <Stack direction="row" spacing={2}>
          <h1 style={{ margin: 0, marginRight: '80px' }}>プロフィール編集</h1>
        </Stack>
        <StyledFormLabel>名前</StyledFormLabel>
        <TextField
          required
          type="name"
          {...register('name')}
          error={'name' in errors}
          helperText={errors.name?.message}
          />
          <StyledFormLabel>画像</StyledFormLabel>
          
        <Button
          color="inherit"
          variant="contained"
          size="large"
          sx={{width: "200px"}}
        >参照</Button>

        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          編集完了
        </Button>
      </Stack>
    </Container>
  );
}

export default EditProfile;
