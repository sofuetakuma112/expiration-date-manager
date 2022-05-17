import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Container,
  Stack,
  TextField,
  Avatar,
  Input,
} from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { styled } from '@mui/system';

//CSS
const StyledFormLabel = styled('label')({
  margin: '0px',
});

const StyledErrorText = styled('p')({
  color: 'red',
});

// フォームの型
interface FormInput {
  name: string;
  condition: string;
  id: string;
  file: string;
}

// バリデーションルール
// バリデーションスキーマを構築する
const schema = yup.object({
  name: yup.string().required('このフィールドは必須項目です'),
  file: yup
    .mixed()
    .test(
      'is-big-file',
      'ファイルはjpegかpngで送信してください',
      checkIfFilesAreCorrectType
    ),
});

//プロフィール画像のルール
export function checkIfFilesAreCorrectType(file: File): boolean {
  let valid = true;
  if (file) {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      valid = false;
    }
  }
  return valid;
}

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
        <StyledFormLabel>プロフィール画像</StyledFormLabel>
        <label
          style={{
            lineHeight: 1.5,
            border: '1px solid #ffffff',
            borderRadius: '5px',
            boxShadow: '2px 2px 5px 0px rgba(200, 200, 200, 1)',
            fontFamily: 'Times New Roman',
            padding: '10px 40px',
            color: '#ffffff',
            backgroundColor: '#19B4CE',
            cursor: 'pointer',
            width: "200px"
          }}
        >
          <input type="file" style={{ display: 'none' }} {...register('file')} />ファイルを選択
        </label>
        {/* エラーメッセージ */}
        <StyledErrorText>{errors.file?.message}</StyledErrorText>

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
