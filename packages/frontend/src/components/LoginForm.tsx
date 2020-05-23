import Input from '@material-ui/core/Input';
import { AuthLoginDto } from '@progress/api/models';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import http from 'src/services/http';

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const param = new AuthLoginDto();
    param.username = data.username;
    param.password = data.password;
    await http.post(`${process.env.REACT_APP_API_URL}/v1/auth/login`, param);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={Input}
        placeholder="username"
        name="username"
        control={control}
        defaultValue=""
      />
      <Controller
        as={Input}
        placeholder="password"
        name="password"
        control={control}
        defaultValue=""
      />
      <input type="submit" name="Register" />
    </form>
  );
}
